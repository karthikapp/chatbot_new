import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { ApiAiClient } from 'api-ai-javascript';
import { environment } from '../../../environments/environment';
import {FirebaseserviceService} from '../../firebaseservice.service'


@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

	messages: any;
  chatmessage : any;
	formValue: string;
  public chathistory: any;
  public timeInMs : any;
  public timeInMsnow: any;
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  public chatcontext : any;
  public res: any;


  constructor(private chat: ChatService, private firebase:FirebaseserviceService ) 

  {

    this.chathistory = []
    console.log(this.chathistory)

  }

  ngOnInit() 
  {
  	// this.chat.talk();

  	//appends to array after new message is added to feedsource
  	// this.messages = this.chat.conversation.asObservable()
  	// 				.scan((acc,val) => acc.concat(val));
    this.timeInMsnow = Date.now();
    var welcomemessage = {'message': "Hello, Good to see you here, How can I help you ?", 'user': "bot", 'time' : this.timeInMsnow}
    console.log(welcomemessage)
    this.chathistory.push(welcomemessage)
    this.chatcontext = {'greivance_stated': "", "greivance_type": "", "customer_id": "", "compliant_exists": ""}

    // this.firebase.createsession(this.chathistory)

  }



  sendmessage(message) 
  {
     this.timeInMsnow = Date.now();
     var usermessage = {'message': message, 'user': "user", 'time' : this.timeInMsnow}
     this.chathistory.push(usermessage)


  	 var messe = this.client.textRequest(message).then(res => {
     this.timeInMsnow = Date.now();
     console.log("res",res)
     this.res = res;
     const speech = res.result.fulfillment.speech;
     if (this.res.result.metadata.intentName == "greivanceintent")
     {
       const greivance_stated  = "Yes";
       this.chatcontext.greivance_stated = greivance_stated
        if (this.res.result.parameters.complaint != "")
        {
          this.chatcontext.greivance_type = "compliant"
        }
        else if (this.res.result.parameters.grievance != "")
        {
          this.chatcontext.greivance_type = "greivance"
        }
     }
     else 
     {
       const greivance_stated  = "No"
     }
     
     var botmessage = {'message': speech, 'user': "bot", 'time' : this.timeInMsnow}
     this.chathistory.push(botmessage)
     
     console.log(this.chatcontext)
     
    })
     
  	this.chatmessage = '';
  }




    public getalignmentmessage(user): any {
        let style: any = null;
        if (user == 'bot') 
        {
          style = {'text-align': 'left'}  
        }

        else if (user == 'user') {
          style = {'text-align': 'right'}  
        }
        
        return style;
   }


   public retrunstyle(user)
   {
     let value = ''
     if (user == 'bot')
     {
       value =  "message my-message "
     }
     else if (user == 'user')
     {
       value = "message  other-message float-right"
     }

    

     return value
   }

}

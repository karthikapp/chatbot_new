import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { ApiAiClient } from 'api-ai-javascript';
import { environment } from '../../../environments/environment';

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


  constructor(private chat: ChatService) 

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

  }



  sendmessage(message) 
  {
     this.timeInMsnow = Date.now();
     var usermessage = {'message': message, 'user': "user", 'time' : this.timeInMsnow}
     this.chathistory.push(usermessage)


  	 var messe = this.client.textRequest(message).then(res => {
     this.timeInMsnow = Date.now();
     console.log("res",res)
     const speech = res.result.fulfillment.speech;
     var botmessage = {'message': speech, 'user': "bot", 'time' : this.timeInMsnow}
     this.chathistory.push(botmessage)
     
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

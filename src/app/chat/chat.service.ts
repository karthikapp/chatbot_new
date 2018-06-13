import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

export class Message


{
	constructor(public content: string, public sentBy: string ){}
}

@Injectable()

export class ChatService {

  public result: any;
	readonly token = environment.dialogflow.angularBot;
	readonly client = new ApiAiClient({accessToken: this.token});
	conversation = new BehaviorSubject<Message[]>([]);



  constructor() 

  { 



  }

  // talk(){
  // 	this.client.textRequest('Who are you!')
  // 	.then(res => console.log(res));
  // }






  // //Add messages to source
  // update(msg: Message){
  // 	this.conversation.next([msg]);
  //   console.log("conversation",this.conversation)
  // }



  //Send and receives messages via DialogFlow


  converse(msg: string){
  	return  this.client.textRequest(msg)
       // .then (res => res)
     //  {

     // //    console.log("response", res);
  			// // const speech = res.result.fulfillment.speech;

     // //     this.result = 
     // //    {
     // //      "reply": speech
     // //    }
     // //    console.log("res",this.result)
     // //    return this.result
  	  //  })
  }



}

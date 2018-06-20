import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {ChatSessionItem} from './models/chatsessionitem'


@Injectable()
export class FirebaseserviceService {
	chatitemsCollection: AngularFirestoreCollection<ChatSessionItem>
	public chatitems : Observable<ChatSessionItem[]>
  public documentid : any;
  public sessionRef : any;


  constructor(private db: AngularFireDatabase, public afs: AngularFirestore)
  { 

  }


  getchatsessions()
  {
    this.chatitems = this.afs.collection('sessions').valueChanges();
    return this.chatitems;
  }

  updatechathistory(chathistory, documentid: string)
  {
    var doctext = 'sessions' +'/'+ String(documentid)+'/chathistory'
    const sessionRef = this.afs.collection('sessions').doc(documentid)
    return sessionRef.update({chathistory:chathistory});
  }

  setcontext(context, documentid: string)
  {
    var doctext = 'sessions' +'/'+ String(documentid)+'/session_context'
    const sessionRef = this.afs.collection('sessions').doc(documentid)
    console.log("setting")
    return sessionRef.set({session_context:context});
  }

  updatecontext(context, documentid: string)
  {
    var doctext = 'sessions' +'/'+ String(documentid)+'/session_context'
    const sessionRef = this.afs.collection('sessions').doc(documentid)
    return sessionRef.update({session_context:context});
  }




  createsession(chathistory,sessioncontext)
  {
    const listRef = this.afs.collection('sessions')
    return listRef.add({ "chathistory": chathistory, "sessionstarttime" : firebase.firestore.FieldValue.serverTimestamp(), "session_context": sessioncontext})
  }

}

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

  constructor(private db: AngularFireDatabase, public afs: AngularFirestore)
   { 
   }

    
    getchatsessions()
    {
    	this.chatitems = this.afs.collection('sessions').valueChanges();
    	return this.chatitems;
    }

 
	createsession(chathistory)
	{
	  const listRef = this.afs.collection('sessions')
	  return listRef.add({ "chathistory": chathistory, "sessionstarttime" : firebase.firestore.FieldValue.serverTimestamp() });
	}

}

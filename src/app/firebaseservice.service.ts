import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable()
export class FirebaseserviceService {

  constructor(private db: AngularFireDatabase)
   { 
   }


	createsession(chathistory)
	{
	  const listRef = this.db.list('sessions');
	  return listRef.push({ chathistory: chathistory });
		
	}

}

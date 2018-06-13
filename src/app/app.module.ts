import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';
import { environment } from '../environments/environment';
import {FirebaseserviceService} from './firebaseservice.service'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    Angular2FontawesomeModule,
    ChatModule,
     MomentModule,
     AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule
  ],

  providers: [FirebaseserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

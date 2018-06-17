import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';
import { environment } from '../environments/environment';
import { FirebaseserviceService} from './firebaseservice.service'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {ChatDialogComponent} from '../app/chat/chat-dialog/chat-dialog.component';
import { DashbaseComponent } from './dashbase/dashbase.component'




const appRoutes: Routes = 
[
  { path: '', component: ChatDialogComponent },
  { path: 'dashboard', component: DashbaseComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    DashbaseComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, 
    Angular2FontawesomeModule,
    ChatModule,
    MomentModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],

  providers: [FirebaseserviceService],
  bootstrap: [AppComponent]
})


export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    Angular2FontawesomeModule,
    ChatModule,
     MomentModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

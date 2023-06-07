import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveMQComponent } from './active-mq/active-mq.component';
import { Client, Message } from '@stomp/stompjs';

@NgModule({
  declarations: [
    AppComponent,
    ActiveMQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

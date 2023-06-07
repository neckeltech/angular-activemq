import { Component, OnInit } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';

@Component({
  selector: 'app-active-mq-component',
  templateUrl: './active-mq.component.html',
  styleUrls: ['./active-mq.component.css']
})
export class ActiveMQComponent implements OnInit {
  client: Client;

  constructor() {
    this.client = new Client();
  }

  ngOnInit() {
    this.client = new Client();
    this.client.brokerURL = 'ws://192.168.1.200:61614'; // URL do servidor ActiveMQ


    this.client.onConnect = () => {
      this.client.subscribe('/topic/bridgingcode-queue', (message: Message) => {
        console.log('Nova mensagem recebida:', message.body);
        alert(message.body);
        // Faça algo com a mensagem recebida
      });
    };

    this.client.activate();
  }
}

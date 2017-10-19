import { Component, OnInit } from '@angular/core';

import { Message } from './message.model';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})
export class EchoComponent implements OnInit {

  messages: Message[] = [];

  constructor() { }

  ngOnInit() {
  }
  onCreateMessage(msg: Message) {
    this.messages.push(msg);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Message } from '../message.model'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Output() createMessage = new EventEmitter<Message>();
  msg: Message = new Message('');

  constructor() { }

  ngOnInit() {
  }

  onAddMessage() {
    this.createMessage.emit(new Message(this.msg.text));
    this.msg.text = "";
  }
}

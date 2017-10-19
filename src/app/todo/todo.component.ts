import { Component, OnInit } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskText = '';
  tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.tasks.push(new Task(this.taskText, false));
      this.taskText = '';
    }
  }
}

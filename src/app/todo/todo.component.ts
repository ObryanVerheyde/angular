import { Component, OnInit, Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/do';

import { Task } from './task.model';


@Injectable()

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskText = '';
  tasks: Task[] = [];
  jsonTask: Task[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('app/api/tasks.json')
    .do(data => console.log(data))
    .map(tasks => tasks.json())
    .subscribe(data => this.jsonTask = data);
  }

  addTask(event: KeyboardEvent) {
    if (event.keyCode === 13 && this.taskText.trim() !== '') {
      this.tasks.push(new Task(this.taskText, false));
      this.taskText = '';
    }
  }

  removeTask(index): void {
    this.tasks.splice(index, 1);
  }

  getNbTaskDone(): number {
    let total = 0;

    for (let task of this.tasks) {
      if (task.done === true) {
        total++;
      }
    }
    return total;
  }
  getTasks() {
      /*
      *   do(function (data) {
      *     console.log(data);
      *   })
      */



  }
}

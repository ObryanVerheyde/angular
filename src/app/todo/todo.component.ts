import {
  Component,
  OnInit
} from '@angular/core';

import {
  Http
} from '@angular/http';

import {
  Task
} from './task.model';

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
    this.http.get('app/api/tasks.json');
  }
}

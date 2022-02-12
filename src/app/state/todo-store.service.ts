import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/Task';
// import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  public tasks: Task[] = [];

  constructor() {
    const date = new Date();
    this.tasks = [{
      id: Date.now(),
      title: 'example task',
      date,
      completed: false
    }];
  }
  addTask(value?: any): void {
    const date = new Date();
    this.tasks.push({
      id: Date.now(),
      title: value,
      date,
      completed: false
    });
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}

import {Injectable} from '@angular/core';
import {Task} from '../interfaces/Task.interface';

// import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  public tasks: Task[] = [];

  constructor() {
    const date = new Date();
    const tasks = JSON.parse(sessionStorage.getItem('tasks')) as Task[];
    if (tasks) {
      this.tasks = tasks;
      console.log('tasks = ', tasks);
    } else {
      this.tasks = [{
        id: Date.now(),
        title: 'example task',
        date,
        completed: false
      }];
    }
  }

  addTask(value?: any): void {
    const date = new Date();
    this.tasks.push({
      id: Date.now(),
      title: value,
      date,
      completed: false
    });
    this.setTasksOnSessionStorage();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.setTasksOnSessionStorage();
  }

  setTasksOnSessionStorage(): void {
    sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}

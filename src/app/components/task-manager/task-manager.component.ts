import { Component, OnInit } from '@angular/core';
import {Task} from '../../../utils/Task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];
  value = '';
  constructor() {
  }

  ngOnInit(): void {
    const date = new Date();
    this.tasks = [{
      title: 'example task',
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      completed: false
    }];
  }


  addTask(): void {
    const date = new Date();
    this.tasks.push({
      title: this.value,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      completed: false
    });
    this.value = '';
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t, i) => i !== id);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../../interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskChange: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setAsDone(): void{
    this.task.completed = !this.task.completed;
  }

  removeTask(task): void {
    this.taskChange.emit(task);
  }
}

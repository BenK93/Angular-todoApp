import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../../utils/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() title;
  @Input() date;
  @Input() time;
  @Input() completed;
  @Input() index;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.completed);
  }

  setAsDone(): void{
    console.log("yess");
    this.completed = !this.completed;
  }

  removeTask(id): void {
    this.onDeleteTask.emit(id);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../menu/interfaces/Task.interface';
import {MatDialog} from '@angular/material/dialog';
import {BasicDialogComponent} from '../commons/basic-dialog/basic-dialog.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskChange: EventEmitter<Task> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  setAsDone(): void{
    this.task.completed = !this.task.completed;
  }

  removeTask(task): void {
    this.taskChange.emit(task);
  }

  openDialog(task: Task): any {
    const data = {
      data: task
    };
    const dialogRef = this.dialog.open(BasicDialogComponent, data);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.removeTask(task);
      }
    });
  }
}


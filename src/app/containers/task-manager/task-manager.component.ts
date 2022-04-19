import {Component, OnInit} from '@angular/core';
import {TodoStoreService} from '../../state/todo-store.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  value = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public _snackBar: MatSnackBar, public todoStore: TodoStoreService) {
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string): any {
    this._snackBar.open(message, 'Adding Task', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  drop(event: CdkDragDrop<string[]>): any {
    moveItemInArray(this.todoStore.tasks, event.previousIndex, event.currentIndex);
  }
}

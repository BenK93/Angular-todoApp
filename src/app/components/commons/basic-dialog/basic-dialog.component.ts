import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Task } from '../../menu/interfaces/Task.interface';

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BasicDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit(): void {
  }

}

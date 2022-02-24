import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Task } from '../../../../interfaces/Task';

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.css']
})
export class BasicDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BasicDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-homework8-dialog',
  templateUrl: './homework8-dialog.component.html',
  styleUrls: ['./homework8-dialog.component.css'],
})
export class Homework8DialogComponent implements OnInit {
  protected name: string = '';
  constructor(protected dialogRef: MatDialogRef<Homework8DialogComponent>) {}

  ngOnInit(): void {}
}

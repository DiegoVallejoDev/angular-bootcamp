import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Homework8DialogComponent } from '../homework8-dialog/homework8-dialog.component';

@Component({
  selector: 'app-homework8',
  templateUrl: './homework8.component.html',
  styleUrls: ['./homework8.component.css'],
})
export class Homework8Component {
  protected option: string = '';

  constructor(public dialog: MatDialog) {}

  protected openDialog(): void {
    const dialogRef = this.dialog.open(Homework8DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.option = result;
    });
  }
}

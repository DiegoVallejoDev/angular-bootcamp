import { Component } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrls: ['./homework4.component.css'],
})
export class Homework4Component {
  onClick() {
    alert('I was triggered by an event');
  }

  public msg1: string = 'Hello World';
  public msg2: string = 'Hello world';
}

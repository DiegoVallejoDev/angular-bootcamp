import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrls: ['./homework4.component.css'],
})
export class Homework4Component implements OnInit {
  onClick() {
    alert('I was triggered by an event');
  }

  public msg1 = 'Hello World';
  public msg2 = 'Hello world';
  constructor() {}
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component implements OnInit {

  public letters: string[] = ['A', 'B', 'C'];
  constructor() { }

  ngOnInit(): void {
  }

}

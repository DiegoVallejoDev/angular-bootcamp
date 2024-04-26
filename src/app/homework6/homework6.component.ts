import { Component, OnInit } from '@angular/core';
import { RootInjectableService } from '../root-injectable.service';

@Component({
  selector: 'app-homework6',
  templateUrl: './homework6.component.html',
  styleUrls: ['./homework6.component.css'],
})
export class Homework6Component implements OnInit {
  constructor(
    protected readonly RootInjectableService: RootInjectableService
  ) {}

  ngOnInit(): void {}
}

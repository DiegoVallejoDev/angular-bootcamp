import { Component } from '@angular/core';
import { RootInjectableService } from '../root-injectable.service';

@Component({
  selector: 'app-homework6',
  templateUrl: './homework6.component.html',
  styleUrls: ['./homework6.component.css'],
})
export class Homework6Component {
  protected fromRootInjectableService: string;
  constructor(protected readonly RootInjectableService: RootInjectableService) {
    this.fromRootInjectableService = RootInjectableService.getPersistentData();
  }
}

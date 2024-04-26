import { Component, OnInit } from '@angular/core';
import { ModuleInjectableService } from '../module-injectable.service';
import { RootInjectableService } from '../root-injectable.service';
@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
})
export class MyFirstComponentComponent implements OnInit {
  constructor(
    protected readonly ModuleInjectableService: ModuleInjectableService,
    protected readonly RootInjectableService: RootInjectableService
  ) {}

  ngOnInit(): void {}
}

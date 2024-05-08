import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework7',
  templateUrl: './homework7.component.html',
  styleUrls: ['./homework7.component.css'],
})
export class Homework7Component {
  public brand: string = 'jordan';
  public price: number = 420.699;
  public selectedCurrency: string = 'MXN';
}

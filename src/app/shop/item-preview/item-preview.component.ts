import { Component, Input, OnInit } from '@angular/core';
import { IPrices, IItem } from '../data';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent {
  @Input() item: IItem = {} as IItem;
  @Input() selectedCurrency: keyof IPrices = 'usd';
}

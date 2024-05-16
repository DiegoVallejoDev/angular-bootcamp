import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPrices } from '../data';
import { ItemsService } from '../items.service';
import { IItem } from '../data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  //item from router slug
  protected error: boolean = false;
  protected itemId: string | null = null;
  protected item: IItem | undefined;
  protected selectedCurrency: keyof IPrices = 'usd';
  protected selectedPhoto: number = 0;

  constructor(
    private route: ActivatedRoute,
    private ItemsService: ItemsService
  ) {
    this.itemId = this.route.snapshot.paramMap.get('item'); //ie /item/1
  }

  calcDiscount(prices: IPrices, discount: number): IPrices {
    const discountPercentage = discount / 100;
    return {
      usd: prices.usd * (1 - discountPercentage),
      eur: prices.eur * (1 - discountPercentage),
      gbp: prices.gbp * (1 - discountPercentage),
    };
  }
  ngOnInit(): void {
    this.item = this.ItemsService.getItems().find(
      (item) => item.id === this.itemId
    );

    if (!this.item) {
      console.error('Item not found');
      this.error = true;
    }
    //currency from get param or default to usd
    this.selectedCurrency =
      (this.route.snapshot.queryParamMap.get('currency') as keyof IPrices) ||
      'usd';
  }
}

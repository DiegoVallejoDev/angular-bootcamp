import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prices } from '../data';
import { CurrencyPipe } from '../currency.pipe';
import { ItemsService } from '../items.service';
import { Item } from '../data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  //item from router slug
  protected error = false;
  protected slug = this.route.snapshot.paramMap.get('item'); //ie /item/1
  protected item: Item | undefined;
  protected currency: keyof prices = 'usd';
  protected selectedPhoto = 0;

  constructor(
    private route: ActivatedRoute,
    private ItemsService: ItemsService
  ) {}

  calcDiscount(prices: prices, discount: number): prices {
    return {
      usd: prices.usd - discount,
      eur: prices.eur - discount,
      gbp: prices.gbp - discount,
    };
  }
  ngOnInit(): void {
    this.item = this.ItemsService.getItems().find(
      (item) => item.id === this.slug
    );

    if (!this.item) {
      console.error('Item not found');
      this.error = true;
    }
    //currency from get param or default to usd
    this.currency =
      (this.route.snapshot.queryParamMap.get('currency') as keyof prices) ||
      'usd';
  }
}

import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  protected items: Item[] = [];
  protected selectedCurrency: 'usd' | 'eur' | 'gbp' = 'usd';
  protected currentPage: number = 1;
  protected itemsPerPage: number = 5;
  protected onlyDiscounts = false;

  filterItems = (item: Item) => {
    if (!this.onlyDiscounts) {
      return true;
    }
    return item.offerDiscount != null;
  };

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  constructor(private ItemsService: ItemsService) {}

  ngOnInit(): void {
    this.items = this.ItemsService.getItems(this.filterItems);
  }
  onFilterChange(): void {
    this.currentPage = 1;
    this.items = this.ItemsService.getItems(this.filterItems);
  }
}

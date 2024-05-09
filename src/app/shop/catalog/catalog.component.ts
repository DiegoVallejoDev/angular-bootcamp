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
  protected filterText = '';

  filterItems = (item: Item): boolean => {
    //onlyDiscounts and filterText
    //if item.offerDiscount is different to this.onlyDiscounts then return false
    if (this.onlyDiscounts && this.onlyDiscounts !== !!item.offerDiscount) {
      return false;
    }
    //if filterText is not included in item.title then return false
    if (!item.title.toLowerCase().includes(this.filterText.toLowerCase())) {
      return false;
    }
    return true;
  };

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  constructor(private ItemsService: ItemsService) {}

  onItemAdded(newItem: Item): void {
    this.ItemsService.addItem(newItem);
    this.items = this.ItemsService.getItems(this.filterItems);
  }

  ngOnInit(): void {
    this.items = this.ItemsService.getItems(this.filterItems);
  }
  onFilterChange(): void {
    this.currentPage = 1;
    this.items = this.ItemsService.getItems(this.filterItems);
  }
}

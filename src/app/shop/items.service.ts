import { Injectable } from '@angular/core';
import { items, Item, IPrices } from './data';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  protected items: Item[] = items;

  getItems(filtering = (item: Item) => true): Item[] {
    return this.items.filter(filtering);
  }
  getItem(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  // without id because is calculated at insertion
  addItem(newItem: {
    id?: string;
    title: string;
    prices: IPrices;
    photos: string[];
    description: string;
    offerDiscount?: number;
  }): void {
    newItem.id = (this.items.length + 1).toString();
    this.items.push(newItem as Item);
  }
}

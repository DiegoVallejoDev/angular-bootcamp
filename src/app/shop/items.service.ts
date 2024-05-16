import { Injectable } from '@angular/core';
import { items, IItem, IPrices } from './data';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  protected items: IItem[];
  
  constructor() {
    this.items = items;
  }

  getItems(filtering = (item: IItem) => true): IItem[] {
    return this.items.filter(filtering);
  }
  getItem(id: string): IItem | undefined {
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
    this.items.push(newItem as IItem);
  }
}

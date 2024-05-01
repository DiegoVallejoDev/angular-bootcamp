import { Component, OnInit } from '@angular/core';
import { Item } from '../data';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.css'],
})
export class ItemFilterComponent implements OnInit {
  items: Item[] = []; // Suponiendo que tienes una lista de ítems
  filteredItems: Item[] = [];
  searchKeyword: string = '';

  constructor(private ItemsService: ItemsService) {}

  ngOnInit(): void {
    // Crear la suscripción al cambio del input
    this.createFilterSubscription();
  }

  fetchItemsFrom(): Item[] {
    return this.ItemsService.getItems();
  }

  createFilterSubscription(): void {
    const searchInput = document.getElementById(
      'search-input'
    ) as HTMLInputElement;
    if (searchInput) {
      fromEvent(searchInput, 'input')
        .pipe(debounceTime(300))
        .subscribe(() => {
          this.searchKeyword = searchInput.value;
          this.filteredItems = this.filterItems();
        });
    }
  }

  filterItems(): Item[] {
    const keyword = this.searchKeyword.toLowerCase().trim();
    return this.items.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
    );
  }
}

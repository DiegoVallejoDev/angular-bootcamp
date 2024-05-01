import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { CurrencyPipe } from './currency.pipe';
import { PaginationPipe } from './pagination.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemFilterComponent } from './item-filter/item-filter.component';

@NgModule({
  declarations: [
    CatalogComponent,
    ItemComponent,
    CurrencyPipe,
    PaginationPipe,
    PaginationComponent,
    ItemFormComponent,
    ItemFilterComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ShopModule {}

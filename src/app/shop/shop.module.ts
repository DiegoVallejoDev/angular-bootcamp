import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { PaginationPipe } from './pagination.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogComponent,
    ItemComponent,
    PaginationPipe,
    PaginationComponent,
    ItemFormComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ShopModule {}

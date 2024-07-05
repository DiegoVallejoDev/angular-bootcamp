import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  // item route
  {
    path: ':item',
    component: ItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

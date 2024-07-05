import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./a/a.module').then((m) => m.AModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./b/b.module').then((m) => m.BModule),
  },
  //shop module
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

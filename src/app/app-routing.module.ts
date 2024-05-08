import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homework9Component } from './homework9/homework9.component';
import { Homework9SlugComponent } from './homework9-slug/homework9-slug.component';

const routes: Routes = [
  {
    path: 'homework9',
    component: Homework9Component,
  },
  {
    path: 'homework9lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'homework9/:slug',
    component: Homework9SlugComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

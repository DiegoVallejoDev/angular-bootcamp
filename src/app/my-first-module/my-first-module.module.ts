import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: MyFirstComponentComponent,
  }
];

@NgModule({
  declarations: [
    MyFirstComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MyFirstModuleModule { }




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../myFirstComponent/my-first.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: MyFirstComponent,
  },
];

@NgModule({
  declarations: [MyFirstComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class MyFirstModuleModule {}

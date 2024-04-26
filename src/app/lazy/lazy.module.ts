import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homework9LazyComponent } from '../homework9-lazy/homework9-lazy.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [Homework9LazyComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class LazyModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework1Component } from './homework1/homework1.component';
import { Homework2Component } from './homework2/homework2.component';
import { CapitalizeDirective } from './capitalize.directive';
import { Homework3Component } from './homework3/homework3.component';
import { Homework4Component } from './homework4/homework4.component';
import { MyFirstModule } from './myFirstModule/my-first.module';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    Homework2Component,
    CapitalizeDirective,
    Homework3Component,
    Homework4Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MyFirstModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

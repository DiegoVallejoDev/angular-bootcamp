import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework1Component } from './homework1/homework1.component';
import { Homework2Component } from './homework2/homework2.component';
import { CapitalizeDirective } from './capitalize.directive';
import { Homework3Component } from './homework3/homework3.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    Homework2Component,
    CapitalizeDirective,
    Homework3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

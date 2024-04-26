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
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { RootInjectableService } from './root-injectable.service';
import { Homework6Component } from './homework6/homework6.component';
import { Homework7Component } from './homework7/homework7.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    Homework2Component,
    CapitalizeDirective,
    Homework3Component,
    Homework4Component,
    Homework6Component,
    Homework7Component,
    CapitalizePipe,
    CurrencyPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MyFirstModuleModule],
  providers: [RootInjectableService],
  bootstrap: [AppComponent],
})
export class AppModule {}

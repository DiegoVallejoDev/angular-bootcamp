import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework1Component } from './homework1/homework1.component';
import { Homework2Component } from './homework2/homework2.component';
import { Homework3Component } from './homework3/homework3.component';
import { Homework4Component } from './homework4/homework4.component';
import { Homework6Component } from './homework6/homework6.component';
import { Homework7Component } from './homework7/homework7.component';
import { Homework8Component } from './homework8/homework8.component';
import { Homework8DialogComponent } from './homework8-dialog/homework8-dialog.component';

import { CapitalizeDirective } from './capitalize.directive';
import { CapitalizePipe } from './capitalize.pipe';

import { MyFirstModuleModule } from './myFirstModule/my-first.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RootInjectableService } from './root-injectable.service';
import { MatButtonModule } from '@angular/material/button';

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
    Homework8Component,
    Homework8DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModuleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [RootInjectableService],
  bootstrap: [AppComponent],
})
export class AppModule {}

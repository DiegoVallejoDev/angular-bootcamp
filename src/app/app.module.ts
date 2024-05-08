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
import { MyFirstModuleModule } from './myFirstModule/my-first.module';
import { RootInjectableService } from './root-injectable.service';
import { Homework6Component } from './homework6/homework6.component';
import { Homework7Component } from './homework7/homework7.component';
import { CapitalizePipe } from './capitalize.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Homework8Component } from './homework8/homework8.component';
import { Homework8DialogComponent } from './homework8-dialog/homework8-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Homework9Component } from './homework9/homework9.component';
import { Homework9SlugComponent } from './homework9-slug/homework9-slug.component';

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
    Homework9Component,
    Homework9SlugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModuleModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [RootInjectableService],
  bootstrap: [AppComponent],
})
export class AppModule {}

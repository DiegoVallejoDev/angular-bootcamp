import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { ModuleInjectableService } from '../module-injectable.service';

@NgModule({
  declarations: [MyFirstComponentComponent],
  imports: [CommonModule],
  providers: [ModuleInjectableService],
})
export class MyFirstModuleModule {}

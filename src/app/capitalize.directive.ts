import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective {
  constructor(element: ElementRef) {
    const value: string = element.nativeElement.innerText;
    if(value){
      const newValue = value.split(" ")
      .map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
      .join(" ")
    element.nativeElement.innerText = newValue;
    }
  }
}

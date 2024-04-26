import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.textTransform = 'capitalize';
  }
}

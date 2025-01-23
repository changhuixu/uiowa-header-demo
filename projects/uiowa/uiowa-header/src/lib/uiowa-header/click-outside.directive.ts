import { Directive, ElementRef, output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: false,
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class ClickOutsideDirective {
  clickOutside = output<MouseEvent>();
  constructor(private _elementRef: ElementRef) {}

  onClick(event: MouseEvent): void {
    const target = event.target;
    if (!target) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}

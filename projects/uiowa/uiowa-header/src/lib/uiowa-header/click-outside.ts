import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class ClickOutside {
  clickOutside = output<MouseEvent>();
  private _elf = inject(ElementRef);

  onClick(event: MouseEvent): void {
    const target = event.target;
    if (target) {
      const clickedInside = this._elf.nativeElement.contains(target);
      if (!clickedInside) {
        this.clickOutside.emit(event);
      }
    }
  }
}

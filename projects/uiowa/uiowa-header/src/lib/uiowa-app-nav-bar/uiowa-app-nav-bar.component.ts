import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { InternalRoute } from '../models/internal-route';

@Component({
  selector: 'uiowa-app-nav-bar',
  templateUrl: './uiowa-app-nav-bar.component.html',
  styleUrls: ['./uiowa-app-nav-bar.component.css']
})
export class UiowaAppNavBarComponent {
  @Input() applicationName: string;
  @Input() internalRoutes: InternalRoute[];
  isCollapsed = true;
  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: MouseEvent | TouchEvent) {
    if (this.isCollapsed) {
      return;
    }
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isCollapsed = true;
    }
  }
}

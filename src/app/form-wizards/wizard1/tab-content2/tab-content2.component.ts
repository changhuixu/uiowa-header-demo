import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reservation } from '../../models';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-tab-content2',
    templateUrl: './tab-content2.component.html',
    styleUrls: ['./tab-content2.component.css'],
    standalone: false
})
export class TabContent2Component implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  @Input() reservation!: Reservation;
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  days = 0;
  constructor() {}

  ngOnInit() {
    const oneDay = 24 * 60 * 60 * 1000;
    const ticks =
      this.reservation.dateRange.end!.getTime() -
      this.reservation.dateRange.start!.getTime();
    this.days = Math.round(Math.abs(ticks / oneDay));
    this.reservation.totalAmount =
      this.reservation.roomType.price * this.days * this.reservation.quantity;
  }

  continue() {
    this.next.emit();
  }

  back() {
    this.prev.emit();
  }
}

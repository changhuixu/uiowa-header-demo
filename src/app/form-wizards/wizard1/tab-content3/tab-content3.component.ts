import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Reservation } from '../../models';
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-tab-content3',
    templateUrl: './tab-content3.component.html',
    styleUrls: ['./tab-content3.component.css'],
    standalone: false
})
export class TabContent3Component implements OnInit {
  faCheck = faCheck;
  faChevronLeft = faChevronLeft;
  @Input() reservation!: Reservation;
  @Output() prev = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  back() {
    this.prev.emit();
  }

  confirm() {}
}

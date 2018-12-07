import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Reservation } from '../../models';

@Component({
  selector: 'app-tab-content3',
  templateUrl: './tab-content3.component.html',
  styleUrls: ['./tab-content3.component.css']
})
export class TabContent3Component implements OnInit {
  @Input() reservation: Reservation;
  @Output() prev = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  back() {
    this.prev.emit();
  }

  confirm() {}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../models';
import { ReservationService } from '../services/reservation.service';
import { TabContent1Component } from './tab-content1/tab-content1.component';
import {
  faBed,
  faCreditCard,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-wizard1',
    templateUrl: './wizard1.component.html',
    styleUrls: ['./wizard1.component.css'],
    standalone: false
})
export class Wizard1Component implements OnInit {
  faBed = faBed;
  faCreditCard = faCreditCard;
  faClipboard = faClipboard;
  reservation!: Reservation;
  activeId = 1;

  @ViewChild(TabContent1Component)
  private tab1!: TabContent1Component;

  constructor(private readonly svc: ReservationService) {}

  ngOnInit() {
    this.reservation = this.svc.getDefaultReservation();
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
    this.activeId = changeEvent.nextId;
  }

  navToPaymentTab() {
    if (!this.svc.isStep1Valid(this.reservation)) {
      this.tab1.continue();
      this.activeId = 1;
    }
  }
}

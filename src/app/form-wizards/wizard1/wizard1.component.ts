import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../models';
import { ReservationService } from '../services/reservation.service';
import { TabContent1Component } from './tab-content1/tab-content1.component';

@Component({
  selector: 'app-wizard1',
  templateUrl: './wizard1.component.html',
  styleUrls: ['./wizard1.component.css']
})
export class Wizard1Component implements OnInit {
  currentTab = 1;
  reservation: Reservation;

  @ViewChild(TabContent1Component) private tab1: TabContent1Component;
  constructor(private readonly svc: ReservationService) {}

  ngOnInit() {
    this.reservation = this.svc.getDefaultReservation();
  }

  beforeChange($event: NgbTabChangeEvent) {
    if (
      $event.activeId === 'tab1' &&
      !this.svc.isStep1Valid(this.reservation)
    ) {
      $event.preventDefault();
      this.tab1.continue();
      return;
    }
    if ($event.nextId === 'tab2') {
      this.currentTab = 2;
    } else if ($event.nextId === 'tab3') {
      this.currentTab = 3;
    } else {
      this.currentTab = 1;
    }
  }
}

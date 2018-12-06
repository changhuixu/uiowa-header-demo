import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../models/reservation';
import { DateRange } from '@uiowa/date-range-picker';
import { ReservationService } from '../services/reservation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wizard1',
  templateUrl: './wizard1.component.html',
  styleUrls: ['./wizard1.component.css']
})
export class Wizard1Component implements OnInit {
  currentTab$: Observable<number>;
  reservation: Reservation;
  constructor(private readonly svc: ReservationService) {
    this.currentTab$ = this.svc.currentTab$;
  }

  ngOnInit() {
    this.reservation = {
      dateRange: DateRange.nextDays(2),
      extras: {}
    } as Reservation;
  }

  select(stepId: number) {
    this.svc.selectTab(stepId);
  }

  beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab2') {
      this.svc.selectTab(2);
    } else if ($event.nextId === 'tab3') {
      this.svc.selectTab(3);
    } else {
      this.svc.selectTab(1);
    }
  }
}

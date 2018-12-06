import { Component, OnInit, Input } from '@angular/core';
import { RoomType } from '../../models/room-type';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-tab-content1',
  templateUrl: './tab-content1.component.html',
  styleUrls: ['./tab-content1.component.css']
})
export class TabContent1Component implements OnInit {
  @Input() reservation: Reservation;
  roomtypes: RoomType[];
  constructor(private readonly svc: ReservationService) {}

  ngOnInit() {
    this.svc.getAllRoomTypes().subscribe(x => (this.roomtypes = x));
  }

  isSameRoomType(a: RoomType, b: RoomType): boolean {
    return a && b && a.id === b.id;
  }

  next() {
    this.svc.selectTab(2);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoomType, Reservation, RoomExtras } from '../models';
import { DateRange } from '@uiowa/date-range-picker';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor() {}

  isStep1Valid(reservation: Reservation): boolean {
    return !!reservation.roomType;
  }

  getAllRoomTypes(): Observable<RoomType[]> {
    return of([
      {
        id: 1,
        name: 'Single Room ($118/night)',
        price: 118
      } as RoomType,
      {
        id: 2,
        name: 'Double Room ($138/night)',
        price: 138
      } as RoomType,
      {
        id: 3,
        name: 'Business Suite ($218/night)',
        price: 218
      } as RoomType,
      {
        id: 4,
        name: 'Presidential Suite ($518/night)',
        price: 518
      } as RoomType,
      {
        id: 5,
        name: 'Store Room (100 sqft) ($58/night)',
        price: 58
      } as RoomType
    ]);
  }

  getDefaultReservation(): Reservation {
    return {
      dateRange: DateRange.nextDays(2),
      quantity: 1,
      extras: {
        breakfast: false,
        tv: true,
        wifi: false,
        parking: false,
        balcony: false
      } as RoomExtras,
      payment: {}
    } as Reservation;
  }
}

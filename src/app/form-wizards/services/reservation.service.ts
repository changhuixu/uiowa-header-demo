import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { RoomType } from '../models/room-type';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly _currentTab = new BehaviorSubject<number>(1);
  currentTab$ = this._currentTab.asObservable();
  constructor() {}

  selectTab(i: number) {
    this._currentTab.next(i);
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
}

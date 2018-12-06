import { DateRange } from '@uiowa/date-range-picker';
import { Payment } from './payment';
import { RoomType } from './room-type';
import { RoomExtras } from './room-extras';

export interface Reservation {
  dateRange: DateRange;
  roomType: RoomType;
  quantity: number;
  extras: RoomExtras;
  estimatedArrivalTime: Date;
  notes: string;
  totalAmount: number;
  payment: Payment;
}

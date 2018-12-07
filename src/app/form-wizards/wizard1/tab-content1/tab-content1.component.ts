import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { RoomType, Reservation } from '../../models';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-tab-content1',
  templateUrl: './tab-content1.component.html',
  styleUrls: ['./tab-content1.component.css']
})
export class TabContent1Component implements OnInit {
  @Input() reservation: Reservation;
  @Output() next = new EventEmitter<void>();
  roomtypes: RoomType[];
  @ViewChild('form') form: ElementRef;

  constructor(private readonly svc: ReservationService) {}

  ngOnInit() {
    this.svc.getAllRoomTypes().subscribe(x => (this.roomtypes = x));
  }

  isSameRoomType(a: RoomType, b: RoomType): boolean {
    return a && b && a.id === b.id;
  }

  continue() {
    if (!this.svc.isStep1Valid(this.reservation)) {
      this.form.nativeElement.classList.add('was-validated');
      return;
    }
    this.next.emit();
  }
}

import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { RoomType, Reservation } from '../../models';
import { ReservationService } from '../../services/reservation.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-tab-content1',
    templateUrl: './tab-content1.component.html',
    styleUrls: ['./tab-content1.component.css'],
    standalone: false
})
export class TabContent1Component implements OnInit {
  faChevronRight = faChevronRight;
  @Input() reservation!: Reservation;
  @Output() next = new EventEmitter<void>();
  roomTypes: RoomType[] = [];
  @ViewChild('form', { static: true }) form!: ElementRef;

  constructor(private readonly svc: ReservationService) {}

  ngOnInit() {
    this.svc.getAllRoomTypes().subscribe((x) => (this.roomTypes = x));
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

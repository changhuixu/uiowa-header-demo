import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-tab-content3',
  templateUrl: './tab-content3.component.html',
  styleUrls: ['./tab-content3.component.css']
})
export class TabContent3Component implements OnInit {
  @Input() reservation: Reservation;
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-tab-content2',
  templateUrl: './tab-content2.component.html',
  styleUrls: ['./tab-content2.component.css']
})
export class TabContent2Component implements OnInit {
  @Input() reservation: Reservation;
  constructor() {}

  ngOnInit() {}
}

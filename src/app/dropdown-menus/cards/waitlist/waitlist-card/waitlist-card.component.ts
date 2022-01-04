import { Component, OnInit, Input } from '@angular/core';
import { Waitlist } from '../../../models';

@Component({
  selector: 'app-waitlist-card',
  templateUrl: './waitlist-card.component.html',
  styleUrls: ['./waitlist-card.component.css']
})
export class WaitlistCardComponent implements OnInit {
  @Input() waitlist!: Waitlist;
  constructor() {}

  ngOnInit() {}
}

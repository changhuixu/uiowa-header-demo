import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../../models';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  @Input() offer: Offer;
  constructor() { }

  ngOnInit() {
  }

}

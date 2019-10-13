import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  @Input() offer: Offer;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  open(content: any) {
    this.modalService
      .open(content, {
        size: 'lg',
        ariaLabelledBy: 'modal-title'
      })
      .result.then(_ => {}, _ => {});
  }
}

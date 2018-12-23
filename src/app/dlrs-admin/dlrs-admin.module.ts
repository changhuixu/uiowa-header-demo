import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DlrsAdminRoutingModule } from './dlrs-admin-routing.module';

import { HomeComponent } from './home/home.component';
import { PendingReviewsComponent } from './reviews/pending-reviews/pending-reviews.component';
import { DlrsComponent } from './landing-pages/dlrs/dlrs.component';
import { PrintingOrdersComponent } from './landing-pages/printing-orders/printing-orders.component';
import { ParkingWaitlistComponent } from './landing-pages/parking-waitlist/parking-waitlist.component';
import { WaitlistComponent } from './cards/waitlist/waitlist.component';
import { WaitlistCardComponent } from './cards/waitlist/waitlist-card/waitlist-card.component';
import { OfferCardComponent } from './cards/waitlist/offer-card/offer-card.component';

@NgModule({
  imports: [CommonModule, NgbModule, DlrsAdminRoutingModule],
  declarations: [
    HomeComponent,
    PendingReviewsComponent,
    DlrsComponent,
    PrintingOrdersComponent,
    ParkingWaitlistComponent,
    WaitlistComponent,
    WaitlistCardComponent,
    OfferCardComponent
  ]
})
export class DlrsAdminModule {}

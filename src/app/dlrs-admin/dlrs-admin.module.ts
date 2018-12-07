import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlrsAdminRoutingModule } from './dlrs-admin-routing.module';

import { HomeComponent } from './home/home.component';
import { PendingReviewsComponent } from './reviews/pending-reviews/pending-reviews.component';
import { DlrsComponent } from './landing-pages/dlrs/dlrs.component';
import { PrintingOrdersComponent } from './landing-pages/printing-orders/printing-orders.component';
import { ParkingWaitlistComponent } from './landing-pages/parking-waitlist/parking-waitlist.component';

@NgModule({
  imports: [CommonModule, DlrsAdminRoutingModule],
  declarations: [
    HomeComponent,
    PendingReviewsComponent,
    DlrsComponent,
    PrintingOrdersComponent,
    ParkingWaitlistComponent
  ]
})
export class DlrsAdminModule {}

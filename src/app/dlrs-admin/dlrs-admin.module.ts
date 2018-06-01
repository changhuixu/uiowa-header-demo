import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlrsAdminRoutingModule } from './dlrs-admin-routing.module';

import { HomeComponent } from './home/home.component';
import { PendingReviewsComponent } from './reviews/pending-reviews/pending-reviews.component';
import { CompletedReviewsComponent } from './reviews/completed-reviews/completed-reviews.component';
import { DriversReportComponent } from './drivers/drivers-report/drivers-report.component';
import { DuplicateDriversComponent } from './drivers/duplicate-drivers/duplicate-drivers.component';

@NgModule({
  imports: [
    CommonModule,
    DlrsAdminRoutingModule
  ],
  declarations: [
    HomeComponent,
    PendingReviewsComponent,
    CompletedReviewsComponent,
    DriversReportComponent,
    DuplicateDriversComponent
  ]
})
export class DlrsAdminModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PendingReviewsComponent } from './reviews/pending-reviews/pending-reviews.component';
import { CompletedReviewsComponent } from './reviews/completed-reviews/completed-reviews.component';
import { DriversReportComponent } from './drivers/drivers-report/drivers-report.component';
import { DuplicateDriversComponent } from './drivers/duplicate-drivers/duplicate-drivers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'pendingReviews',
        pathMatch: 'full'
      },
      {
        path: 'pendingReviews',
        component: PendingReviewsComponent
      },
      {
        path: 'completedReviews',
        component: CompletedReviewsComponent
      },
      {
        path: 'driversReport',
        component: DriversReportComponent
      },
      {
        path: 'duplicateDrivers',
        component: DuplicateDriversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DlrsAdminRoutingModule {}

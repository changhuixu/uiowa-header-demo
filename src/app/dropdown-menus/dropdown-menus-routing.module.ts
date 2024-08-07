import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PendingReviewsComponent } from './reviews/pending-reviews/pending-reviews.component';
import { PrintingOrdersComponent } from './landing-pages/printing-orders/printing-orders.component';
import { ParkingWaitlistComponent } from './landing-pages/parking-waitlist/parking-waitlist.component';
import { DlrsComponent } from './landing-pages/dlrs/dlrs.component';
import { WaitlistComponent } from './cards/waitlist/waitlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'pendingReviews',
        pathMatch: 'full',
      },
      {
        path: 'pendingReviews',
        component: PendingReviewsComponent,
      },
      {
        path: 'dlrs',
        component: DlrsComponent,
      },
      {
        path: 'printingOrders',
        component: PrintingOrdersComponent,
      },
      {
        path: 'waitlist',
        component: ParkingWaitlistComponent,
      },
      {
        path: 'my-waitlists',
        component: WaitlistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropdownMenusRoutingModule {}

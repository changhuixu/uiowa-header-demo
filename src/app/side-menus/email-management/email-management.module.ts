import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { EmailDeliveryFailuresComponent } from './email-delivery-failures/email-delivery-failures.component';
import { LayoutComponent } from './layout.component';
import { QueuedEmailsComponent } from './queued-emails/queued-emails.component';
import { SearchEmailsComponent } from './search-emails/search-emails.component';

export const childRoutes: Routes = [
  {
    path: 'search',
    component: SearchEmailsComponent,
    data: { title: 'Search Emails' },
  },
  {
    path: 'queued-emails',
    component: QueuedEmailsComponent,
    data: { title: 'Queued Emails' },
  },
  {
    path: 'email-delivery-failures',
    component: EmailDeliveryFailuresComponent,
    data: { title: 'Email Delivery Failures' },
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    SearchEmailsComponent,
    QueuedEmailsComponent,
    EmailDeliveryFailuresComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: childRoutes[0].path,
          },
          ...childRoutes,
        ],
      },
    ]),
  ],
})
export class EmailManagementModule {}

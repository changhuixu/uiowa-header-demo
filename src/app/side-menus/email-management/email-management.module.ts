import { Routes } from '@angular/router';
import { EmailManagement } from './email-management';
import { EmailSearch } from './email-search/email-search';
import { FailedEmails } from './failed-emails/failed-emails';
import { PendingEmails } from './pending-emails/pending-emails';

export const childRoutes: Routes = [
  {
    path: 'search',
    component: EmailSearch,
    data: { title: 'Search Emails' },
  },
  {
    path: 'pending',
    component: PendingEmails,
    data: { title: 'Queued Emails' },
  },
  {
    path: 'failed',
    component: FailedEmails,
    data: { title: 'Email Delivery Failures' },
  },
];

export const EmailManagementModule: Routes = [
  {
    path: '',
    component: EmailManagement,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: childRoutes[0].path,
      },
      ...childRoutes,
    ],
  },
];

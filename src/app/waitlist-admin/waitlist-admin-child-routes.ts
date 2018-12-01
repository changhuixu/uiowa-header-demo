import { Routes } from '@angular/router';
import { PendingOffersComponent } from './pending-offers/pending-offers.component';
import { CurrentOffersComponent } from './current-offers/current-offers.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LotsComponent } from './lots/lots.component';
import { ReportsComponent } from './reports/reports.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';

export const childRoutes: Routes = [
  {
    path: 'pending-offers',
    component: PendingOffersComponent,
    data: { linkText: 'Pending Offers', iconClass: 'fa-hourglass-start' }
  },
  {
    path: 'current-offers',
    component: CurrentOffersComponent,
    data: { linkText: 'Current Offers', iconClass: 'fa-fire' }
  },
  {
    path: 'applicants',
    component: ApplicantsComponent,
    data: { linkText: 'Applicants', iconClass: 'fa-users' }
  },
  {
    path: 'buildings',
    component: BuildingsComponent,
    data: { linkText: 'Buildings', iconClass: 'fa-building-o' }
  },
  {
    path: 'lots',
    component: LotsComponent,
    data: { linkText: 'Parking Lots', iconClass: 'fa-map-marker' }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: { linkText: 'Reports', iconClass: 'fa-bar-chart' }
  },
  {
    path: 'email-templates',
    component: EmailTemplatesComponent,
    data: { linkText: 'Email Templates', iconClass: 'fa-envelope-o' }
  },
  {
    path: 'university-holidays',
    loadChildren: './university-holidays/university-holidays.module#UniversityHolidaysModule',
    data: { linkText: 'University Holidays', iconClass: 'fa-calendar-check-o' }
  }
];

export interface LinkItem {
  iconClass: string;
  text: string;
  path: string;
}

export const childRouteLinkItems: LinkItem[] = childRoutes.map(x => {
  return {
    iconClass: x.data.iconClass,
    text: x.data.linkText,
    path: x.path
  } as LinkItem;
});

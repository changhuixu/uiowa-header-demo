import { Routes } from '@angular/router';
import { PendingOffersComponent } from './pending-offers/pending-offers.component';
import { CurrentOffersComponent } from './current-offers/current-offers.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LotsComponent } from './lots/lots.component';
import { ReportsComponent } from './reports/reports.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHourglassStart,
  faFire,
  faUsers,
  faBuilding,
  faMapMarker,
  faChartBar,
  faEnvelopeOpen,
  faCalendarCheck,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

export const childRoutes: Routes = [
  {
    path: 'pending-offers',
    component: PendingOffersComponent,
    data: { linkText: 'Pending Offers', icon: faHourglassStart },
  },
  {
    path: 'current-offers',
    component: CurrentOffersComponent,
    data: { linkText: 'Current Offers', icon: faFire },
  },
  {
    path: 'applicants',
    component: ApplicantsComponent,
    data: { linkText: 'Applicants', icon: faUsers },
  },
  {
    path: 'buildings',
    component: BuildingsComponent,
    data: { linkText: 'Buildings', icon: faBuilding },
  },
  {
    path: 'lots',
    component: LotsComponent,
    data: { linkText: 'Parking Lots', icon: faMapMarker },
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: { linkText: 'Reports', icon: faChartBar },
  },
  {
    path: 'email-templates',
    component: EmailTemplatesComponent,
    data: { linkText: 'Email Templates', icon: faEnvelopeOpen },
  },
  {
    path: 'university-holidays',
    loadChildren: () =>
      import('./university-holidays/university-holidays.module').then(
        (m) => m.UniversityHolidaysModule
      ),
    data: { linkText: 'University Holidays', icon: faCalendarCheck },
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then((m) => m.FaqsModule),
    data: { linkText: 'FAQs', icon: faQuestionCircle },
  },
];

export interface LinkItem {
  icon: IconDefinition;
  text: string;
  path: string;
}

export const childRouteLinkItems: LinkItem[] = childRoutes.map((x) => {
  return {
    icon: x.data!['icon'],
    text: x.data!['linkText'],
    path: x.path,
  } as LinkItem;
});

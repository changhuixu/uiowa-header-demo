import { Routes } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBuilding,
  faCalendarCheck,
  faChartBar,
  faEnvelopeOpen,
  faFire,
  faHome,
  faHourglassStart,
  faMapMarker,
  faQuestionCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { ApplicantsComponent } from './applicants/applicants.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { CurrentOffersComponent } from './current-offers/current-offers.component';
import { HomeComponent } from './home/home.component';
import { LotsComponent } from './lots/lots.component';
import { PendingOffersComponent } from './pending-offers/pending-offers.component';

export const childRoutes: Routes = [
  {
    path: 'dash-board',
    component: HomeComponent,
    data: { text: 'Admin Home', icon: faHome },
  },
  {
    path: 'pending-offers',
    component: PendingOffersComponent,
    data: { text: 'Pending Offers', icon: faHourglassStart },
  },
  {
    path: 'current-offers',
    component: CurrentOffersComponent,
    data: { text: 'Current Offers', icon: faFire },
  },
  {
    path: 'applicants',
    component: ApplicantsComponent,
    data: { text: 'Applicants', icon: faUsers },
  },
  {
    path: 'buildings',
    component: BuildingsComponent,
    data: { text: 'Buildings', icon: faBuilding },
  },
  {
    path: 'lots',
    component: LotsComponent,
    data: { text: 'Parking Lots', icon: faMapMarker },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
    data: { text: 'Reports', icon: faChartBar },
  },
  {
    path: 'email-management',
    loadChildren: () =>
      import('./email-management/email-management.module').then(
        (m) => m.EmailManagementModule
      ),
    data: { text: 'Email Management', icon: faEnvelopeOpen },
  },
  {
    path: 'university-holidays',
    loadChildren: () =>
      import('./university-holidays/university-holidays.module').then(
        (m) => m.UniversityHolidaysModule
      ),
    data: { text: 'University Holidays', icon: faCalendarCheck },
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then((m) => m.FaqsModule),
    data: { text: 'FAQs', icon: faQuestionCircle },
  },
];

export interface SideNavItem {
  icon: IconDefinition;
  text: string;
  path: string;
}

export const childRouteSideNavItems: SideNavItem[] = childRoutes
  .filter((x) => x.data)
  .map((x) => {
    return {
      icon: x.data!['icon'],
      text: x.data!['text'],
      path: x.path,
    } as SideNavItem;
  });

import { Routes } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarCheck,
  faEnvelopeOpen,
  faFire,
  faHome,
  faHourglassStart,
} from '@fortawesome/free-solid-svg-icons';
import { Layout } from './layout/layout';

export interface SideNavItem {
  icon: IconDefinition;
  text: string;
  path: string;
}

export const childRoutes: Routes = [
  {
    path: 'dash-board',
    loadComponent: () => import('./admin-home/admin-home').then((m) => m.AdminHome),
    data: { text: 'Admin Home', icon: faHome },
  },
  {
    path: 'pending-offers',
    loadComponent: () => import('./pending-offers/pending-offers').then((m) => m.PendingOffers),
    data: { text: 'Pending Offers', icon: faHourglassStart },
  },
  {
    path: 'current-offers',
    loadComponent: () => import('./current-offers/current-offers').then((m) => m.CurrentOffers),
    data: { text: 'Current Offers', icon: faFire },
  },
  {
    path: 'email-management',
    loadChildren: () =>
      import('./email-management/email-management.module').then((m) => m.EmailManagementModule),
    data: { text: 'Email Management', icon: faEnvelopeOpen },
  },
  {
    path: 'university-holidays',
    loadComponent: () =>
      import('./university-holidays/university-holidays').then((m) => m.UniversityHolidays),
    data: { text: 'University Holidays', icon: faCalendarCheck },
  },
];

export const SideMenusModule: Routes = [
  {
    path: '',
    component: Layout,
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

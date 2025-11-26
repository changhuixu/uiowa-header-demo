import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'page-with-tabs',
    loadChildren: () =>
      import('./page-with-tabs/page-with-tabs.routes').then((m) => m.PageWithTabsRoutes),
  },
  {
    path: 'admin1',
    loadChildren: () =>
      import('./dropdown-menus/dropdown-menus.routes').then((m) => m.DropdownMenuRoutes),
  },
  {
    path: 'admin2',
    loadChildren: () => import('./side-menus/side-menus.routes').then((m) => m.SideMenuRoutes),
  },
  {
    path: 'access-denied',
    loadComponent: () => import('./core').then((m) => m.AccessDenied),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

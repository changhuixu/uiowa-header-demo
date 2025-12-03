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
      import('./dropdown-menus/dropdown-menus.routes').then((m) => m.DropdownMenusRoutes),
  },
  {
    path: 'admin2',
    loadChildren: () => import('./side-menus/side-menus.routes').then((m) => m.SideMenusRoutes),
  },
  {
    path: 'impersonation',
    loadComponent: () => import('./impersonation/impersonation').then((m) => m.Impersonation),
  },
  {
    path: 'access-denied',
    loadComponent: () => import('./core/components/access-denied').then((m) => m.AccessDenied),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

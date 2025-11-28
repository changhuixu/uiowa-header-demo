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
      import('./page-with-tabs/page-with-tabs.module').then((m) => m.PageWithTabsModule),
  },
  {
    path: 'admin1',
    loadChildren: () =>
      import('./dropdown-menus/dropdown-menus.module').then((m) => m.DropdownMenusModule),
  },
  {
    path: 'admin2',
    loadChildren: () => import('./side-menus/side-menus.module').then((m) => m.SideMenusModule),
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

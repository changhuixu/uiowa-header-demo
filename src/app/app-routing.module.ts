import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccessDeniedComponent } from './core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'page-with-tabs',
    loadChildren: () =>
      import('./page-with-tabs/page-with-tabs.module').then(
        (m) => m.PageWithTabsModule
      ),
  },
  {
    path: 'form-wizards',
    loadChildren: () =>
      import('./form-wizards/form-wizards.module').then(
        (m) => m.FormWizardsModule
      ),
  },
  {
    path: 'admin1',
    loadChildren: () =>
      import('./dropdown-menus/dropdown-menus.module').then(
        (m) => m.DropdownMenusModule
      ),
  },
  {
    path: 'admin2',
    loadChildren: () =>
      import('./side-menus/side-menus.module').then((m) => m.SideMenusModule),
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccessDeniedComponent } from './core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'page-with-tabs',
    loadChildren: () =>
      import('./page-with-tabs/page-with-tabs.module').then(
        m => m.PageWithTabsModule
      )
  },
  {
    path: 'form-wizards',
    loadChildren: () =>
      import('./form-wizards/form-wizards.module').then(
        m => m.FormWizardsModule
      )
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./dlrs-admin/dlrs-admin.module').then(m => m.DlrsAdminModule)
  },
  {
    path: 'waitlist-admin',
    loadChildren: () =>
      import('./waitlist-admin/waitlist-admin.module').then(
        m => m.WaitlistAdminModule
      )
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

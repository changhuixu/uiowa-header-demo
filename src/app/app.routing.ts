import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './core/components/access-denied/access-denied.component';
import { BasicUsageComponent } from './basic-usage/basic-usage/basic-usage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-usage',
    pathMatch: 'full'
  },
  {
    path: 'basic-usage',
    component: BasicUsageComponent
  },
  {
    path: 'page-with-tabs',
    loadChildren: './page-with-tabs/page-with-tabs.module#PageWithTabsModule'
  },
  {
    path: 'form-wizards',
    loadChildren: './form-wizards/form-wizards.module#FormWizardsModule'
  },
  {
    path: 'admin',
    loadChildren: './dlrs-admin/dlrs-admin.module#DlrsAdminModule'
  },
  {
    path: 'waitlist-admin',
    loadChildren: './waitlist-admin/waitlist-admin.module#WaitlistAdminModule'
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    redirectTo: 'basic-usage'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

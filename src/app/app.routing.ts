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
    loadChildren: () => import('./page-with-tabs/page-with-tabs.module').then(m => m.PageWithTabsModule)
  },
  {
    path: 'form-wizards',
    loadChildren: () => import('./form-wizards/form-wizards.module').then(m => m.FormWizardsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./dlrs-admin/dlrs-admin.module').then(m => m.DlrsAdminModule)
  },
  {
    path: 'waitlist-admin',
    loadChildren: () => import('./waitlist-admin/waitlist-admin.module').then(m => m.WaitlistAdminModule)
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
export class AppRoutingModule { }

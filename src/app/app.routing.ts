import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiDriverComponent } from './new-assignment/ui-driver/ui-driver.component';
import { AccessDeniedComponent } from './core/components/access-denied/access-denied.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-usage',
    pathMatch: 'full'
  },
  {
    path: 'basic-usage',
    component: UiDriverComponent
  },
  {
    path: 'page-with-tabs',
    loadChildren:
      './driving-assignments/driving-assignments.module#DrivingAssignmentsModule'
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

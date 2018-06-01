import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiDriverComponent } from './new-assignment/ui-driver/ui-driver.component';
import { AccessDeniedComponent } from './core/components/access-denied/access-denied.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'newassignment',
    pathMatch: 'full'
  },
  {
    path: 'newassignment',
    component: UiDriverComponent
  },
  {
    path: 'assignments',
    loadChildren:
      './driving-assignments/driving-assignments.module#DrivingAssignmentsModule'
  },
  {
    path: 'users',
    loadChildren: './dlrs-users/dlrs-users.module#DlrsUsersModule'
  },
  {
    path: 'admin',
    loadChildren: './dlrs-admin/dlrs-admin.module#DlrsAdminModule'
  },
  {
    path: 'accessDenied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    redirectTo: 'newassignment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

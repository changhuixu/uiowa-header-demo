import { Routes } from '@angular/router';
import { RequiredAssignmentsComponent } from './required-assignments/required-assignments.component';
import { NotRequiredAssignmentsComponent } from './not-required-assignments/not-required-assignments.component';

export const childRoutes: Routes = [
  {
    path: 'required',
    component: RequiredAssignmentsComponent,
    data: { title: 'Required' }
  },
  {
    path: 'notRequired',
    component: NotRequiredAssignmentsComponent,
    data: { title: 'Not Required' }
  }
];

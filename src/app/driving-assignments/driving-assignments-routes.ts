import { Routes } from '@angular/router';
import { RequiredAssignmentsComponent } from './required-assignments/required-assignments.component';
import { NotRequiredAssignmentsComponent } from './not-required-assignments/not-required-assignments.component';

export const childRoutes: Routes = [
  {
    path: 'card-list',
    component: RequiredAssignmentsComponent,
    data: { title: 'Card List' }
  },
  {
    path: 'ag-grid',
    component: NotRequiredAssignmentsComponent,
    data: { title: 'ag-grid' }
  }
];

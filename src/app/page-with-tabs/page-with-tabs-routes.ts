import { Routes } from '@angular/router';
import { AgGridExample1Component } from './ag-grid-example1/ag-grid-example1.component';
import { CardListExample1Component } from './card-list-example1/card-list-example1.component';

export const childRoutes: Routes = [
  {
    path: 'card-list',
    component: CardListExample1Component,
    data: { title: 'Card List' }
  },
  {
    path: 'ag-grid',
    component: AgGridExample1Component,
    data: { title: 'ag-grid' }
  }
];

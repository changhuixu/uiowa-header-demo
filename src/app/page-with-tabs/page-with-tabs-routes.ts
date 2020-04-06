import { Routes } from '@angular/router';
import { CardListExample1Component } from './card-list-example1/card-list-example1.component';
import { TreeExample1Component } from './tree-example1/tree-example1.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

export const childRoutes: Routes = [
  {
    path: 'card-list',
    component: CardListExample1Component,
    data: { title: 'Card List' },
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent,
    data: { title: 'Typeahead' },
  },
  {
    path: 'tree',
    component: TreeExample1Component,
    data: { title: 'Tree' },
  },
];

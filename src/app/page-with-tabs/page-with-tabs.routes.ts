import { Routes } from '@angular/router';
import { CardList } from './card-list/card-list';
import { Home } from './home';
import { Tree } from './tree/tree';

export const childRoutes: Routes = [
  {
    path: 'card-list',
    component: CardList,
    data: { title: 'Card List' },
  },

  {
    path: 'tree',
    component: Tree,
    data: { title: 'Tree' },
  },
];

export const PageWithTabsRoutes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: childRoutes[0].path,
      },

      ...childRoutes,
    ],
  },
];

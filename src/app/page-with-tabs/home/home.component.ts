import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../page-with-tabs-routes';

interface InternalRoute {
  text: string;
  route: string;
}

@Component({
  selector: 'app-home',
  template: `
    <div class="container d-flex flex-column h-100 py-2">
      <nav class="nav nav-tabs flex-column flex-sm-row flex-shrink-0">
        @for(item of menus;track item.route){
        <a
          class="nav-item nav-link"
          routerLinkActive="active"
          [routerLink]="item.route"
        >
          {{ item.text }}
        </a>
        }
      </nav>
      <div class="d-flex flex-column flex-fill px-1 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
  standalone: false,
})
export class HomeComponent implements OnInit {
  menus: InternalRoute[] = [];
  constructor() {}

  ngOnInit() {
    this.menus = childRoutes.map(
      (x) => <InternalRoute>{ text: x.data!['title'], route: x.path }
    );
  }
}

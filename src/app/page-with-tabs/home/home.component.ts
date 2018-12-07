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
      <ul class="nav nav-tabs">
        <li class="nav-item" *ngFor="let item of menus">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="item.route"
            style="color: #0372e8;"
            >{{ item.text }}</a
          >
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .active {
        border-top: 3px #0372e8 solid !important;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  menus: InternalRoute[];
  constructor() {}

  ngOnInit() {
    this.menus = childRoutes.map(
      x => <InternalRoute>{ text: x.data.title, route: x.path }
    );
  }
}

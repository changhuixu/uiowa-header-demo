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
        <a
          *ngFor="let item of menus"
          class="nav-item nav-link"
          routerLinkActive="active"
          [routerLink]="item.route"
          >{{ item.text }}</a
        >
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
    styles: [
        `
      .nav-tabs .nav-link {
        color: #066cd9;
        border: 1px #e7eaed solid !important;
      }
      .nav-tabs .nav-link.active {
        border-top: 3px #0372e8 solid !important;
        background: #eef8ff !important;
      }
    `,
    ],
    standalone: false
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

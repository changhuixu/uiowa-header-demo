import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../driving-assignments-routes';

interface InternalRoute {
  text: string;
  route: string;
}

@Component({
  selector: 'app-home',
  template: `
<div class="container">
  <ul class="nav nav-tabs">
    <li class="nav-item" *ngFor="let item of menus">
      <a class="nav-link" routerLinkActive="active" [routerLink]="item.route">{{item.text}}</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
</div>
  `,
  styles: [
    `
      .nav-item a {
        color: #0372e8;
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

import { Component, OnInit } from '@angular/core';
import { InternalRoute } from '@uiowa/uiowa-header';
import { childRoutes } from './reports.module';

@Component({
  selector: 'app-reports-layout',
  template: `
    <div class="w-100 h-100 d-flex flex-column">
      <nav class="nav nav-tabs flex-column flex-sm-row flex-shrink-0">
        @for(item of navItems;track item.route){
        <a
          class="nav-item nav-link"
          [routerLink]="item.route"
          routerLinkActive="active"
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
  styles: [
    `
      :host {
        height: 100%;
      }
    `,
  ],
  standalone: false,
})
export class LayoutComponent implements OnInit {
  navItems: InternalRoute[] = [];

  ngOnInit(): void {
    this.navItems = childRoutes.map(
      (x) => new InternalRoute(x.data!['title'], x.path)
    );
  }
}

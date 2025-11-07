import { Component, OnInit } from '@angular/core';
import { InternalRoute } from '@uiowa/uiowa-header';
import { childRoutes } from './email-management.module';

@Component({
  selector: 'app-email-management-layout',
  template: `
    <div class="w-100 h-100 d-flex flex-column">
      <ul class="nav nav-tabs mb-2">
        <li *ngFor="let navItem of navItems" class="nav-item">
          <a
            class="nav-link"
            [routerLink]="navItem.route"
            routerLinkActive="active"
          >
            {{ navItem.text }}
          </a>
        </li>
      </ul>

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

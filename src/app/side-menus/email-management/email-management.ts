import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InternalRoute } from '../../../../projects/uiowa/uiowa-header/src/public-api';
import { childRoutes } from './email-management.module';

@Component({
  selector: 'app-email-management',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="w-100 h-100 d-flex flex-column">
      <nav class="nav nav-tabs flex-column flex-sm-row flex-shrink-0 mb-2">
        @for(item of navItems;track item.route){
        <a class="nav-item nav-link" [routerLink]="item.route" routerLinkActive="active">
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
})
export class EmailManagement {
  navItems = childRoutes
    .filter((x) => x.data && x.data['title'])
    .map((x) => new InternalRoute(x.data!['title'], x.path));
}

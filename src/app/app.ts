import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BannerLinks,
  ExternalLink,
  InternalRoute,
  UiowaFooter,
  UiowaHeader,
  UiowaNav,
} from '../../projects/uiowa/uiowa-header/src/public-api';
import { AppToasts } from './core/components/app-toasts';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiowaHeader, UiowaNav, UiowaFooter, AppToasts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  userService = inject(UserService);
  headerUser = this.userService.user;

  bannerLinks = new BannerLinks(
    new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu/portal18'),
    new ExternalLink('Test', 'https://www.uiowa.edu')
  );
  externalLinks = [
    new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu/portal18'),
    new ExternalLink('GitHub Repo', 'https://github.com/changhuixu/uiowa-header-demo'),
  ];

  internalRoutes = computed(() => {
    const baseRoutes = [
      new InternalRoute('Home', ''),
      new InternalRoute('Page with Tabs', 'page-with-tabs'),
      new InternalRoute('Dropdown Menus', '', [
        new InternalRoute('Printing Orders', 'admin1/printingOrders'),
        new InternalRoute('Wait List', 'admin1/waitlist'),
        new InternalRoute('Invalid Link', 'admin1/firstGrid'),
      ]),
      new InternalRoute('Side Nav Menus', 'admin2'),
    ];

    if (!this.headerUser().originalUserName) {
      return [...baseRoutes, new InternalRoute('Impersonation', 'impersonation')];
    }

    return baseRoutes;
  });

  stopImpersonation() {
    this.userService.stopImpersonation();
    console.log(`impersonation stopped`);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BannerLinks,
  ExternalLink,
  HeaderUser,
  InternalRoute,
  UiowaFooter,
  UiowaHeader,
} from '../../projects/uiowa/uiowa-header/src/public-api';
import { AppToasts } from './core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiowaHeader, UiowaFooter, AppToasts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  externalLinks = [
    new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu/portal18'),
    new ExternalLink('GitHub Repo', 'https://github.com/changhuixu/uiowa-header-demo'),
  ];
  applicationName = 'Awesome Application Name';
  internalRoutes = [
    new InternalRoute('Home', ''),
    new InternalRoute('Page with Tabs', 'page-with-tabs'),
    new InternalRoute('Dropdown Menus', '', [
      new InternalRoute('Printing Orders', 'admin1/printingOrders'),
      new InternalRoute('Wait List', 'admin1/waitlist'),
      new InternalRoute('Invalid Link', 'admin1/firstGrid'),
    ]),
    new InternalRoute('Side Nav Menus', 'admin2'),
  ];
  bannerLinks = new BannerLinks(
    new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu/portal18'),
    new ExternalLink('Test', 'https://www.uiowa.edu')
  );
  headerUser: HeaderUser = {
    userName: 'abc',
    originalUserName: 'changhxu',
  } as HeaderUser;
  constructor() {}

  ngOnInit() {}

  stopImpersonation() {
    this.headerUser = {
      userName: 'changhxu',
      originalUserName: '',
    };
    console.log(`impersonation stopped`);
  }
}

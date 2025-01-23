import { Component, OnInit } from '@angular/core';
import {
  InternalRoute,
  ExternalLink,
  HeaderUser,
  BannerLinks,
} from '../../projects/uiowa/uiowa-header/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  externalLinks = [
    new ExternalLink(
      'Employee Self Service',
      'https://hris.uiowa.edu/portal18'
    ),
    new ExternalLink(
      'GitHub Repo',
      'https://github.com/changhuixu/uiowa-header-demo'
    ),
  ];
  applicationName = 'Awesome Application Name';
  internalRoutes = [
    new InternalRoute('Home', ''),
    new InternalRoute('Page with Tabs', 'page-with-tabs'),
    new InternalRoute('Form Wizards', 'form-wizards'),
    new InternalRoute('Dropdown Menus', '', [
      new InternalRoute('Printing Orders', 'admin1/printingOrders'),
      new InternalRoute('Wait List', 'admin1/waitlist'),
      new InternalRoute('DLRS', 'admin1/dlrs'),
      new InternalRoute('', ''),
      new InternalRoute('My Wait Lists', 'admin1/my-waitlists'),
      new InternalRoute('Pending Reviews', 'admin1/pendingReviews'),
      new InternalRoute('', ''),
      new InternalRoute('Invalid Link', 'admin1/firstGrid'),
    ]),
    new InternalRoute('Side Nav Menus', 'admin2'),
  ];
  bannerLinks = new BannerLinks(
    new ExternalLink(
      'Employee Self Service',
      'https://hris.uiowa.edu/portal18'
    ),
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

import { Component, OnInit } from '@angular/core';
import { InternalRoute, ExternalLink, HeaderUser } from '@uiowa/uiowa-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  externalLinks = [
    new ExternalLink('GitHub Repo', 'https://github.com/changhuixu/uiowa-header-demo')
  ];
  applicationName = 'Your Awesome Application Name';
  internalRoutes = [
    new InternalRoute('Basic Usage', 'basic-usage'),
    new InternalRoute('Page with Tabs', 'page-with-tabs'),
    new InternalRoute('Example Page 1', 'example-page-1'),
    new InternalRoute('Dropdown Menus', '', [
      new InternalRoute('Printing Orders', 'admin/printingorders'),
      new InternalRoute('Wait List', 'admin/waitlist'),
      new InternalRoute('', ''),
      new InternalRoute('Pending Reviews', 'admin/pendingReviews'),
      new InternalRoute('Completed Reviews', 'admin/completedReviews'),
      new InternalRoute('', ''),
      new InternalRoute('Invalid Link', 'admin/firstGrid')
    ]),
    new InternalRoute('Side Nav Menus', 'waitlist-admin')
  ];
  headerUser: HeaderUser = {
    userName: 'abc',
    originalUserName: 'changhxu'
  } as HeaderUser;
  constructor() {}

  ngOnInit() {}

  stopImpersonation() {
    this.headerUser = {
      userName: 'changhxu',
      originalUserName: ''
    };
    console.log(`impersonation stopped`);
  }
}

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
  applicationName = 'Driver License Review System';
  internalRoutes = [
    new InternalRoute('New Assignment', '/newassignment'),
    new InternalRoute('Driving Assignments', '/assignments'),
    new InternalRoute('DLRS Users', '/users'),
    new InternalRoute('Admin', '', [
      new InternalRoute('Printing Orders', '/admin/printingorders'),
      new InternalRoute('Wait List', '/admin/waitlist'),
      new InternalRoute('', ''),
      new InternalRoute('Pending Reviews', '/admin/pendingReviews'),
      new InternalRoute('Completed Reviews', '/admin/completedReviews'),
      new InternalRoute('', ''),
      new InternalRoute('Invalid Link', '/admin/firstGrid')
    ]),
    new InternalRoute('Access Denied', 'accessDenied')
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

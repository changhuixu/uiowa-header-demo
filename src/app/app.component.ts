import { Component, OnInit } from '@angular/core';
import { InternalRoute, ExternalLink, HeaderUser } from '@uiowa/uiowa-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  externalLinks = [
    new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu')
  ];
  applicationName = 'Driver License Review System';
  internalRoutes = [
    new InternalRoute('New Assignment', '/newassignment'),
    new InternalRoute('Driving Assignments', '/assignments'),
    new InternalRoute('DLRS Users', '/users'),
    new InternalRoute('Admin', '', [
      new InternalRoute('Pending Reviews', '/admin/pendingReviews'),
      new InternalRoute('Completed Reviews', '/admin/completedReviews'),
      new InternalRoute('', ''),
      new InternalRoute('Drivers Report', '/admin/driversReport'),
      new InternalRoute('Duplicate Drivers', '/admin/duplicateDrivers'),
      new InternalRoute('', ''),
      new InternalRoute('Invalid Link', '/admin/firstGrid')
    ])
  ];
  headerUser: HeaderUser;
  constructor() {}

  ngOnInit() {
    this.headerUser = {
      userName: 'abc',
      originalUserName: 'changhxu'
    };
  }

  stopImpersonation() {
    this.headerUser = this.headerUser = {
      userName: 'changhxu',
      originalUserName: ''
    };
    console.log(`impersonation stopped`);
  }
}

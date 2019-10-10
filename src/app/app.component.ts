import { Component, OnInit } from '@angular/core';
import { InternalRoute, ExternalLink, HeaderUser } from '@uiowa/uiowa-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  externalLinks = [
    new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu'),
    new ExternalLink('GitHub Repo', 'https://github.com/changhuixu/uiowa-header-demo')
  ];
  applicationName = 'Your Awesome Application Name';
  internalRoutes = [
    new InternalRoute('Home', ''),
    new InternalRoute('Page with Tabs', 'page-with-tabs'),
    new InternalRoute('Form Wizards', 'form-wizards'),
    new InternalRoute('Dropdown Menus', '', [
      new InternalRoute('Printing Orders', 'admin/printingorders'),
      new InternalRoute('Wait List', 'admin/waitlist'),
      new InternalRoute('DLRS', 'admin/dlrs'),
      new InternalRoute('', ''),
      new InternalRoute('My Wait Lists', 'admin/my-waitlists'),
      new InternalRoute('Pending Reviews', 'admin/pendingReviews'),
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

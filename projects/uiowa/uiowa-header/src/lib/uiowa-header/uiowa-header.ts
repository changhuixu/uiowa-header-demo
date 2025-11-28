import { Component, inject, Input, output } from '@angular/core';
import { LoginService } from '../login.service';
import { BannerLinks, HeaderUser } from '../models';
import { NavService } from '../nav.service';
import { UsernameDropdown } from './username-dropdown/username-dropdown';

@Component({
  selector: 'header[uiowa-header]',
  imports: [UsernameDropdown],
  templateUrl: './uiowa-header.html',
  styleUrls: ['./uiowa-header.css', './logo.css', './site-name.css', './banner-links.css'],
})
export class UiowaHeader {
  @Input('applicationName') siteName = 'Awesome Site Name';
  @Input() bannerLinks?: BannerLinks;
  @Input() user?: HeaderUser;
  stopImpersonation = output();
  @Input() showWarning = false;
  @Input() warningMessage = 'WARNING: TEST SYSTEM';
  navService = inject(NavService);
  loginService = inject(LoginService);

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

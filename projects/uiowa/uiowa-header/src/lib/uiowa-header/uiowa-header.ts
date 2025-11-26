import { Component, inject, Input, OnInit, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../login.service';
import { BannerLinks, ExternalLink, HeaderUser, InternalRoute } from '../models';
import { UsernameDropdown } from './username-dropdown/username-dropdown';

@Component({
  selector: 'uiowa-header',
  imports: [UsernameDropdown, RouterLink, RouterLinkActive],
  templateUrl: './uiowa-header.html',
  styleUrls: [
    './uiowa-header.css',
    './logo.css',
    './site-name.css',
    './iowa-bar.css',
    './main-menu.css',
    './menu-item.css',
    './internal-routes.css',
    './external-links.css',
    './banner-links.css',
  ],
})
export class UiowaHeader implements OnInit {
  @Input('applicationName') siteName = 'Awesome Site Name';
  @Input() externalLinks?: ExternalLink[];
  @Input() bannerLinks?: BannerLinks;
  @Input() internalRoutes?: InternalRoute[];
  @Input() user?: HeaderUser;
  stopImpersonation = output();
  @Input() showWarning = false;
  @Input() warningMessage = 'WARNING: TEST SYSTEM';
  showNavBar = false;
  showMenuDropdown: boolean[] = [];

  loginService = inject(LoginService);

  ngOnInit() {
    this.showMenuDropdown = this.internalRoutes?.map((_) => false) ?? [];
  }

  toggleMenuCollapse(i: number) {
    this.showMenuDropdown[i] = !this.showMenuDropdown[i];
    this.showMenuDropdown.forEach((x, index) => {
      if (x && index !== i) {
        this.showMenuDropdown[index] = false;
      }
    });
  }

  collapseMenu(i: number) {
    this.showMenuDropdown[i] = false;
  }

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

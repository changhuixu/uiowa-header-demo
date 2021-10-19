import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExternalLink } from '../models/external-link';
import { HeaderUser } from '../models/header-user';
import { InternalRoute } from '../models/internal-route';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'uiowa-header',
  templateUrl: './uiowa-header.component.html',
  styleUrls: [
    './uiowa-header.component.css',
    './logo.css',
    './site-name.css',
    './iowa-bar.css',
    './main-menu.css',
    './menu-item.css',
    './external-links.css',
  ],
})
export class UiowaHeaderComponent implements OnInit {
  @Input('applicationName') siteName = 'Awesome Site Name';
  @Input() externalLinks?: ExternalLink[];
  @Input() internalRoutes?: InternalRoute[];
  @Input() user?: HeaderUser;
  @Output() stopImpersonation = new EventEmitter<void>();
  @Input() showTestWarning = false;
  showNavBar = false;
  showMenuDropdown: boolean[] = [];

  constructor(private readonly loginService: LoginService) {}

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

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

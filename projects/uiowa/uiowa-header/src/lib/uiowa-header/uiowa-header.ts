import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LoginService } from '../login.service';
import { BannerLinks, HeaderUser } from '../models';
import { NavService } from '../nav.service';
import { UsernameDropdown } from './username-dropdown/username-dropdown';

@Component({
  selector: 'header[uiowa-header]',
  imports: [UsernameDropdown],
  templateUrl: './uiowa-header.html',
  styleUrls: ['./uiowa-header.css', './logo.css', './site-name.css', './banner-links.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiowaHeader {
  siteName = input<string>('Awesome Site Name', { alias: 'appName' });
  bannerLinks = input<BannerLinks>();
  user = input<HeaderUser>();
  showWarning = input<boolean>(false);
  warningMessage = input<string>('WARNING: TEST SYSTEM');

  stopImpersonation = output();

  navService = inject(NavService);
  loginService = inject(LoginService);

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

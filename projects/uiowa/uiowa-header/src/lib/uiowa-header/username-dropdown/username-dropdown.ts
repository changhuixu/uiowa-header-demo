import { Component, inject, Input, output } from '@angular/core';
import { ClickOutside } from '../../click-outside';
import { LoginService } from '../../login.service';
import { HeaderUser } from '../../models';

@Component({
  selector: 'uiowa-username-dropdown',
  imports: [ClickOutside],
  templateUrl: './username-dropdown.html',
  styleUrl: './username-dropdown.css',
})
export class UsernameDropdown {
  @Input() user?: HeaderUser;
  stopImpersonation = output();
  showMenu = false;
  loginService = inject(LoginService);

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

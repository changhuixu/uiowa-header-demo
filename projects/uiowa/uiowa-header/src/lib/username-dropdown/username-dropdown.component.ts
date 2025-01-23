import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderUser } from '../models/header-user';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'username-dropdown',
    templateUrl: './username-dropdown.component.html',
    styleUrls: ['./username-dropdown.component.css'],
    standalone: false
})
export class UsernameDropdownComponent implements OnInit {
  @Input() user?: HeaderUser;
  @Output() stopImpersonation = new EventEmitter<void>();
  showMenu = false;

  constructor(private readonly loginService: LoginService) {}

  ngOnInit() {}

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

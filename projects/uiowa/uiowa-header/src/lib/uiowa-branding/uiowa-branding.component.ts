import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExternalLink } from '../models/external-link';
import { HeaderUser } from '../models/header-user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'uiowa-branding',
  templateUrl: './uiowa-branding.component.html',
  styleUrls: ['./uiowa-branding.component.css']
})
export class UiowaBrandingComponent implements OnInit {
  @Input() externalLinks?: ExternalLink[];
  @Input() user?: HeaderUser;
  @Input() showStopImpersonation: boolean;
  @Output() stopImpersonation = new EventEmitter<void>();

  constructor(private readonly loginService: LoginService) {}

  ngOnInit() {}

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}

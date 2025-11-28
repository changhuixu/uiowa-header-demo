import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClickOutside } from '../click-outside';
import { ExternalLink, InternalRoute } from '../models';
import { NavService } from '../nav.service';

@Component({
  selector: 'nav[uiowa-nav]',
  imports: [RouterLink, RouterLinkActive, ClickOutside],
  templateUrl: './uiowa-nav.html',
  styleUrls: [
    './uiowa-nav.css',
    './menu-item.css',
    './internal-routes.css',
    './external-links.css',
  ],
  host: {
    id: 'primary-navbar',
  },
})
export class UiowaNav implements OnInit {
  @Input() externalLinks?: ExternalLink[];
  @Input() internalRoutes?: InternalRoute[];
  showMenuDropdown: boolean[] = [];

  navService = inject(NavService);

  ngOnInit(): void {
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
}

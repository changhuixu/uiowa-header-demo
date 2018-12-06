import { Component, Input } from '@angular/core';
import { InternalRoute } from '../models/internal-route';

@Component({
  selector: 'uiowa-app-nav-bar',
  templateUrl: './uiowa-app-nav-bar.component.html',
  styleUrls: ['./uiowa-app-nav-bar.component.css']
})
export class UiowaAppNavBarComponent {
  @Input() applicationName: string;
  @Input() internalRoutes: InternalRoute[];
  isCollapsed = true;
  constructor() {}
}

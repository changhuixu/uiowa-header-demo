import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExternalLink } from '../models/external-link';
import { InternalRoute } from '../models/internal-route';
import { HeaderUser } from '../models/header-user';

@Component({
  selector: 'uiowa-header',
  templateUrl: './uiowa-header.component.html',
  styleUrls: ['./uiowa-header.component.css']
})
export class UiowaHeaderComponent implements OnInit {
  @Input() externalLinks?: ExternalLink[];
  @Input() user?: HeaderUser;
  @Input() applicationName: string;
  @Input() internalRoutes: InternalRoute[];
  @Output() stopImpersonation = new EventEmitter<void>();
  showStopImpersonation = false;
  @Input() showTestWarning?: boolean = false;

  constructor() {}

  ngOnInit() {
    this.showStopImpersonation = this.stopImpersonation.observers.length > 0;
  }
}

import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}
}

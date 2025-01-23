import { Component, OnInit } from '@angular/core';
import { LinkItem, childRouteLinkItems } from '../side-menus-child-routes';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: false
})
export class LayoutComponent implements OnInit {
  faHome = faHome;
  linkItems: LinkItem[] = [];
  constructor() {}

  ngOnInit() {
    this.linkItems = childRouteLinkItems;
  }
}

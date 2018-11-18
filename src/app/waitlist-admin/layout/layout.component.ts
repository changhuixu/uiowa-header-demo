import { Component, OnInit } from '@angular/core';
import { childRouteLinkItems } from '../waitlist-admin-child-routes';

interface LinkItem {
  iconClass: string;
  text: string;
  path: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  linkItems: LinkItem[];
  constructor() {}

  ngOnInit() {
    this.linkItems = childRouteLinkItems;
  }
}

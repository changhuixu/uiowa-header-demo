import { Component, OnInit } from '@angular/core';
import { LinkItem, childRouteLinkItems } from '../waitlist-admin-child-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkItems: LinkItem[];
  constructor() {}

  ngOnInit() {
    this.linkItems = childRouteLinkItems;
  }
}

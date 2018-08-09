import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <router-outlet></router-outlet>
  `,
    standalone: false
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

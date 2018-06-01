import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  year = 0;
  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.year = today.getFullYear();
  }
}

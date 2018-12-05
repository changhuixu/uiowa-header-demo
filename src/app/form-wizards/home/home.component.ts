import { Component, OnInit } from '@angular/core';

interface TabItem {
  id: string;
  index: number;
  disabled: boolean;
  active: boolean;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}

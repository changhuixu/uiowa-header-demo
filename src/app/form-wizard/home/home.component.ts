import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

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
  currentTab = 1;

  constructor() {}

  ngOnInit() {}

  select(stepId: number) {
    this.currentTab = stepId;
  }

  beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab2') {
      this.currentTab = 2;
    } else if ($event.nextId === 'tab3') {
      this.currentTab = 3;
    } else {
      this.currentTab = 1;
    }
  }
}

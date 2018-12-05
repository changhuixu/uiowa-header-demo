import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wizard2',
  templateUrl: './wizard2.component.html',
  styleUrls: ['./wizard2.component.css']
})
export class Wizard2Component implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-lots',
    templateUrl: './lots.component.html',
    styleUrls: ['./lots.component.css'],
    standalone: false
})
export class LotsComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}

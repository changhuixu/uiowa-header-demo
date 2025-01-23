import { Component, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-buildings',
    templateUrl: './buildings.component.html',
    styleUrls: ['./buildings.component.css'],
    standalone: false
})
export class BuildingsComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}

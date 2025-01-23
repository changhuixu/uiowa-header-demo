import { Component, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}

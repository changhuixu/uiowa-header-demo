import { Component, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-current-offers',
  templateUrl: './current-offers.component.html',
  styleUrls: ['./current-offers.component.css']
})
export class CurrentOffersComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}

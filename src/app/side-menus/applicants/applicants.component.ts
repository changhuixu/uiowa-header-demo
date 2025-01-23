import { Component, OnInit } from '@angular/core';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-applicants',
    templateUrl: './applicants.component.html',
    styleUrls: ['./applicants.component.css'],
    standalone: false
})
export class ApplicantsComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
  constructor() {}

  ngOnInit() {}
}

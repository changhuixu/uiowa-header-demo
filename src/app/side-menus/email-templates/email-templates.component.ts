import { Component, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-email-templates',
    templateUrl: './email-templates.component.html',
    styleUrls: ['./email-templates.component.css'],
    standalone: false
})
export class EmailTemplatesComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}

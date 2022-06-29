import { Component, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { MediaType } from './models/article';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;

  selectedType?: MediaType;

  constructor() {}

  ngOnInit() {}
}

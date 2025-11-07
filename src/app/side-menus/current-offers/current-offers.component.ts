import { Component, OnInit } from '@angular/core';
import { MediaType } from './models/article';

@Component({
  selector: 'app-current-offers',
  templateUrl: './current-offers.component.html',
  styleUrls: ['./current-offers.component.css'],
  standalone: false,
})
export class CurrentOffersComponent implements OnInit {
  selectedType?: MediaType;

  constructor() {}

  ngOnInit() {}
}

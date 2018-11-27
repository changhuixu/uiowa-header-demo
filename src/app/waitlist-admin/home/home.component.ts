import { Component, OnInit } from '@angular/core';
import { LinkItem, childRouteLinkItems } from '../waitlist-admin-child-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkItems: LinkItem[];

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022'
  ];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [
    { data: [650, 590, 800, 810, 560, 550, 400], label: 'Failed Requests' },
    { data: [280, 480, 400, 190, 860, 270, 900], label: 'Succeed Requests' }
  ];

  pieChartLabels: string[] = ['Completed Offers', 'Accepted Offers', 'Revoked/Expired Offers'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType = 'pie';
  pieChartOptions = {
    legend: {
      position: 'bottom'
    }
  };

  constructor() {}

  ngOnInit() {
    this.linkItems = childRouteLinkItems;
  }

  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}

import { Component, OnInit } from '@angular/core';
import { LinkItem, childRouteLinkItems } from '../side-menus-child-routes';
import {
  faHourglassStart,
  faFire,
  faHandPaper,
} from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faHourglassStart = faHourglassStart;
  faFire = faFire;
  faHandPaper = faHandPaper;
  faFrown = faFrown;
  linkItems: LinkItem[] = [];

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  barChartLabels: string[] = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  barChartLegend = true;
  barChartData: any[] = [
    {
      data: [650, 590, 800, 810, 560, 550, 400],
      label: 'Failed Requests',
      backgroundColor: 'rgba(232,17,20,0.7)',
    },
    {
      data: [280, 480, 400, 190, 860, 270, 900],
      label: 'Succeed Requests',
      backgroundColor: 'rgba(20,197,241,0.7)',
    },
  ];

  pieChartLabels: string[] = [
    'Completed Offers',
    'Accepted Offers',
    'Revoked/Expired Offers',
  ];
  pieChartData = [
    {
      data: [300, 500, 100],
      backgroundColor: ['#FFA1B5', '#00A1F1', '#4CAF50'],
    },
  ];
  pieChartOptions: ChartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'top',
      },
    },
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

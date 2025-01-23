import { Component, OnInit } from '@angular/core';
import { LinkItem, childRouteLinkItems } from '../side-menus-child-routes';
import {
  faHourglassStart,
  faFire,
  faHandPaper,
  faFrown,
} from '@fortawesome/free-solid-svg-icons';
import { Chart, ChartEvent } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  faHourglassStart = faHourglassStart;
  faFire = faFire;
  faHandPaper = faHandPaper;
  faFrown = faFrown;
  linkItems: LinkItem[] = [];

  barChart?: Chart;
  pieChart?: any;

  constructor() {}

  ngOnInit() {
    this.linkItems = childRouteLinkItems;
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
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
        ],
      },
      options: {
        responsive: true,
        onClick: (e: ChartEvent) => this.chartClicked(e),
      },
    });
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: [
          'Completed Offers',
          'Accepted Offers',
          'Revoked/Expired Offers',
        ],
        datasets: [
          {
            data: [300, 500, 100],
            backgroundColor: ['#FFA1B5', '#00A1F1', '#4CAF50'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        onClick: (e) => this.chartClicked(e),
      },
    });
  }

  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}

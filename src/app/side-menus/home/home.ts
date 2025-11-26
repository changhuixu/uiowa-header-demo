import { Component, OnInit } from '@angular/core';
import { faFire, faFrown, faHandPaper, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { Chart, ChartEvent } from 'chart.js/auto';
import { DataTile } from './data-tile/data-tile';

@Component({
  selector: 'app-home',
  imports: [DataTile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  faHourglassStart = faHourglassStart;
  faFire = faFire;
  faHandPaper = faHandPaper;
  faFrown = faFrown;
  barChart?: Chart;
  pieChart?: Chart;

  ngOnInit(): void {
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
        labels: ['Completed Offers', 'Accepted Offers', 'Revoked/Expired Offers'],
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

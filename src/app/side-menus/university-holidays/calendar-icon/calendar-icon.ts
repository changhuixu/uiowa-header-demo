import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-icon',
  imports: [],
  templateUrl: './calendar-icon.html',
  styleUrl: './calendar-icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarIcon implements OnInit {
  @Input() date?: Date;
  month = '';
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  day = 0;
  weekday = '';
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dateString = '';
  constructor() {}

  ngOnInit(): void {
    if (!this.date) {
      this.date = new Date();
    }
    this.month = this.monthNames[this.date.getMonth()];
    this.day = this.date.getDate();
    this.weekday = this.weekdays[this.date.getDay()];
    this.dateString = this.getFormattedDate(this.date);
  }

  private getFormattedDate(date: Date): string {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }
}

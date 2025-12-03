import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-calendar-icon',
  imports: [],
  templateUrl: './calendar-icon.html',
  styleUrl: './calendar-icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarIcon {
  date = input.required<Date>();
  month = computed<string>(() => this.monthNames[this.date().getMonth()]);
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
  day = computed<number>(() => this.date().getDate());
  weekday = computed<string>(() => this.weekdays[this.date().getDay()]);
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dateString = computed<string>(() => this.date().toLocaleDateString());
}

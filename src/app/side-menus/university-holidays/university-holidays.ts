import { Component } from '@angular/core';
import { CalendarIcon } from './calendar-icon/calendar-icon';

@Component({
  selector: 'app-university-holidays',
  imports: [CalendarIcon],
  templateUrl: './university-holidays.html',
  styleUrl: './university-holidays.css',
})
export class UniversityHolidays {
  univHolidays = [
    {
      year: 2019,
      holidays: [
        new Date(2019, 0, 1),
        new Date(2019, 0, 21),
        new Date(2019, 4, 27),
        new Date(2019, 6, 4),
        new Date(2019, 8, 2),
        new Date(2019, 10, 28),
        new Date(2019, 10, 29),
        new Date(2019, 11, 24),
        new Date(2019, 11, 25),
      ],
    },
    {
      year: 2020,
      holidays: [
        new Date(2020, 0, 1),
        new Date(2020, 0, 20),
        new Date(2020, 4, 25),
        new Date(2020, 6, 3),
        new Date(2020, 8, 7),
        new Date(2020, 10, 26),
        new Date(2020, 10, 27),
        new Date(2020, 11, 24),
        new Date(2020, 11, 25),
      ],
    },
    {
      year: 2021,
      holidays: [
        new Date(2021, 0, 1),
        new Date(2021, 0, 18),
        new Date(2021, 4, 31),
        new Date(2021, 6, 5),
        new Date(2021, 8, 6),
        new Date(2021, 10, 25),
        new Date(2021, 10, 26),
        new Date(2021, 11, 23),
        new Date(2021, 11, 24),
      ],
    },
    {
      year: 2022,
      holidays: [
        new Date(2022, 0, 1),
        new Date(2022, 0, 17),
        new Date(2022, 4, 30),
        new Date(2022, 6, 4),
        new Date(2022, 8, 5),
        new Date(2022, 10, 24),
        new Date(2022, 10, 25),
        new Date(2022, 11, 26),
        new Date(2022, 11, 27),
      ],
    },
    {
      year: 2023,
      holidays: [
        new Date(2023, 0, 1),
        new Date(2023, 0, 16),
        new Date(2023, 4, 29),
        new Date(2023, 6, 4),
      ],
    },
  ].sort((a, b) => b.year - a.year);
}

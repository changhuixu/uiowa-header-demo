import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityHolidaysRoutingModule } from './university-holidays-routing.module';
import { HomeComponent } from './home/home.component';
import { CalendarIconComponent } from './calendar-icon/calendar-icon.component';

@NgModule({
  declarations: [HomeComponent, CalendarIconComponent],
  imports: [
    CommonModule,
    UniversityHolidaysRoutingModule
  ]
})
export class UniversityHolidaysModule { }

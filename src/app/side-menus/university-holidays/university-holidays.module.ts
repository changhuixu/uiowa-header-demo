import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UniversityHolidaysRoutingModule } from './university-holidays-routing.module';
import { HomeComponent } from './home/home.component';
import { CalendarIconComponent } from './calendar-icon/calendar-icon.component';

@NgModule({
  declarations: [HomeComponent, CalendarIconComponent],
  imports: [SharedModule, UniversityHolidaysRoutingModule]
})
export class UniversityHolidaysModule {}

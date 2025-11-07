import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CalendarIconComponent } from './calendar-icon/calendar-icon.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, CalendarIconComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ]),
  ],
})
export class UniversityHolidaysModule {}

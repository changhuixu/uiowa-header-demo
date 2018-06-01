import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivingAssignmentsRoutingModule } from './driving-assignments-routing.module';

import { HomeComponent } from './home/home.component';
import { RequiredAssignmentsComponent } from './required-assignments/required-assignments.component';
import { NotRequiredAssignmentsComponent } from './not-required-assignments/not-required-assignments.component';

@NgModule({
  imports: [
    CommonModule,
    DrivingAssignmentsRoutingModule
  ],
  declarations: [HomeComponent, RequiredAssignmentsComponent, NotRequiredAssignmentsComponent]
})
export class DrivingAssignmentsModule { }

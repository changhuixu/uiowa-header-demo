import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivingAssignmentsRoutingModule } from './driving-assignments-routing.module';
import { AgGridModule } from 'ag-grid-angular';

import { HomeComponent } from './home/home.component';
import { RequiredAssignmentsComponent } from './required-assignments/required-assignments.component';
import { NotRequiredAssignmentsComponent } from './not-required-assignments/not-required-assignments.component';

@NgModule({
  imports: [
    CommonModule,
    DrivingAssignmentsRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [HomeComponent, RequiredAssignmentsComponent, NotRequiredAssignmentsComponent]
})
export class DrivingAssignmentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageWithTabsRoutingModule } from './page-with-tabs-routing.module';
import { AgGridModule } from 'ag-grid-angular';

import { HomeComponent } from './home/home.component';
import { AgGridExample1Component } from './ag-grid-example1/ag-grid-example1.component';
import { CardListExample1Component } from './card-list-example1/card-list-example1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageWithTabsRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    HomeComponent,
    CardListExample1Component,
    AgGridExample1Component
  ]
})
export class PageWithTabsModule {}

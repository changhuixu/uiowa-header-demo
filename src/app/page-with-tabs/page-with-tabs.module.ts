import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

import { PageWithTabsRoutingModule } from './page-with-tabs-routing.module';

import { HomeComponent } from './home/home.component';
import { AgGridExample1Component } from './ag-grid-example1/ag-grid-example1.component';
import { CardListExample1Component } from './card-list-example1/card-list-example1.component';
import { TreeExample1Component } from './tree-example1/tree-example1.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  imports: [
    SharedModule,
    PageWithTabsRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    HomeComponent,
    CardListExample1Component,
    AgGridExample1Component,
    TreeExample1Component,
    TypeaheadComponent
  ]
})
export class PageWithTabsModule {}

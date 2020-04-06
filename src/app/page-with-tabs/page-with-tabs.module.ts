import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PageWithTabsRoutingModule } from './page-with-tabs-routing.module';

import { HomeComponent } from './home/home.component';
import { CardListExample1Component } from './card-list-example1/card-list-example1.component';
import { TreeExample1Component } from './tree-example1/tree-example1.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  imports: [SharedModule, PageWithTabsRoutingModule],
  declarations: [
    HomeComponent,
    CardListExample1Component,
    TreeExample1Component,
    TypeaheadComponent,
  ],
})
export class PageWithTabsModule {}

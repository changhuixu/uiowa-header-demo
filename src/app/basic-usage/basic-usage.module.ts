import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs'; 

import { BasicUsageComponent } from './basic-usage/basic-usage.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule
  ],
  declarations: [BasicUsageComponent]
})
export class BasicUsageModule { }

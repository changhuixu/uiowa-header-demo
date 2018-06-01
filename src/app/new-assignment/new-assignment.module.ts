import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightModule } from 'ngx-highlightjs'; 

import { UiDriverComponent } from './ui-driver/ui-driver.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HighlightModule
  ],
  declarations: [UiDriverComponent]
})
export class NewAssignmentModule { }

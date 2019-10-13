import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FaqsRoutingModule } from './faqs-routing.module';
import { HomeComponent } from './home/home.component';
import { FaqsListComponent } from './faqs-list/faqs-list.component';

@NgModule({
  declarations: [HomeComponent, FaqsListComponent],
  imports: [SharedModule, DragDropModule, FaqsRoutingModule]
})
export class FaqsModule {}

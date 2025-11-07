import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { FaqsListComponent } from './faqs-list/faqs-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, FaqsListComponent],
  imports: [
    SharedModule,
    DragDropModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ]),
  ],
})
export class FaqsModule {}

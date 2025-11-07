import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { ReportAComponent } from './report-a/report-a.component';
import { ReportBComponent } from './report-b/report-b.component';

export const childRoutes: Routes = [
  {
    path: 'report-a',
    component: ReportAComponent,
    data: { title: 'Report A' },
  },
  {
    path: 'report-b',
    component: ReportBComponent,
    data: { title: 'Report B' },
  },
];

@NgModule({
  declarations: [LayoutComponent, ReportAComponent, ReportBComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: childRoutes[0].path,
          },
          ...childRoutes,
        ],
      },
    ]),
  ],
})
export class ReportsModule {}

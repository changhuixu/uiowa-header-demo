import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { childRoutes } from './child-routes';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dash-board',
        pathMatch: 'full',
      },

      ...childRoutes,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenusRoutingModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SideMenusRoutingModule } from './side-menus-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PendingOffersComponent } from './pending-offers/pending-offers.component';
import { CurrentOffersComponent } from './current-offers/current-offers.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LotsComponent } from './lots/lots.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { TileComponent } from './home/tile/tile.component';
import { ArticleComponent } from './reports/article/article.component';
import { ScoopComponent } from './reports/article/scoop/scoop.component';
import { MediumComponent } from './reports/article/medium/medium.component';
import { LinkedinComponent } from './reports/article/linkedin/linkedin.component';

@NgModule({
  declarations: [
    LayoutComponent,
    PendingOffersComponent,
    CurrentOffersComponent,
    ApplicantsComponent,
    BuildingsComponent,
    LotsComponent,
    EmailTemplatesComponent,
    ReportsComponent,
    HomeComponent,
    TileComponent,
    ArticleComponent,
    ScoopComponent,
    MediumComponent,
    LinkedinComponent,
  ],
  imports: [
    SharedModule,
    NgbDropdownModule,
    SideMenusRoutingModule,
    NgChartsModule,
  ],
})
export class SideMenusModule {}

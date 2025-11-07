import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { ApplicantsComponent } from './applicants/applicants.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { ArticleComponent } from './current-offers/article/article.component';
import { LinkedinComponent } from './current-offers/article/linkedin/linkedin.component';
import { MediumComponent } from './current-offers/article/medium/medium.component';
import { ScoopComponent } from './current-offers/article/scoop/scoop.component';
import { CurrentOffersComponent } from './current-offers/current-offers.component';
import { HomeComponent } from './home/home.component';
import { TileComponent } from './home/tile/tile.component';
import { LayoutComponent } from './layout/layout.component';
import { LotsComponent } from './lots/lots.component';
import { PendingOffersComponent } from './pending-offers/pending-offers.component';
import { SideMenusRoutingModule } from './side-menus-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    PendingOffersComponent,
    CurrentOffersComponent,
    ApplicantsComponent,
    BuildingsComponent,
    LotsComponent,
    HomeComponent,
    TileComponent,
    ArticleComponent,
    ScoopComponent,
    MediumComponent,
    LinkedinComponent,
  ],
  imports: [SharedModule, NgbDropdownModule, SideMenusRoutingModule],
})
export class SideMenusModule {}

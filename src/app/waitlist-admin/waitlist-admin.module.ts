import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WaitlistAdminRoutingModule } from './waitlist-admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PendingOffersComponent } from './pending-offers/pending-offers.component';
import { CurrentOffersComponent } from './current-offers/current-offers.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LotsComponent } from './lots/lots.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { UniversityHolidaysComponent } from './university-holidays/university-holidays.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { TileComponent } from './home/tile/tile.component';

@NgModule({
  declarations: [
    LayoutComponent,
    PendingOffersComponent,
    CurrentOffersComponent,
    ApplicantsComponent,
    BuildingsComponent,
    LotsComponent,
    EmailTemplatesComponent,
    UniversityHolidaysComponent,
    ReportsComponent,
    HomeComponent,
    TileComponent
  ],
  imports: [CommonModule, WaitlistAdminRoutingModule, ChartsModule, NgbModule]
})
export class WaitlistAdminModule {}

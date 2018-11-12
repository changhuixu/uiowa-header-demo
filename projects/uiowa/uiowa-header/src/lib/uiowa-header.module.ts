import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UiowaHeaderComponent } from './uiowa-header/uiowa-header.component';
import { UiowaBrandingComponent } from './uiowa-branding/uiowa-branding.component';
import { UiowaAppNavBarComponent } from './uiowa-app-nav-bar/uiowa-app-nav-bar.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NgbModule],
  declarations: [
    UiowaHeaderComponent,
    UiowaBrandingComponent,
    UiowaAppNavBarComponent
  ],
  exports: [
    UiowaHeaderComponent,
    UiowaBrandingComponent,
    UiowaAppNavBarComponent
  ]
})
export class UiowaHeaderModule {}

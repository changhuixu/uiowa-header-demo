import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { HomeComponent } from './home/home.component';
import { TabContent1Component } from './tab-content1/tab-content1.component';
import { TabContent2Component } from './tab-content2/tab-content2.component';
import { TabContent3Component } from './tab-content3/tab-content3.component';

@NgModule({
  declarations: [
    HomeComponent,
    TabContent1Component,
    TabContent2Component,
    TabContent3Component
  ],
  imports: [CommonModule, FormsModule, NgbModule, FormWizardRoutingModule]
})
export class FormWizardModule {}

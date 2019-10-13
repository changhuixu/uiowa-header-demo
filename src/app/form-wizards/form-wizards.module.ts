import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DateRangePickerModule } from '@uiowa/date-range-picker';

import { FormWizardsRoutingModule } from './form-wizards-routing.module';
import { HomeComponent } from './home/home.component';
import { TabContent1Component } from './wizard1/tab-content1/tab-content1.component';
import { TabContent2Component } from './wizard1/tab-content2/tab-content2.component';
import { TabContent3Component } from './wizard1/tab-content3/tab-content3.component';
import { Wizard1Component } from './wizard1/wizard1.component';
import { Wizard2Component } from './wizard2/wizard2.component';

@NgModule({
  declarations: [
    HomeComponent,
    TabContent1Component,
    TabContent2Component,
    TabContent3Component,
    Wizard1Component,
    Wizard2Component
  ],
  imports: [SharedModule, FormWizardsRoutingModule, DateRangePickerModule]
})
export class FormWizardsModule {}

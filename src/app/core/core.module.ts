import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HawkIdLoginService } from './services/hawkid-login.service';

import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AppToastsComponent } from './components/app-toasts/app-toasts.component';
import { LoginService, UiowaHeaderModule } from '../../../projects/uiowa/uiowa-header/src/public-api';

@NgModule({
  imports: [CommonModule, UiowaHeaderModule, NgbToastModule],
  declarations: [AccessDeniedComponent, AppFooterComponent, AppToastsComponent],
  providers: [
    { provide: LoginService, useClass: HawkIdLoginService },
    HawkIdLoginService,
  ],
  exports: [
    UiowaHeaderModule,
    AccessDeniedComponent,
    AppFooterComponent,
    AppToastsComponent,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Core Module can only be imported to AppModule.');
    }
  }
}

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HawkidLoginService } from './services/hawkid-login.service';
import {
  UiowaHeaderModule,
  LoginService,
} from 'projects/uiowa/uiowa-header/src/public-api';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  imports: [CommonModule, UiowaHeaderModule],
  declarations: [AccessDeniedComponent, AppFooterComponent],
  providers: [
    { provide: LoginService, useClass: HawkidLoginService },
    HawkidLoginService,
  ],
  exports: [UiowaHeaderModule, AccessDeniedComponent, AppFooterComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Core Module can only be imported to AppModule.');
    }
  }
}

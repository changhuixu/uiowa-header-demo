import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { LoginService } from '../../projects/uiowa/uiowa-header/src/public-api';
import { routes } from './app.routes';
import { HawkIdLoginService } from './core/services/hawkid-login.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LoginService, useClass: HawkIdLoginService },
    provideRouter(routes),
  ],
};

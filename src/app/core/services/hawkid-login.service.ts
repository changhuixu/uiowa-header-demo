import { Injectable } from '@angular/core';
import { LoginService } from '../../../../projects/uiowa/uiowa-header/src/public-api';

@Injectable({ providedIn: 'root' })
export class HawkIdLoginService extends LoginService {
  a = 'hello';
  constructor() {
    super();
  }
  override login() {
    console.log('HawkID login');
  }

  override logout() {
    console.log('HawkID logout');
  }
}

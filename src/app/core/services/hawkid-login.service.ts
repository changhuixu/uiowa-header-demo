import { Injectable } from '@angular/core';
import { LoginService } from 'projects/uiowa/uiowa-header/src/public-api';

@Injectable()
export class HawkidLoginService extends LoginService {
  a = 'hello';
  constructor() {
    super();
  }
  login() {
    console.log('hawkId login');
  }

  logout() {
    console.log('hawkid logout');
  }
}

import { Injectable } from '@angular/core';
import { LoginService } from '@uiowa/uiowa-header';

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

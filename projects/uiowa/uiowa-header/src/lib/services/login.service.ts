import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  returnUri = '';
  constructor() {}

  login(): void {
    window.location.replace(`account/login?returnUri=${this.returnUri}`);
  }

  logout(): void {
    window.location.replace(`account/logout`);
  }
}

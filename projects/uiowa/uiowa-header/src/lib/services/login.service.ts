import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  returnUri = '';
  constructor() {}

  login(): void {
    const url = `account/login?returnUri=${this.returnUri}`;
    try {
      window.location.replace(url);
    } catch {
      window.location.href = url;
    }
  }

  logout(): void {
    try {
      window.location.replace(`account/logout`);
    } catch {
      window.location.href = `account/logout`;
    }
  }
}

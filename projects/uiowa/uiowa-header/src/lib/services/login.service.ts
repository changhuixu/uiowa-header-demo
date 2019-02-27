import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  returnUri = '';
  constructor() {}

  login(): void {
    let url = `account/login?returnUri=${this.returnUri}`;
    if ((document as any).documentMode) {
      const base = document.getElementsByTagName('base')[0].href;
      url = base + url;
    }
    try {
      window.location.replace(url);
    } catch {
      window.location.href = url;
    }
  }

  logout(): void {
    let url = `account/logout`;
    if ((document as any).documentMode) {
      const base = document.getElementsByTagName('base')[0].href;
      url = base + url;
    }
    try {
      window.location.replace(url);
    } catch {
      window.location.href = url;
    }
  }
}

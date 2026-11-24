import { Injectable, signal } from '@angular/core';
import { HeaderUser } from '../../../../projects/uiowa/uiowa-header/src/public-api';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _user = signal<HeaderUser>({
    userName: 'hawkId',
    originalUserName: 'adminId',
  });
  user = this._user.asReadonly();

  impersonate(hawkid: string) {
    this._user.set({ userName: hawkid, originalUserName: 'adminId' });
  }

  stopImpersonation() {
    this._user.set({ userName: 'adminId', originalUserName: '' });
  }
}

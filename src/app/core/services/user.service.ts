import { Injectable, signal } from '@angular/core';
import { HeaderUser } from '../../../../projects/uiowa/uiowa-header/src/public-api';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _user = signal<HeaderUser>({
    userName: 'hawkid',
    originalUserName: 'admin_id',
  });
  user = this._user.asReadonly();

  impersonate(hawkid: string) {
    this._user.set({ userName: hawkid, originalUserName: 'admin_id' });
  }

  stopImpersonation() {
    this._user.set({ userName: 'admin_id', originalUserName: '' });
  }
}

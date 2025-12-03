import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _user = signal<{ userName: string; originalUserName: string }>({
    userName: 'hawkid',
    originalUserName: 'admin_id',
  });
  user = computed(() => this._user());

  impersonate(hawkid: string) {
    this._user.set({ userName: hawkid, originalUserName: 'admin_id' });
  }

  stopImpersonation() {
    this._user.set({ userName: 'admin_id', originalUserName: '' });
  }
}

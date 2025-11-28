import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavService {
  private _showNavBar = signal(false);
  readonly showNavBar = this._showNavBar.asReadonly();

  trigger = () => this._showNavBar.update((b) => !b);
  hide = () => this._showNavBar.set(false);
}

import { Injectable, signal } from '@angular/core';

export interface Toast {
  content: string;
  toastType: 'primary' | 'success' | 'info' | 'warning' | 'error';
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toasts = signal<Toast[]>([]);
  toasts = this._toasts.asReadonly();

  show(
    message: string,
    toastType: 'primary' | 'success' | 'info' | 'warning' | 'error',
    delay = 5
  ) {
    this._toasts.update((toasts) => [
      ...toasts,
      {
        toastType: toastType,
        delay: delay,
        content: message,
      },
    ]);
  }

  remove(toast: Toast) {
    this._toasts.update((toasts) => toasts.filter((t) => t !== toast));
  }

  primary(message: string, delay = 5) {
    this.show(message, 'primary', delay);
  }

  success(message: string, delay = 5) {
    this.show(message, 'success', delay);
  }

  info(message: string, delay = 5) {
    this.show(message, 'info', delay);
  }

  warning(message: string, delay = 5) {
    this.show(message, 'warning', delay);
  }

  error(message: string, delay = 5) {
    this.show(message, 'error', delay);
  }

  clear() {
    this._toasts.set([]);
  }
}

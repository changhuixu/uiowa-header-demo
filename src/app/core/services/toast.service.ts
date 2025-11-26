import { Injectable } from '@angular/core';

export interface Toast {
  content?: string;
  className?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  /**
   * Show a Toast
   * @param message plain text toast body
   * @param title plain text toast header
   * @param className custom template for the toast body
   * @param delay the duration (in seconds) of the toast displaying on the page; default: 5 seconds.
   */
  show(message: string, className = '', delay = 5) {
    this.toasts.push({
      className: className,
      delay: delay * 1000,
      content: message,
    });
  }

  /**
   * Remove a toast from the list of toasts in the page
   * @param toast a reference to a Toast
   */
  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t.content !== toast.content);
  }

  /**
   * Display a Primary Toast
   * @param message plain text toast body OR custom template for the toast body
   * @param title plain text toast header
   * @param delay the duration (in seconds) of the toast displaying on the page; default: 5 seconds.
   */
  primary(message: string, delay = 5) {
    this.show(message, 'bg-primary text-white fs-6', delay);
  }
  /**
   * Display a Success Toast
   * @param message plain text toast body OR custom template for the toast body
   * @param title plain text toast header
   * @param delay the duration (in seconds) of the toast displaying on the page; default: 5 seconds.
   */
  success(message: string, delay = 5) {
    this.show(message, 'bg-success text-white fs-6', delay);
  }
  /**
   * Display a Info Toast
   * @param message plain text toast body OR custom template for the toast body
   * @param title plain text toast header
   * @param delay the duration (in seconds) of the toast displaying on the page; default: 5 seconds.
   */
  info(message: string, delay = 5) {
    this.show(message, 'bg-info text-dark fs-6', delay);
  }
  /**
   * Display a Warning Toast
   * @param message plain text toast body OR custom template for the toast body
   * @param title plain text toast header
   * @param delay the duration (in seconds) of the toast displaying on the page; default: 5 seconds.
   */
  warning(message: string, delay = 5) {
    this.show(message, 'bg-warning text-dark fs-6', delay);
  }
  /**
   * Display a Error Toast
   * @param message plain text toast body OR custom template for the toast body
   * @param title plain text toast header
   * @param delay the duration (in seconds) of the toast displaying on the page; default: 5 seconds.
   */
  error(message: string, delay = 5) {
    this.show(message, 'bg-danger text-white fs-6', delay);
  }

  /**
   * Clear all Toasts
   */
  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}

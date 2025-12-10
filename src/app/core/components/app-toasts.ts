import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'uiowa-toast',
  host: {
    '[attr.role]': 'role()',
    '[attr.aria-live]': 'ariaLive()',
    'aria-atomic': 'true',
    class: 'toast d-block fs-6',
    '[class]': 'cssClass()',
    '(mouseenter)': 'ngOnDestroy()',
    '(mouseleave)': 'ngOnInit()',
  },
  template: `<div class="toast-body">{{ message() }}</div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiowaToast implements OnInit, OnDestroy {
  protected role = computed(() => (this.toastType() === 'error' ? 'alert' : 'polite'));
  protected ariaLive = computed(() => (this.toastType() === 'error' ? 'assertive' : 'status'));
  protected cssClass = computed(() => {
    switch (this.toastType()) {
      case 'primary':
        return 'bg-primary text-white';
      case 'success':
        return 'bg-success text-white';
      case 'info':
        return 'bg-info text-dark';
      case 'warning':
        return 'bg-warning text-dark';
      case 'error':
        return 'bg-danger text-white';
    }
  });
  readonly delay = input.required<number>();
  readonly toastType = input.required<'primary' | 'success' | 'info' | 'warning' | 'error'>();
  readonly message = input.required<string>();

  hidden = output<boolean>();
  private _subscription?: Subscription;

  ngOnInit(): void {
    this._subscription?.unsubscribe();
    this._subscription = interval(1000).subscribe((n) => {
      if (this.delay() <= n) {
        this.hidden.emit(true);
      }
    });
  }
  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}

@Component({
  selector: 'app-toasts',
  imports: [UiowaToast],
  template: `
    @for(toast of toastService.toasts(); track $index){
    <uiowa-toast
      (hidden)="toastService.remove(toast)"
      [delay]="toast.delay || 5"
      [toastType]="toast.toastType"
      [message]="toast.content"
      animate.enter="entering"
      animate.leave="leaving"
    />
    }
  `,
  styles: [
    `
      .entering {
        animation: slide-fade 300ms;
      }
      @keyframes slide-fade {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .leaving {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 300ms ease-out, transform 300ms ease-out;
      }
    `,
  ],
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToasts {
  toastService = inject(ToastService);
}

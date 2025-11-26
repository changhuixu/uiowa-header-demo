import { Component, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toasts',
  imports: [NgbToastModule],
  template: `
    @for(toast of toastService.toasts; track $index){
    <ngb-toast
      [class]="toast.className"
      [delay]="toast.delay || 5000"
      [autohide]="autoHide"
      (mouseenter)="autoHide = false"
      (mouseleave)="autoHide = true"
      (hidden)="toastService.remove(toast)"
    >
      {{ toast.content }}
    </ngb-toast>
    }
  `,
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
})
export class AppToasts {
  autoHide = true;
  toastService = inject(ToastService);
}

import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-toasts',
    template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.className"
      [header]="toast.title || ''"
      [delay]="toast.delay || 5000"
      [autohide]="autoHide"
      (mouseenter)="autoHide = false"
      (mouseleave)="autoHide = true"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="toast.contentTemplate" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.contentTemplate"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.content }}</ng-template>
    </ngb-toast>
  `,
    host: {
        class: 'toast-container position-fixed top-0 end-0 p-3',
        style: 'z-index: 1200',
    },
    standalone: false
})
export class AppToastsComponent {
  autoHide = true;
  constructor(public toastService: ToastService) {}
}

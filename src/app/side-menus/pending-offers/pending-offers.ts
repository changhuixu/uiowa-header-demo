import { Component, inject } from '@angular/core';
import { ToastService } from '../../core';

@Component({
  selector: 'app-pending-offers',
  imports: [],
  templateUrl: './pending-offers.html',
  styleUrl: './pending-offers.css',
})
export class PendingOffers {
  private toastr = inject(ToastService);

  ngOnInit() {}

  showPrimary() {
    this.toastr.primary('I am a primary toast');
  }
  showInfo() {
    this.toastr.info('I am an info toast');
  }
  showWarning() {
    this.toastr.warning('I am a warning toast');
  }
  showSuccess() {
    this.toastr.success('I am a success toast, will disappear in 10s.', 10);
  }
  showDanger() {
    this.toastr.error('I am a danger toast');
  }
}

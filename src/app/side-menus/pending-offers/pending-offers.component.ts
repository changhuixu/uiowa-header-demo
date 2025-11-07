import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../core';

@Component({
  selector: 'app-pending-offers',
  templateUrl: './pending-offers.component.html',
  styleUrls: ['./pending-offers.component.css'],
  standalone: false,
})
export class PendingOffersComponent implements OnInit {
  constructor(private toastr: ToastService) {}

  ngOnInit() {}

  showPrimary() {
    this.toastr.primary('I am a primary toast', 'Title');
  }
  showInfo() {
    this.toastr.info('I am an info toast', '');
  }
  showWarning() {
    this.toastr.warning('I am a warning toast');
  }
  showSuccess() {
    this.toastr.success('I am a success toast, will disappear in 10s.', '', 10);
  }
  showDanger(template: TemplateRef<any>) {
    this.toastr.error(template);
  }
}

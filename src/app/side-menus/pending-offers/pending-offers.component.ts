import { Component, OnInit, TemplateRef } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/core';

@Component({
  selector: 'app-pending-offers',
  templateUrl: './pending-offers.component.html',
  styleUrls: ['./pending-offers.component.css'],
})
export class PendingOffersComponent implements OnInit {
  faHome = faHome;
  faAngleRight = faAngleRight;
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

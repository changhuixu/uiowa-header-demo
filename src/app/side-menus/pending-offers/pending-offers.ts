import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastService } from '../../core';

@Component({
  selector: 'app-pending-offers',
  imports: [],
  templateUrl: './pending-offers.html',
  styleUrl: './pending-offers.css',
})
export class PendingOffers {
  private toastr = inject(ToastService);
  private httpClient = inject(HttpClient);

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

  callApi() {
    throwError(
      () =>
        new HttpErrorResponse({
          error: 'Simulated API error response',
          status: 400,
          statusText: 'Bad Request',
        })
    ).subscribe({
      next: (_) => {
        this.toastr.success('API call successful!');
      },
      error: (e: HttpErrorResponse) => {
        this.toastr.error(e.message || 'API call failed.');
      },
    });
  }
}

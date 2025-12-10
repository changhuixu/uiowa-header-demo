import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-search',
  imports: [FormsModule],
  templateUrl: './email-search.html',
  styleUrl: './email-search.css',
})
export class EmailSearch {
  period = 7;
  email = '';
  busy = false;
  alertMessage = '';

  searchEmails() {
    this.alertMessage = '';
    if (!this.email) {
      this.alertMessage = `Please provide a valid Email Address`;
      return;
    }
    this.email = this.email.trim();
    if (!this.email.includes('@')) {
      this.email += '@uiowa.edu';
    }
  }
}

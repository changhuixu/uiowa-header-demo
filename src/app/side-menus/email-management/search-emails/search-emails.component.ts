import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-emails',
  templateUrl: './search-emails.component.html',
  styleUrls: ['./search-emails.component.css'],
  standalone: false,
})
export class SearchEmailsComponent implements OnInit {
  period = 7;
  email = '';
  busy = false;
  alertMessages: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  searchEmails() {
    this.alertMessages = [];
    if (!this.email) {
      this.alertMessages.push(`Please provide a valid Email Address`);
      return;
    }
    this.email = this.email.trim();
    if (!this.email.includes('@')) {
      this.email += '@uiowa.edu';
    }
  }
}

import { Component, inject } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-impersonation',
  imports: [],
  templateUrl: './impersonation.html',
  styleUrl: './impersonation.css',
})
export class Impersonation {
  userService = inject(UserService);

  impersonate() {
    this.userService.impersonate('hawkid');
  }

  stopImpersonation() {
    this.userService.stopImpersonation();
  }
}

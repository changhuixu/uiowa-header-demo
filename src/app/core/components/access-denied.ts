import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [],
  template: `
    <div class="container">
      <h2 class="text-danger my-4">Access Denied.</h2>
      <p>
        You don't have permission to view the page or you haven't logged in with a valid account.
      </p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessDenied {}

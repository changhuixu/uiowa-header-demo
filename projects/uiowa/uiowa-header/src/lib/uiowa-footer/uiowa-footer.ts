import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'footer[uiowa-footer]',
  imports: [],
  templateUrl: './uiowa-footer.html',
  styleUrl: './uiowa-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiowaFooter {
  year = new Date().getFullYear();
  emailLinkText = input<string>('Business Services IT');
  emailAddress = input<string>('changhui-xu@uiowa.edu');
  emailSubject = input<string>('Questions about the uiowa-header');
  emailHref = computed<string>(
    () => `mailto:${this.emailAddress()}?subject=${this.emailSubject().replace(' ', '%20')}`
  );
}

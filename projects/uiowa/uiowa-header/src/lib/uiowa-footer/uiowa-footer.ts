import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'footer[uiowa-footer]',
  imports: [],
  templateUrl: './uiowa-footer.html',
  styleUrl: './uiowa-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiowaFooter implements OnInit {
  year = new Date().getFullYear();
  @Input() emailLinkText = 'Business Services IT';
  @Input() emailAddress = 'changhui-xu@uiowa.edu';
  @Input() emailSubject = 'Questions about the uiowa-header';
  emailHref = '';
  ngOnInit(): void {
    this.emailHref = `mailto:${this.emailAddress}?subject=${this.emailSubject.replace(' ', '%20')}`;
  }
}

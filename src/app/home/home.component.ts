import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  html: SafeHtml = '';
  ts: SafeHtml = '';
  showHtml = false;
  showTs = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.html = this.sanitizer.bypassSecurityTrustHtml(`
  <pre style='color:#d1d1d1;background:#000000;'><span style='color:#ff8906; '>&lt;</span><span style='color:#f6c1d0; '>uiowa-header</span>
    [externalLinks]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"externalLinks"</span>
    [applicationName]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"applicationName"</span>
    [internalRoutes]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"internalRoutes"</span>
    [user]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"headerUser"</span>
    (stopImpersonation)<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"stopImpersonation()"</span>
    [showTestWarning]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"true"</span>
  <span style='color:#ff8906; '>></span>
<span style='color:#ff8906; '>&lt;/</span><span style='color:#f6c1d0; '>uiowa-header</span><span style='color:#ff8906; '>></span>
  </pre>
  <!--Created using ToHtml.com on 2021-10-20 13:13:54 UTC -->
`);
    this.ts = this.sanitizer.bypassSecurityTrustHtml(`
<pre style='color:#d1d1d1;background:#000000;'><span style='color:#e66170; font-weight:bold; '>import</span> <span style='color:#b060b0; '>{</span> Component<span style='color:#d2cd86; '>,</span> OnInit <span style='color:#b060b0; '>}</span> from <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>@angular/core</span><span style='color:#02d045; '>'</span><span style='color:#b060b0; '>;</span>
<span style='color:#e66170; font-weight:bold; '>import</span> <span style='color:#b060b0; '>{</span> InternalRoute<span style='color:#d2cd86; '>,</span> ExternalLink<span style='color:#d2cd86; '>,</span> HeaderUser <span style='color:#b060b0; '>}</span> from <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>@uiowa/uiowa-header</span><span style='color:#02d045; '>'</span><span style='color:#b060b0; '>;</span>
<span style='color:#e66170; font-weight:bold; '>export</span> <span style='color:#e66170; font-weight:bold; '>class</span> AppComponent <span style='color:#e66170; font-weight:bold; '>implements</span> OnInit <span style='color:#b060b0; '>{</span>
  externalLinks <span style='color:#d2cd86; '>=</span> <span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>new</span> ExternalLink<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>Self Service</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>,</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>https://hris.uiowa.edu</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
  applicationName <span style='color:#d2cd86; '>=</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>Awesome Application Name</span><span style='color:#02d045; '>'</span><span style='color:#b060b0; '>;</span>
  internalRoutes <span style='color:#d2cd86; '>=</span> <span style='color:#d2cd86; '>[</span>
    <span style='color:#e66170; font-weight:bold; '>new</span> InternalRoute<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>Home</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>,</span> <span style='color:#02d045; '>'</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>,</span>
    <span style='color:#e66170; font-weight:bold; '>new</span> InternalRoute<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>Page with Tabs</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>,</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>page-with-tabs</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>)</span>
  <span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
  headerUser <span style='color:#d2cd86; '>=</span> <span style='color:#b060b0; '>{</span>
    userName<span style='color:#b060b0; '>:</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>abc</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>,</span>
    originalUserName<span style='color:#b060b0; '>:</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>changhxu</span><span style='color:#02d045; '>'</span>
  <span style='color:#b060b0; '>}</span> as HeaderUser<span style='color:#b060b0; '>;</span>
  ngOnInit<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span> <span style='color:#b060b0; '>{</span><span style='color:#b060b0; '>}</span>
  stopImpersonation<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span> <span style='color:#b060b0; '>{</span>
  <span style='color:#b060b0; '>}</span>
<span style='color:#b060b0; '>}</span>
</pre>
<!--Created using ToHtml.com on 2019-10-10 13:40:12 UTC -->
`);
  }
}

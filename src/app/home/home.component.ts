import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  html = null;
  ts = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.html = this.sanitizer.bypassSecurityTrustHtml(`
<pre style='color:#d1d1d1;background:#000000;'><span style='color:#ff8906; '>&lt;</span><span style='color:#e66170; font-weight:bold; '>header</span> role<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"banner"</span><span style='color:#ff8906; '>></span>
  <span style='color:#ff8906; '>&lt;</span><span style='color:#f6c1d0; '>uiowa-header</span>
    [externalLinks]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"externalLinks"</span>
    [applicationName]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"applicationName"</span>
    [internalRoutes]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"internalRoutes"</span>
    [user]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"headerUser"</span>
    (stopImpersonation)<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"stopImpersonation()"</span>
    [showTestWarning]<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"true"</span>
  <span style='color:#ff8906; '>></span>
  <span style='color:#ff8906; '>&lt;/</span><span style='color:#f6c1d0; '>uiowa-header</span><span style='color:#ff8906; '>></span>
<span style='color:#ff8906; '>&lt;/</span><span style='color:#e66170; font-weight:bold; '>header</span><span style='color:#ff8906; '>></span>
<span style='color:#ff8906; '>&lt;</span><span style='color:#f6c1d0; '>main</span> role<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"main"</span> class<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"w-100 h-100 flex-fill p-0 overflow-auto"</span><span style='color:#ff8906; '>></span>
  <span style='color:#ff8906; '>&lt;</span><span style='color:#f6c1d0; '>router-outlet</span><span style='color:#ff8906; '>></span><span style='color:#ff8906; '>&lt;/</span><span style='color:#f6c1d0; '>router-outlet</span><span style='color:#ff8906; '>></span>
<span style='color:#ff8906; '>&lt;/</span><span style='color:#f6c1d0; '>main</span><span style='color:#ff8906; '>></span>
<span style='color:#ff8906; '>&lt;</span><span style='color:#e66170; font-weight:bold; '>footer</span> role<span style='color:#d2cd86; '>=</span><span style='color:#00c4c4; '>"contentinfo"</span><span style='color:#ff8906; '>></span>
  <span style='color:#ff8906; '>&lt;</span><span style='color:#f6c1d0; '>app-footer</span><span style='color:#ff8906; '>></span><span style='color:#ff8906; '>&lt;/</span><span style='color:#f6c1d0; '>app-footer</span><span style='color:#ff8906; '>></span>
<span style='color:#ff8906; '>&lt;/</span><span style='color:#e66170; font-weight:bold; '>footer</span><span style='color:#ff8906; '>></span>
</pre>
<!--Created using ToHtml.com on 2019-10-10 13:50:28 UTC -->
`);
    this.ts = this.sanitizer.bypassSecurityTrustHtml(`
<pre style='color:#d1d1d1;background:#000000;'><span style='color:#e66170; font-weight:bold; '>import</span> <span style='color:#b060b0; '>{</span> Component<span style='color:#d2cd86; '>,</span> OnInit <span style='color:#b060b0; '>}</span> from <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>@angular/core</span><span style='color:#02d045; '>'</span><span style='color:#b060b0; '>;</span>
<span style='color:#e66170; font-weight:bold; '>import</span> <span style='color:#b060b0; '>{</span> InternalRoute<span style='color:#d2cd86; '>,</span> ExternalLink<span style='color:#d2cd86; '>,</span> HeaderUser <span style='color:#b060b0; '>}</span> from <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>@uiowa/uiowa-header</span><span style='color:#02d045; '>'</span><span style='color:#b060b0; '>;</span>
<span style='color:#e66170; font-weight:bold; '>export</span> <span style='color:#e66170; font-weight:bold; '>class</span> AppComponent <span style='color:#e66170; font-weight:bold; '>implements</span> OnInit <span style='color:#b060b0; '>{</span>
  externalLinks <span style='color:#d2cd86; '>=</span> <span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>new</span> ExternalLink<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>Self Service</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>,</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>https://hris.uiowa.edu</span><span style='color:#02d045; '>'</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
  applicationName <span style='color:#d2cd86; '>=</span> <span style='color:#02d045; '>'</span><span style='color:#00c4c4; '>Your Awesome Application Name</span><span style='color:#02d045; '>'</span><span style='color:#b060b0; '>;</span>
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

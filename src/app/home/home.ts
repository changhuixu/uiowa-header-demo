import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  html: SafeHtml = '';
  ts: SafeHtml = '';
  showHtml = false;
  showTs = false;
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.html = this.sanitizer.bypassSecurityTrustHtml(`
  <pre class='bg'><span class='element'>&lt;uiowa-header</span>
    [externalLinks]<span class='eq'>=</span><span class='qt'>"externalLinks"</span>
    [applicationName]<span class='eq'>=</span><span class='qt'>"applicationName"</span>
    [internalRoutes]<span class='eq'>=</span><span class='qt'>"internalRoutes"</span>
    [user]<span class='eq'>=</span><span class='qt'>"headerUser"</span>
    (stopImpersonation)<span class='eq'>=</span><span class='qt'>"stopImpersonation()"</span>
    [showTestWarning]<span class='eq'>=</span><span class='qt'>"true"</span>
  <span class='element'>/></span>
  </pre>`);
    this.ts = this.sanitizer.bypassSecurityTrustHtml(`
<pre class='bg'><span class='kw'>import</span> <span class='brace'>{</span> Component<span class='eq'>,</span> OnInit <span class='brace'>}</span> from <span class='qt'>'@angular/core'</span><span class='brace'>;</span>
<span class='kw'>import</span> <span class='brace'>{</span> InternalRoute<span class='eq'>,</span> ExternalLink<span class='eq'>,</span> HeaderUser <span class='brace'>}</span> from <span class='qt'>'@uiowa/uiowa-header'</span><span class='brace'>;</span>
<br><span class='kw'>export</span> <span class='kw'>class</span> AppComponent <span class='kw'>implements</span> OnInit <span class='brace'>{</span>
  externalLinks <span class='eq'>=</span> <span class='eq'>[</span><span class='kw'>new</span> ExternalLink<span class='eq'>(</span><span class='qt'>'Self Service</span><span class=eq'>'</span><span class='eq'>,</span> <span class='qt'>'https://hris.uiowa.edu'</span><span class='eq'>)]</span><span class='brace'>;</span>
  applicationName <span class='eq'>=</span> <span class='qt'>'Awesome Application Name</span><span class=eq'>'</span><span class='brace'>;</span>
  internalRoutes <span class='eq'>=</span> <span class='eq'>[</span>
    <span class='kw'>new</span> InternalRoute<span class='eq'>(</span><span class='qt'>'Home</span><span class=eq'>'</span><span class='eq'>,</span> <span class=eq'>''</span><span class='eq'>),</span>
    <span class='kw'>new</span> InternalRoute<span class='eq'>(</span><span class='qt'>'Page with Tabs</span><span class=eq'>'</span><span class='eq'>,</span> <span class='qt'>'page-with-tabs'</span><span class='eq'>)</span>
  <span class='eq'>]</span><span class='brace'>;</span>
  headerUser <span class='eq'>=</span> <span class='brace'>{</span>
    userName<span class='brace'>:</span> <span class='qt'>'abc</span><span class=eq'>'</span><span class='eq'>,</span>
    originalUserName<span class='brace'>:</span> <span class='qt'>'changhxu</span><span class=eq'>'</span>
  <span class='brace'>}</span> as HeaderUser<span class='brace'>;</span>
  ngOnInit<span class='eq'>(</span><span class='eq'>)</span> <span class='brace'>{ }</span>
  stopImpersonation<span class='eq'>(</span><span class='eq'>)</span> <span class='brace'>{ }</span>
<span class='brace'>}</span>
</pre>`);
  }
}

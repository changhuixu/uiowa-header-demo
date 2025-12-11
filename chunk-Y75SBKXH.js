import{f}from"./chunk-SOP6FSF6.js";import"./chunk-FYA6PSJR.js";import{Aa as c,Ea as i,M as u,Pa as h,ab as o,bb as r,kb as p,lb as e,mb as m,ob as q,qb as d,rb as b,zb as t}from"./chunk-JYRHHPEW.js";import"./chunk-2NFLSA4Y.js";function k(s,l){if(s&1&&m(0,"div",3),s&2){let a=b();q("innerHTML",a.html,c)}}function _(s,l){if(s&1&&m(0,"div",3),s&2){let a=b();q("innerHTML",a.ts,c)}}var w=class s{html="";ts="";showHtml=!1;showTs=!1;sanitizer=u(f);ngOnInit(){this.html=this.sanitizer.bypassSecurityTrustHtml(`
  <pre class='bg'><span class='element'>&lt;uiowa-header</span>
    [externalLinks]<span class='eq'>=</span><span class='qt'>"externalLinks"</span>
    [applicationName]<span class='eq'>=</span><span class='qt'>"applicationName"</span>
    [internalRoutes]<span class='eq'>=</span><span class='qt'>"internalRoutes"</span>
    [user]<span class='eq'>=</span><span class='qt'>"headerUser"</span>
    (stopImpersonation)<span class='eq'>=</span><span class='qt'>"stopImpersonation()"</span>
    [showTestWarning]<span class='eq'>=</span><span class='qt'>"true"</span>
  <span class='element'>/></span>
  </pre>`),this.ts=this.sanitizer.bypassSecurityTrustHtml(`
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
</pre>`)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=h({type:s,selectors:[["app-home"]],decls:9,vars:2,consts:[[1,"container","d-flex","flex-column"],[1,"h3","mt-2"],["type","button",1,"btn","btn-link","me-auto",3,"click"],[3,"innerHTML"]],template:function(a,n){a&1&&(p(0,"div",0)(1,"p",1),t(2,"Example Usage"),e(),p(3,"button",2),d("click",function(){return n.showHtml=!n.showHtml}),t(4," app.component.html "),e(),o(5,k,1,1,"div",3),p(6,"button",2),d("click",function(){return n.showTs=!n.showTs}),t(7," app.component.ts "),e(),o(8,_,1,1,"div",3),e()),a&2&&(i(5),r(n.showHtml?5:-1),i(3),r(n.showTs?8:-1))},styles:[".bg{color:#d1d1d1;background:#000}  .element{color:#f34677}  .attr{color:#f6c1d0}  .eq{color:#d2cd86}  .qt{color:#00c4c4}  .kw{color:#e66170;font-weight:700}  .brace{color:#b060b0}"]})};export{w as Home};

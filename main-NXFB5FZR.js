import{a as Oe,b as ye}from"./chunk-K7NADTYK.js";import{B as w,Ba as ce,C as f,Ca as p,D as M,Da as H,E as k,Ea as C,H as ae,J as z,K as re,La as L,Oa as me,P as oe,Pb as Me,Q as F,Qb as ke,R as se,S as l,T as O,Ua as j,Va as de,Wa as B,Xa as ue,Y as x,Z as S,_ as le,_a as W,aa as g,bb as ge,ca as I,cb as we,da as c,db as fe,eb as _e,fa as pe,fb as he,ga as _,ha as R,ia as A,ja as $,ka as i,la as r,ma as d,qa as v,rb as xe,sa as u,sb as Ce,ta as s,tb as be,u as V,ub as ve,v as P,vb as U,x as ie}from"./chunk-2UINFRN3.js";var N=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=P({imports:[W,xe,U]})};var y=class n{returnUri="";constructor(){}login(){let t=`account/login?returnUri=${encodeURIComponent(this.returnUri)}`;document.documentMode&&(t=document.getElementsByTagName("base")[0].href+t);try{window.location.replace(t)}catch{window.location.href=t}}logout(){let t="account/logout";document.documentMode&&(t=document.getElementsByTagName("base")[0].href+t);try{window.location.replace(t)}catch{window.location.href=t}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})};var q=class n{constructor(t){this._elementRef=t}clickOutside=z();onClick(t){let e=t.target;if(!e)return;this._elementRef.nativeElement.contains(e)||this.clickOutside.emit(t)}static \u0275fac=function(e){return new(e||n)(O(re))};static \u0275dir=le({type:n,selectors:[["","clickOutside",""]],hostBindings:function(e,o){e&1&&u("click",function(m){return o.onClick(m)},!1,se)},outputs:{clickOutside:"clickOutside"},standalone:!1})};var He=n=>({show:n});function Le(n,t){if(n&1&&(i(0,"span",5),p(1),r()),n&2){let e=s(2);l(),C(" (",e.user.originalUserName,") ")}}function qe(n,t){if(n&1){let e=v();i(0,"button",7),u("click",function(){w(e);let a=s(2);return a.stopImpersonation.emit(),f(a.showMenu=!1)}),M(),i(1,"svg",8),d(2,"path",11),r(),k(),i(3,"span",10),p(4,"Stop Impersonation"),r()(),d(5,"div",12)}}function Ue(n,t){if(n&1){let e=v();i(0,"button",1),u("click",function(){w(e);let a=s();return f(a.showMenu=!a.showMenu)})("clickOutside",function(){w(e);let a=s();return f(a.showMenu=!1)}),M(),i(1,"svg",2),d(2,"path",3),r(),k(),i(3,"span",4),p(4),g(5,Le,2,1,"span",5),r()(),i(6,"div",6),g(7,qe,6,0),i(8,"button",7),u("click",function(){w(e);let a=s();return f(a.logout())}),M(),i(9,"svg",8),d(10,"path",9),r(),k(),i(11,"span",10),p(12,"Logout"),r()()()}if(n&2){let e=s();I("aria-expanded",e.showMenu),l(4),C(" ",e.user.userName," "),l(),_(e.user.originalUserName?5:-1),l(),c("ngClass",L(5,He,e.showMenu)),l(),_(e.user.originalUserName?7:-1)}}function Ne(n,t){if(n&1){let e=v();i(0,"button",13),u("click",function(){w(e);let a=s();return f(a.login())}),M(),i(1,"svg",2),d(2,"path",3),r(),k(),i(3,"span",10),p(4,"Login"),r()()}}var G=class n{constructor(t){this.loginService=t}user;stopImpersonation=new ae;showMenu=!1;ngOnInit(){}logout(){this.loginService.logout()}login(){this.loginService.login()}static \u0275fac=function(e){return new(e||n)(O(y))};static \u0275cmp=x({type:n,selectors:[["username-dropdown"]],inputs:{user:"user"},outputs:{stopImpersonation:"stopImpersonation"},standalone:!1,decls:2,vars:1,consts:[["aria-label","Click to login","id","username-dropdown",1,"iowa-user-button"],["aria-label","Click to show menu","id","username-dropdown",1,"iowa-user-button","has-dropdown",3,"click","clickOutside"],["aria-hidden","true","role","icon","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",2,"height","0.8rem","width","1rem","vertical-align","baseline"],["fill","currentColor","d","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"],[1,"iowa-user-name","ml-1"],[1,"iowa-original-username"],["aria-labelledby","username-dropdown","role","menuitem",1,"iowa-username-dropdown","iowa-user-dropdown-menu-right",3,"ngClass"],["type","button",1,"iowa-username-dropdown-button",3,"click"],["aria-hidden","true","role","icon","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",2,"height","1rem","width","1rem"],["fill","currentColor","d","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"],[1,"ml-1"],["fill","currentColor","d","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z"],[1,"dropdown-divider"],["aria-label","Click to login","id","username-dropdown",1,"iowa-user-button",3,"click"]],template:function(e,o){e&1&&g(0,Ue,13,7)(1,Ne,5,0,"button",0),e&2&&_(o.user!=null&&o.user.userName?0:1)},dependencies:[j,q],styles:['[_nghost-%COMP%]{display:flex;font-family:sans-serif;position:relative}.iowa-user-button[_ngcontent-%COMP%]{color:#ffcd00;cursor:pointer;padding:0!important;font-weight:400;white-space:nowrap;background-color:transparent;border:none;font-size:1rem;line-height:1.5}@media (min-width: 855px){.iowa-user-button[_ngcontent-%COMP%]{color:#151515}}.iowa-user-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:bottom}.iowa-original-username[_ngcontent-%COMP%]{color:#ff4759;font-weight:700}@media (min-width: 855px){.iowa-original-username[_ngcontent-%COMP%]{color:#ab0000}}.iowa-user-dropdown-menu-right[_ngcontent-%COMP%]{position:absolute;float:none;right:0;top:100%;z-index:1000;display:none;margin:.125rem 0 0;font-size:1rem;line-height:1.5;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;box-shadow:0 4px 8px #0003}.iowa-user-button.has-dropdown[_ngcontent-%COMP%]:after{margin:0 0 2px 4px;display:inline-block;content:"";border-style:solid;border-width:0 2px 2px 0;padding:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.iowa-user-dropdown-menu-right.show[_ngcontent-%COMP%]{display:block!important}.iowa-username-dropdown[_ngcontent-%COMP%]{min-width:7rem;padding:.5rem 1rem}.iowa-username-dropdown-button[_ngcontent-%COMP%]{color:#0064d0;background-color:transparent;white-space:nowrap;display:flex;align-items:center;padding:0;margin:0;border:none;cursor:pointer;font-size:1rem;line-height:1.5}.iowa-username-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.ml-1[_ngcontent-%COMP%]{margin-left:.25rem}']})};var Te=n=>({show:n}),Ve=n=>({exact:n});function ze(n,t){if(n&1&&(i(0,"div",18),p(1),r()),n&2){let e=s();l(),H(e.warningMessage)}}function Fe(n,t){if(n&1&&(i(0,"a",26),p(1),r()),n&2){let e=s(2);c("href",e.bannerLinks.link1.url,F)("target",e.bannerLinks.link1.target),l(),C(" ",e.bannerLinks.link1.text," ")}}function Re(n,t){if(n&1&&(i(0,"a",26),p(1),r()),n&2){let e=s(2);c("href",e.bannerLinks.link2.url,F)("target",e.bannerLinks.link1.target),l(),C(" ",e.bannerLinks.link2.text," ")}}function Ae(n,t){if(n&1&&(i(0,"div",19),g(1,Fe,2,3,"a",26)(2,Re,2,3,"a",26),r()),n&2){let e=s();l(),_(e.bannerLinks.link1?1:-1),l(),_(e.bannerLinks.link2?2:-1)}}function $e(n,t){if(n&1){let e=v();i(0,"a",29),u("click",function(){w(e);let a=s(2);return f(a.showNavBar=!1)}),p(1),r()}if(n&2){let e=s().$implicit;c("routerLink",e.route),l(),C(" ",e.text," ")}}function je(n,t){if(n&1){let e=v();i(0,"a",33),u("click",function(){w(e);let a=s(2).$index,m=s();return f(m.toggleMenuCollapse(a))})("clickOutside",function(){w(e);let a=s(2).$index,m=s();return f(m.collapseMenu(a))}),p(1),d(2,"span",34),r()}if(n&2){let e=s(2),o=e.$implicit,a=e.$index,m=s();c("routerLink",o.route),I("id","menuDropdown_"+a)("aria-expanded",m.showMenuDropdown[a]),l(),C(" ",o.text," "),l(),c("ngClass",m.showMenuDropdown[a]?"up":"down")}}function Be(n,t){if(n&1){let e=v();i(0,"a",35),u("click",function(){w(e);let a=s(2).$index,m=s();return f(m.toggleMenuCollapse(a))})("clickOutside",function(){w(e);let a=s(2).$index,m=s();return f(m.collapseMenu(a))}),p(1),d(2,"span",34),r()}if(n&2){let e=s(2),o=e.$implicit,a=e.$index,m=s();I("id","menuDropdown_"+a)("aria-expanded",m.showMenuDropdown[a]),l(),C(" ",o.text," "),l(),c("ngClass",m.showMenuDropdown[a]?"up":"down")}}function We(n,t){if(n&1){let e=v();i(0,"a",37),u("click",function(){w(e);let a=s(3).$index,m=s();return m.showMenuDropdown[a]=!1,f(m.showNavBar=!1)}),p(1),r()}if(n&2){let e=s().$implicit;c("routerLink",e.route),l(),C(" ",e.text," ")}}function Ge(n,t){if(n&1&&g(0,We,2,2,"a",36),n&2){let e=t.$implicit;_(e.route?0:-1)}}function Xe(n,t){if(n&1&&(i(0,"div",28),g(1,je,3,5,"a",30)(2,Be,3,4,"a",31),i(3,"div",32),A(4,Ge,1,1,null,null,R),r()()),n&2){let e=s(),o=e.$implicit,a=e.$index,m=s();l(),_(o.route?1:2),l(2),c("ngClass",L(3,Te,m.showMenuDropdown[a])),I("aria-labelledby","menuDropdown_"+a),l(),$(o.subMenus)}}function Ye(n,t){if(n&1&&(i(0,"li",24),g(1,$e,2,2,"a",27)(2,Xe,6,5,"div",28),r()),n&2){let e=t.$implicit;c("routerLinkActiveOptions",L(3,Ve,!e.route)),l(),c("ngIf",!e.subMenus),l(),_(e.subMenus?2:-1)}}function Qe(n,t){n&1&&d(0,"span",38)}function Ze(n,t){if(n&1&&(i(0,"a",26),p(1),r(),g(2,Qe,1,0,"span",38)),n&2){let e=t.$implicit,o=t.$index,a=t.$count;c("href",e.url,F)("target",e.target),l(),H(e.text),l(),_(o!==a-1?2:-1)}}var X=class n{constructor(t){this.loginService=t}siteName="Awesome Site Name";externalLinks;bannerLinks;internalRoutes;user;stopImpersonation=z();showWarning=!1;warningMessage="WARNING: TEST SYSTEM";showNavBar=!1;showMenuDropdown=[];ngOnInit(){this.showMenuDropdown=this.internalRoutes?.map(t=>!1)??[]}toggleMenuCollapse(t){this.showMenuDropdown[t]=!this.showMenuDropdown[t],this.showMenuDropdown.forEach((e,o)=>{e&&o!==t&&(this.showMenuDropdown[o]=!1)})}collapseMenu(t){this.showMenuDropdown[t]=!1}logout(){this.loginService.logout()}login(){this.loginService.login()}static \u0275fac=function(e){return new(e||n)(O(y))};static \u0275cmp=x({type:n,selectors:[["uiowa-header"]],inputs:{siteName:[0,"applicationName","siteName"],externalLinks:"externalLinks",bannerLinks:"bannerLinks",internalRoutes:"internalRoutes",user:"user",showWarning:"showWarning",warningMessage:"warningMessage"},outputs:{stopImpersonation:"stopImpersonation"},standalone:!1,decls:32,vars:8,consts:[["role","banner",1,"iowa-bar","iowa-bar--narrow"],[1,"iowa-bar__container"],[1,"logo","logo--tab"],["target","_blank","rel","noopener","href","https://uiowa.edu"],["xmlns","http://www.w3.org/2000/svg","aria-labelledby","logo-header","role","img","viewBox","0 0 311.6 90.2",1,"logo-icon"],["d","M40 18.8h-7.3v52.4H40v19H0v-19h7.3V18.8H0V0h40V18.8z",1,"st0"],["d","M93.8 90.2h-29c-10.5 0-17.4-6.9-17.4-18.2V18.2C47.4 7 54.4 0 64.8 0h29c10.5 0 17.4 7 17.4 18.2V72C111.2 83.2 104.2 90.2 93.8 90.2zM85.6 71.2V18.8H73v52.4H85.6z",1,"st0"],["d","M122.6 18.8h-6.4V0h38v18.9H147l6.5 43.4L167 0h19.2l14.4 62.3 5.2-43.4h-6.6V0h37.5v18.9h-6.2l-11.3 71.4h-30.6l-11.8-53.2 -12.1 53.1h-29.4L122.6 18.8z",1,"st0"],["d","M230.1 71.2h6.9L250.7 0h41l13.5 71.2h6.4v19H281l-2.9-22h-15.2l-2.7 22h-30L230.1 71.2 230.1 71.2zM276.5 51.7l-5.8-36.4 -6 36.4H276.5z",1,"st0"],["id","logo-header"],[1,"site-name-bar"],["type","button","aria-controls","navbar-primary",1,"iowa-navbar-toggler",3,"click"],["role","img","aria-labelledby","navbar-toggler","focusable","false","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["fill","currentColor","d","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],["id","navbar-toggler"],[1,"site-name"],["routerLink",""],[1,"iowa-username-bar"],[1,"test-warning"],[1,"iowa-banner-links"],[3,"stopImpersonation","user"],["id","navbar-primary","role","navigation",1,"iowa-nav-bar",3,"ngClass"],[1,"iowa-main-menu"],[1,"iowa-internal-routes"],["routerLinkActive","is-active",1,"menu-item",3,"routerLinkActiveOptions"],[1,"iowa-external-links"],[3,"href","target"],[3,"routerLink","click",4,"ngIf"],[1,"iowa-submenu-dropdown"],[3,"click","routerLink"],[3,"routerLink"],["href","javascript:void(0)"],[1,"iowa-submenu-dropdown-content",3,"ngClass"],[3,"click","clickOutside","routerLink"],["aria-hidden","true",1,"iowa-dropdown-item-arrow",3,"ngClass"],["href","javascript:void(0)",3,"click","clickOutside"],[1,"iowa-submenu-dropdown-item",3,"routerLink"],[1,"iowa-submenu-dropdown-item",3,"click","routerLink"],[1,"iowa-external-link-spacer"]],template:function(e,o){e&1&&(i(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),M(),i(4,"svg",4),d(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8),i(9,"title",9),p(10,"University of Iowa"),r()()()(),k(),i(11,"div",10)(12,"button",11),u("click",function(){return o.showNavBar=!o.showNavBar}),M(),i(13,"svg",12),d(14,"path",13),i(15,"title",14),p(16,"Toggle navigation"),r()()(),k(),i(17,"h1",15)(18,"a",16),p(19),r()()(),i(20,"div",17),g(21,ze,2,1,"div",18)(22,Ae,3,2,"div",19),i(23,"username-dropdown",20),u("stopImpersonation",function(){return o.stopImpersonation.emit()}),r()()()(),i(24,"nav",21)(25,"div",22)(26,"ul",23),A(27,Ye,3,5,"li",24,R),r(),i(29,"div",25),A(30,Ze,3,4,null,null,R),r()()()),e&2&&(l(12),I("aria-expanded",o.showNavBar),l(7),H(o.siteName),l(2),_(o.showWarning?21:-1),l(),_(o.bannerLinks?22:-1),l(),c("user",o.user),l(),c("ngClass",L(6,Te,o.showNavBar)),l(3),$(o.internalRoutes),l(3),$(o.externalLinks))},dependencies:[j,B,be,ve,G,q],styles:["[_nghost-%COMP%]{z-index:1000}.iowa-username-bar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-grow:2;padding-right:1.25rem;order:2}@media (min-width: 855px){.iowa-username-bar[_ngcontent-%COMP%]{padding-right:15px;order:3}}.test-warning[_ngcontent-%COMP%]{display:none;color:#ffcd00;background-color:#ad0000;white-space:nowrap;font-weight:700;font-family:sans-serif;margin:auto;padding:.5rem 1rem}@media (min-width: 855px){.test-warning[_ngcontent-%COMP%]{display:flex}}",".logo--tab[_ngcontent-%COMP%]{display:block;box-sizing:border-box;height:70px;width:109px;padding:25px 1.25rem;background:#151515;margin-right:10px}@media (min-width: 84.375em){.logo--tab[_ngcontent-%COMP%]{width:188px;height:90px;margin-left:-12px;margin-bottom:-6px;padding:27px 20px 20px}}@media (min-width: 855px){.iowa-bar--narrow[_ngcontent-%COMP%]   .logo--tab[_ngcontent-%COMP%]{height:56px;width:119px;padding:15px}}.logo-icon[_ngcontent-%COMP%]{fill:#ffcd00;height:20px}.logo-icon[_ngcontent-%COMP%]:hover, .logo-icon[_ngcontent-%COMP%]:focus{opacity:.7}@media (min-width: 84.375em){.logo-icon[_ngcontent-%COMP%]{height:43px}}@media (min-width: 855px){.logo-icon[_ngcontent-%COMP%]{height:26px}}",".site-name-bar[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:left;line-height:1;font-family:Roboto,sans-serif;width:100%;padding:1.25rem;background:#ffcd00;order:3}.site-name[_ngcontent-%COMP%]{margin:0;font-size:1.3rem;font-weight:300;white-space:nowrap}.site-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#151515;text-decoration:none}@media (min-width: 855px){.site-name-bar[_ngcontent-%COMP%]{width:auto;background:transparent;padding:0;order:2}}.iowa-navbar-toggler[_ngcontent-%COMP%]{cursor:pointer;padding:0;margin-right:1rem;border:none;background:none}.iowa-navbar-toggler[_ngcontent-%COMP%]:focus, .iowa-navbar-toggler[_ngcontent-%COMP%]:hover{outline:2px solid #adadad;outline-offset:2px}@media (min-width: 855px){.iowa-navbar-toggler[_ngcontent-%COMP%]{display:none}}.iowa-navbar-toggler[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:1.1rem;width:1.3rem;vertical-align:baseline}",".iowa-bar[_ngcontent-%COMP%]{position:relative;z-index:1000;display:block;min-height:auto;background:#151515}@media (min-width: 855px){.iowa-bar[_ngcontent-%COMP%]{background:#ffcd00}}.iowa-bar__container[_ngcontent-%COMP%]{max-width:81.875em;display:flex;flex-wrap:wrap;margin:0 auto}@media (min-width: 855px){.iowa-bar__container[_ngcontent-%COMP%]{flex-wrap:nowrap}.iowa-bar--narrow[_ngcontent-%COMP%]{min-height:50px;position:relative}}",".iowa-nav-bar[_ngcontent-%COMP%]{display:none;background-color:#f3f3f3;color:#151515;font-family:Roboto,sans-serif}.iowa-nav-bar.show[_ngcontent-%COMP%]{display:flex}.iowa-main-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 0 0 1.25rem;width:100%;background-color:#f3f3f3;z-index:900}@media (max-width: 855px){.iowa-main-menu[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;box-shadow:0 .125rem .25rem #0003!important}}@media (min-width: 855px){.iowa-nav-bar[_ngcontent-%COMP%]{display:flex;align-items:center;box-shadow:0 .125rem .25rem #0003!important}.iowa-main-menu[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;max-width:81.875em;padding:0;margin:0 auto}}",".iowa-submenu-dropdown[_ngcontent-%COMP%]{position:relative}.iowa-submenu-dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;box-shadow:0 4px 8px #0006;background-color:#f9f9f9;z-index:900}.iowa-submenu-dropdown-content.show[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;min-width:100%}.iowa-submenu-dropdown-item[_ngcontent-%COMP%]{font-size:1rem!important;padding:.75rem 1rem!important}.iowa-dropdown-item-arrow[_ngcontent-%COMP%]{display:inline-block;border-style:solid;border-width:0 2px 2px 0;padding:3px}.iowa-dropdown-item-arrow.down[_ngcontent-%COMP%]{transform-origin:right;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.iowa-dropdown-item-arrow.up[_ngcontent-%COMP%]{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}",'.iowa-internal-routes[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0;margin:0}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;list-style-type:none;border-bottom:1px solid rgba(0,0,0,.125)}.iowa-internal-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:inline-block;white-space:nowrap;transition:background .8s ease-out;text-decoration:none;color:#151515;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;padding:.75rem}.iowa-internal-routes[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]{font-weight:700}@media (max-width: 855px){.iowa-internal-routes[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]{background-color:#fff}}.iowa-internal-routes[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]:after{background:#ffcd00;content:"";position:absolute;left:0;bottom:0;width:100%;height:6px}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}@media (min-width: 855px){.iowa-internal-routes[_ngcontent-%COMP%]{flex-direction:row}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:none}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;width:auto;font-size:1.125rem;font-weight:500;padding:1rem}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:0;width:100%;height:3px;background-color:#ffcd00;transform-origin:center;transform:translate(-50%) scaleX(0);transition:transform .3s ease-in-out}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after{transform:translate(-50%) scaleX(1)}.iowa-internal-routes[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]:after{background:#ffcd00;content:"";position:absolute;left:50%;bottom:0;width:100%;height:6px;transform-origin:center;transition:transform .3s ease-in-out;transform:translate(-50%) scaleX(1)}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{position:absolute;right:0;top:25%;height:50%;width:1px;content:"";background:#ffcd00}.iowa-internal-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type:before{width:0}}@media (min-width: 84.375em){.iowa-internal-routes[_ngcontent-%COMP%]{margin-left:-12px}}','.iowa-external-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-end;padding:.5rem 0;margin-left:auto}.iowa-external-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#656565;font-size:.875rem;padding:.25rem 0;margin:0 .5rem;white-space:nowrap;text-decoration:none;position:relative}.iowa-external-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:0;width:100%;height:2px;background-color:#ffcd00;transform-origin:center;transform:translate(-50%) scaleX(0);transition:transform .3s ease-in-out}.iowa-external-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .iowa-external-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after{transform:translate(-50%) scaleX(1)}.iowa-external-link-spacer[_ngcontent-%COMP%]{border-right:#656565 1px solid}',".iowa-banner-links[_ngcontent-%COMP%]{display:none}.iowa-banner-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#494949;font-size:.9rem;margin:0 .5rem;white-space:nowrap;text-decoration:none}.iowa-banner-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (min-width: 84.375em){.iowa-banner-links[_ngcontent-%COMP%]{display:flex;padding:0 .5rem}}"]})};var T=class{constructor(t,e,o="_blank"){this.text=t;this.url=e;this.target=o}};var h=class{constructor(t,e,o){this.text=t;this.route=e;this.subMenus=o}};var Y=class{constructor(t,e){this.link1=t;this.link2=e}};var E=class n extends y{a="hello";constructor(){super()}login(){console.log("HawkID login")}logout(){console.log("HawkID logout")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=V({token:n,factory:n.\u0275fac})};var Q=class n{constructor(t){if(t)throw new Error("Core Module can only be imported to AppModule.")}static \u0275fac=function(e){return new(e||n)(ie(n,12))};static \u0275mod=S({type:n});static \u0275inj=P({providers:[{provide:y,useClass:E},E],imports:[W,N,ke,N]})};function en(n,t){if(n&1&&d(0,"div",3),n&2){let e=s();c("innerHTML",e.html,oe)}}function nn(n,t){if(n&1&&d(0,"div",3),n&2){let e=s();c("innerHTML",e.ts,oe)}}var Z=class n{constructor(t){this.sanitizer=t}html="";ts="";showHtml=!1;showTs=!1;ngOnInit(){this.html=this.sanitizer.bypassSecurityTrustHtml(`
  <pre class='bg'><span class='angle'>&lt;</span><span class='element'>uiowa-header</span>
    [externalLinks]<span class='eq'>=</span><span class='qt'>"externalLinks"</span>
    [applicationName]<span class='eq'>=</span><span class='qt'>"applicationName"</span>
    [internalRoutes]<span class='eq'>=</span><span class='qt'>"internalRoutes"</span>
    [user]<span class='eq'>=</span><span class='qt'>"headerUser"</span>
    (stopImpersonation)<span class='eq'>=</span><span class='qt'>"stopImpersonation()"</span>
    [showTestWarning]<span class='eq'>=</span><span class='qt'>"true"</span>
  <span class='angle'>/></span>
  </pre>`),this.ts=this.sanitizer.bypassSecurityTrustHtml(`
<pre class='bg'><span class='kw'>import</span> <span class='brace'>{</span> Component<span class='eq'>,</span> OnInit <span class='brace'>}</span> from <span class=eq'>'</span><span class='qt'>@angular/core</span><span class=eq'>'</span><span class='brace'>;</span>
<span class='kw'>import</span> <span class='brace'>{</span> InternalRoute<span class='eq'>,</span> ExternalLink<span class='eq'>,</span> HeaderUser <span class='brace'>}</span> from <span class=eq'>'</span><span class='qt'>@uiowa/uiowa-header</span><span class=eq'>'</span><span class='brace'>;</span>
<br><span class='kw'>export</span> <span class='kw'>class</span> AppComponent <span class='kw'>implements</span> OnInit <span class='brace'>{</span>
  externalLinks <span class='eq'>=</span> <span class='eq'>[</span><span class='kw'>new</span> ExternalLink<span class='eq'>(</span><span class=eq'>'</span><span class='qt'>Self Service</span><span class=eq'>'</span><span class='eq'>,</span> <span class=eq'>'</span><span class='qt'>https://hris.uiowa.edu</span><span class=eq'>'</span><span class='eq'>)</span><span class='eq'>]</span><span class='brace'>;</span>
  applicationName <span class='eq'>=</span> <span class=eq'>'</span><span class='qt'>Awesome Application Name</span><span class=eq'>'</span><span class='brace'>;</span>
  internalRoutes <span class='eq'>=</span> <span class='eq'>[</span>
    <span class='kw'>new</span> InternalRoute<span class='eq'>(</span><span class=eq'>'</span><span class='qt'>Home</span><span class=eq'>'</span><span class='eq'>,</span> <span class=eq'>'</span><span class=eq'>'</span><span class='eq'>)</span><span class='eq'>,</span>
    <span class='kw'>new</span> InternalRoute<span class='eq'>(</span><span class=eq'>'</span><span class='qt'>Page with Tabs</span><span class=eq'>'</span><span class='eq'>,</span> <span class=eq'>'</span><span class='qt'>page-with-tabs</span><span class=eq'>'</span><span class='eq'>)</span>
  <span class='eq'>]</span><span class='brace'>;</span>
  headerUser <span class='eq'>=</span> <span class='brace'>{</span>
    userName<span class='brace'>:</span> <span class=eq'>'</span><span class='qt'>abc</span><span class=eq'>'</span><span class='eq'>,</span>
    originalUserName<span class='brace'>:</span> <span class=eq'>'</span><span class='qt'>changhxu</span><span class=eq'>'</span>
  <span class='brace'>}</span> as HeaderUser<span class='brace'>;</span>
  ngOnInit<span class='eq'>(</span><span class='eq'>)</span> <span class='brace'>{</span><span class='brace'>}</span>
  stopImpersonation<span class='eq'>(</span><span class='eq'>)</span> <span class='brace'>{</span>
  <span class='brace'>}</span>
<span class='brace'>}</span>
</pre>`)}static \u0275fac=function(e){return new(e||n)(O(he))};static \u0275cmp=x({type:n,selectors:[["app-home"]],standalone:!1,decls:9,vars:2,consts:[[1,"container","d-flex","flex-column"],[1,"h3","mt-2"],["type","button",1,"btn","btn-link","me-auto",3,"click"],[3,"innerHTML"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"p",1),p(2,"Example Usage"),r(),i(3,"button",2),u("click",function(){return o.showHtml=!o.showHtml}),p(4," app.component.html "),r(),g(5,en,1,1,"div",3),i(6,"button",2),u("click",function(){return o.showTs=!o.showTs}),p(7," app.component.ts "),r(),g(8,nn,1,1,"div",3),r()),e&2&&(l(5),_(o.showHtml?5:-1),l(3),_(o.showTs?8:-1))},styles:[".bg{color:#d1d1d1;background:#000}  .angle{color:#ff8906}  .element{color:#f6c1d0}  .attr{color:#f6c1d0}  .eq{color:#d2cd86}  .qt{color:#00c4c4}  .kw{color:#e66170;font-weight:700}  .brace{color:#b060b0}"]})};var tn=[{path:"",pathMatch:"full",component:Z},{path:"page-with-tabs",loadChildren:()=>import("./chunk-TLSO444B.js").then(n=>n.PageWithTabsModule)},{path:"form-wizards",loadChildren:()=>import("./chunk-PJP3GURY.js").then(n=>n.FormWizardsModule)},{path:"admin1",loadChildren:()=>import("./chunk-KJ5FDNSF.js").then(n=>n.DropdownMenusModule)},{path:"admin2",loadChildren:()=>import("./chunk-N76GHR77.js").then(n=>n.SideMenusModule)},{path:"access-denied",component:Oe},{path:"**",redirectTo:""}],J=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=P({imports:[U.forRoot(tn,{scrollPositionRestoration:"enabled"}),U]})};var K=class n{year=0;constructor(){}ngOnInit(){let t=new Date;this.year=t.getFullYear()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-footer"]],standalone:!1,decls:15,vars:1,consts:[[1,"copyright","text-center","py-1","w-100"],[1,"d-flex","flex-wrap","justify-content-center"],[1,"d-inline-flex","me-2"],[1,"me-2"],["href","https://uiowa.edu","title","University of Iowa","target","_blank","rel","noopener"],[1,"d-none","d-sm-inline-flex","mx-5"],[1,"d-inline-flex","align-items-center"],["aria-hidden","true","role","icon","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",2,"height","0.8rem","width","1rem","vertical-align","text-bottom"],["fill","currentColor","d","M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"],[1,"mx-1"],["href","mailto:changhui-xu@uiowa.edu?subject=Questions%20about%20uiowa-header%20"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),p(4),r(),i(5,"a",4),p(6,"University of Iowa"),r()(),d(7,"div",5),i(8,"div",6),M(),i(9,"svg",7),d(10,"path",8),r(),k(),i(11,"span",9),p(12," E-mail any questions to"),r(),i(13,"a",10),p(14,"Business Services IT"),r()()()()),e&2&&(l(4),C("Copyright \xA9 ",o.year,""))},styles:[".copyright[_ngcontent-%COMP%]{background-color:#000;font-size:.8rem;color:#ffcd00}.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffcd00;text-decoration:underline}"]})};function an(n,t){}function rn(n,t){if(n&1&&g(0,an,0,0,"ng-template",4),n&2){let e=s().$implicit;c("ngTemplateOutlet",e.contentTemplate)}}function sn(n,t){if(n&1&&p(0),n&2){let e=s().$implicit;H(e.content)}}function ln(n,t){if(n&1){let e=v();i(0,"ngb-toast",2),u("mouseenter",function(){w(e);let a=s();return f(a.autoHide=!1)})("mouseleave",function(){w(e);let a=s();return f(a.autoHide=!0)})("hidden",function(){let a=w(e).$implicit,m=s();return f(m.toastService.remove(a))}),g(1,rn,1,1,"ng-template",3)(2,sn,1,1,"ng-template",null,0,me),r()}if(n&2){let e=t.$implicit,o=ce(3),a=s();pe(e.className),c("header",e.title||"")("delay",e.delay||5e3)("autohide",a.autoHide),l(),c("ngIf",e.contentTemplate)("ngIfElse",o)}}var ee=class n{constructor(t){this.toastService=t}autoHide=!0;static \u0275fac=function(e){return new(e||n)(O(ye))};static \u0275cmp=x({type:n,selectors:[["app-toasts"]],hostAttrs:[1,"toast-container","position-fixed","top-0","end-0","p-3",2,"z-index","1200"],standalone:!1,decls:1,vars:1,consts:[["text",""],[3,"class","header","delay","autohide","mouseenter","mouseleave","hidden",4,"ngFor","ngForOf"],[3,"mouseenter","mouseleave","hidden","header","delay","autohide"],[3,"ngIf","ngIfElse"],[3,"ngTemplateOutlet"]],template:function(e,o){e&1&&g(0,ln,4,7,"ngb-toast",1),e&2&&c("ngForOf",o.toastService.toasts)},dependencies:[de,B,ue,Me],encapsulation:2})};var ne=class n{externalLinks=[new T("Employee Self Service","https://hris.uiowa.edu/portal18"),new T("GitHub Repo","https://github.com/changhuixu/uiowa-header-demo")];applicationName="Awesome Application Name";internalRoutes=[new h("Home",""),new h("Page with Tabs","page-with-tabs"),new h("Form Wizards","form-wizards"),new h("Dropdown Menus","",[new h("Printing Orders","admin1/printingOrders"),new h("Wait List","admin1/waitlist"),new h("DLRS","admin1/dlrs"),new h("",""),new h("My Wait Lists","admin1/my-waitlists"),new h("Pending Reviews","admin1/pendingReviews"),new h("",""),new h("Invalid Link","admin1/firstGrid")]),new h("Side Nav Menus","admin2")];bannerLinks=new Y(new T("Employee Self Service","https://hris.uiowa.edu/portal18"),new T("Test","https://www.uiowa.edu"));headerUser={userName:"abc",originalUserName:"changhxu"};constructor(){}ngOnInit(){}stopImpersonation(){this.headerUser={userName:"changhxu",originalUserName:""},console.log("impersonation stopped")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-root"]],standalone:!1,decls:6,vars:6,consts:[[3,"stopImpersonation","externalLinks","applicationName","internalRoutes","bannerLinks","user","showWarning"],["role","main",1,"w-100","h-100","flex-fill","p-0","overflow-auto"],["role","contentinfo"],["aria-live","polite","aria-atomic","true"]],template:function(e,o){e&1&&(i(0,"uiowa-header",0),u("stopImpersonation",function(){return o.stopImpersonation()}),r(),i(1,"main",1),d(2,"router-outlet"),r(),i(3,"footer",2),d(4,"app-footer"),r(),d(5,"app-toasts",3)),e&2&&c("externalLinks",o.externalLinks)("applicationName",o.applicationName)("internalRoutes",o.internalRoutes)("bannerLinks",o.bannerLinks)("user",o.headerUser)("showWarning",!0)},dependencies:[X,K,ee,Ce],styles:["[_nghost-%COMP%]{height:100%;margin:0;display:flex;flex-direction:column}.nav-item[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{color:#0009!important;padding:.5rem 1rem .2rem;white-space:nowrap}"]})};var te=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n,bootstrap:[ne]});static \u0275inj=P({providers:[ge(we())],imports:[_e,Q,J]})};fe().bootstrapModule(te,{ngZoneEventCoalescing:!0}).catch(n=>console.error(n));

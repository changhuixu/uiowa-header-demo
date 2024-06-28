import{c as S,n as F}from"./chunk-POKYVD7I.js";import{a as C,b as M}from"./chunk-V2BFQ4LO.js";import{B as g,C as y,Na as b,R as o,Y as w,Z as v,_ as s,ba as r,ca as a,da as l,kb as x,mb as u,ta as d,ua as c,w as f}from"./chunk-Y5RF6OJR.js";var O=(()=>{let e=class e{constructor(){this.month="",this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],this.day=0,this.weekday="",this.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.dateString=""}ngOnInit(){this.date||(this.date=new Date),this.month=this.monthNames[this.date.getMonth()],this.day=this.date.getDate(),this.weekday=this.weekdays[this.date.getDay()],this.dateString=this.getFormattedDate(this.date)}getFormattedDate(m){var n=m.getFullYear(),i=(1+m.getMonth()).toString();i=i.length>1?i:"0"+i;var p=m.getDate().toString();return p=p.length>1?p:"0"+p,i+"/"+p+"/"+n}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-calendar-icon"]],inputs:{date:"date"},decls:8,vars:5,consts:[[1,"calendar"],[1,"binds"],[1,"month"],[1,"day"],[1,"weekday"]],template:function(n,i){n&1&&(r(0,"time",0),l(1,"span",1),r(2,"span",2),d(3),a(),r(4,"h1",3),d(5),a(),r(6,"div",4),d(7),a()()),n&2&&(v("datetime",i.date)("title",i.dateString),o(3),c(i.month),o(2),c(i.day),o(2),c(i.weekday))},styles:[".calendar[_ngcontent-%COMP%]{display:block;width:6.5rem;height:7.5rem;background:#fff;text-align:center;font-family:Helvetica,sans-serif;font-weight:700;position:relative}.calendar[_ngcontent-%COMP%]   .binds[_ngcontent-%COMP%]{position:absolute;height:1rem;width:4rem;background:transparent;border:2px solid #999;border-width:0 5px;top:-6px;left:0;right:0;margin:auto}.calendar[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{background:#555;display:block;padding:.75rem 0 .25rem;color:#fff;font-size:.8rem;box-shadow:inset 0 -1px #666}.calendar[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%]{display:block;position:absolute;left:0;right:0;bottom:.1rem;color:#ff5722}.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{display:block;margin:0;padding:.5rem 0 1.25rem;font-size:3rem;box-shadow:0 0 3px #ccc;position:relative}"],changeDetection:0});let t=e;return t})();function H(t,e){if(t&1&&(r(0,"div",12),l(1,"app-calendar-icon",13),a()),t&2){let h=e.$implicit;o(),s("date",h)}}function P(t,e){if(t&1&&(r(0,"div",8)(1,"h2",9),d(2),a(),r(3,"div",10),w(4,H,2,1,"div",11),a()()),t&2){let h=e.$implicit;o(2),c(h.year),o(2),s("ngForOf",h.holidays)}}var k=(()=>{let e=class e{constructor(){this.faHome=F,this.faAngleRight=S,this.univHolidays=[]}ngOnInit(){this.univHolidays=[{year:2019,holidays:[new Date(2019,0,1),new Date(2019,0,21),new Date(2019,4,27),new Date(2019,6,4),new Date(2019,8,2),new Date(2019,10,28),new Date(2019,10,29),new Date(2019,11,24),new Date(2019,11,25)]},{year:2020,holidays:[new Date(2020,0,1),new Date(2020,0,20),new Date(2020,4,25),new Date(2020,6,3),new Date(2020,8,7),new Date(2020,10,26),new Date(2020,10,27),new Date(2020,11,24),new Date(2020,11,25)]},{year:2021,holidays:[new Date(2021,0,1),new Date(2021,0,18),new Date(2021,4,31),new Date(2021,6,5),new Date(2021,8,6),new Date(2021,10,25),new Date(2021,10,26),new Date(2021,11,23),new Date(2021,11,24)]},{year:2022,holidays:[new Date(2022,0,1),new Date(2022,0,17),new Date(2022,4,30),new Date(2022,6,4),new Date(2022,8,5),new Date(2022,10,24),new Date(2022,10,25),new Date(2022,11,26),new Date(2022,11,27)]},{year:2023,holidays:[new Date(2023,0,1),new Date(2023,0,16),new Date(2023,4,29),new Date(2023,6,4)]}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-home"]],decls:10,vars:3,consts:[[1,"d-flex","flex-column"],[1,"my-1","text-primary"],["routerLink","..","title","admin home"],[3,"icon"],["aria-hidden","true",3,"icon"],[1,"mt-0"],[1,"row","m-0"],["class","d-flex mb-4",4,"ngFor","ngForOf"],[1,"d-flex","mb-4"],[1,"text-center","bg-secondary","text-white","p-3","m-0"],[1,"d-flex","flex-wrap","pt-4","bg-light"],["class","mx-2 mb-4",4,"ngFor","ngForOf"],[1,"mx-2","mb-4"],[3,"date"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"header")(2,"h2",1)(3,"a",2),l(4,"fa-icon",3)(5,"fa-icon",4),a(),d(6," University Holidays "),a(),l(7,"hr",5),a(),r(8,"section",6),w(9,P,5,2,"div",7),a()()),n&2&&(o(4),s("icon",i.faHome),o(),s("icon",i.faAngleRight),o(4),s("ngForOf",i.univHolidays))},dependencies:[b,C,x,O]});let t=e;return t})();var N=[{path:"",component:k,pathMatch:"full"}],I=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=f({imports:[u.forChild(N),u]});let t=e;return t})();var K=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=f({imports:[M,I]});let t=e;return t})();export{K as UniversityHolidaysModule};

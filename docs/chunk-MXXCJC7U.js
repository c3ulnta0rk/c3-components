import{b as ee,c as te}from"./chunk-XSVI6WBR.js";import{p as ne}from"./chunk-43MNO3RZ.js";import"./chunk-VMEAVLAH.js";import"./chunk-ZSSD5RUB.js";import"./chunk-B2K2JW2E.js";import{L as K,M as X}from"./chunk-DW6W5TPA.js";import{h as G,i as J,j as W,k as $,n as u}from"./chunk-UROJQV2A.js";import{l as Y}from"./chunk-R4VREYKJ.js";import{$b as y,A as D,Ba as d,Gc as S,Hb as x,Jb as U,Mb as V,R as I,Rb as o,Sb as i,T as _,Tb as h,Ub as P,Vb as Q,Y as O,Ya as H,Z as p,_c as M,ab as l,ac as b,ca as c,g as j,hc as B,ia as q,ib as L,ic as Z,kc as s,ma as F,mc as z,na as N,oc as T,pb as a,qb as f,r as g,sa as C,wb as A,ya as v,za as E}from"./chunk-BJ7BWNUF.js";var oe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["c3-api"]],decls:2,vars:0,template:function(t,r){t&1&&(o(0,"p"),s(1,"api works!"),i())},encapsulation:2})}}return e})();var w=(()=>{class e{constructor(){this.selectedElement=null,this.currentRoute=d(""),this.isHeadless=d(!1),this._router=c(W),this._ar=c(G),this.currentRoute.set(this._router.routerState.snapshot.url),this.currentRouteChange=this._router.events.pipe(D(n=>n.urlAfterRedirects!==void 0&&n.state===void 0),g(n=>(this.currentRoute.set(n.urlAfterRedirects),n.urlAfterRedirects))),this.isHeadless.set(this._ar.snapshot.queryParams.headless==="true")}setSelectedItem(n){this.selectedElement&&this.selectedElement.classList.remove("active-item"),this.selectedElement=n,this.selectedElement.classList.add("active-item")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var pe=["*"];function de(e,k){e&1&&(o(0,"div",0)(1,"div",2)(2,"ul"),b(3),i()()())}var ie=(()=>{class e{constructor(){this._c3Menu=c(w)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["c3-menu"]],standalone:!1,ngContentSelectors:pe,decls:3,vars:3,consts:[["id","app-menu"],[1,"layout-main"],[1,"ui-scroll"]],template:function(t,r){t&1&&(y(),A(0,de,4,0,"div",0),o(1,"div",1),h(2,"router-outlet"),i()),t&2&&(V(r._c3Menu.isHeadless()?-1:0),l(),U("headless",r._c3Menu.isHeadless()))},dependencies:[J],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();function R(e){e||(q(R),e=c(C));let k=new j(n=>e.onDestroy(n.next.bind(n)));return n=>n.pipe(_(k))}var he=["button"],ve=["*"],re=(()=>{class e{constructor(){this.route=v.required(),this.itemTitle=v.required(),this.check=v(null),this.isExternal=v(!1),this.element=L("button",{read:E}),this._menu=c(w),this.destroyRef=c(C),this.currentRouteChangeSubscription=d(null),S(()=>{if(!this.currentRouteChangeSubscription()&&this.element()){let n=this._menu.currentRouteChange.pipe(I(this._menu.currentRoute()),g(t=>t),R(this.destroyRef)).subscribe(t=>{new RegExp(this.check()||this.route()).exec(t)&&this.element()&&this._menu.setSelectedItem(this.element().nativeElement)});this.currentRouteChangeSubscription.set(n)}})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["c3-nav-item"]],viewQuery:function(t,r){t&1&&B(r.element,he,5,E),t&2&&Z()},inputs:{route:[1,"route"],itemTitle:[1,"itemTitle"],check:[1,"check"],isExternal:[1,"isExternal"]},standalone:!1,ngContentSelectors:ve,decls:6,vars:3,consts:[["button",""],["matRipple","","matRippleColor","#ffffff66",3,"routerLink","href"]],template:function(t,r){t&1&&(y(),o(0,"li",null,0)(2,"a",1),b(3),o(4,"span"),s(5),i()()()),t&2&&(l(2),x("routerLink",r.isExternal()?null:r.route())("href",r.isExternal()?r.route():null,H),l(3),z(" ",r.itemTitle()," "))},dependencies:[$,K],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var se=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[M,u,X]})}}return e})();var ce=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["c3-menu-example"]],decls:10,vars:0,consts:[["route","/docs/menu/examples","itemTitle","Accueil"],["width","20","height","20","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"icon"],["d","M3 12L12 3L21 12H16V21H8V12H3Z","fill","currentColor"],["route","/docs/menu/examples/TEST","check","/docs/menu/examples/TEST","itemTitle","TEST"],["title","Test",1,"icon"],["route","/docs/menu/examples/test-2","check","/docs/menu/examples/test-2","itemTitle","T2"],["title","T2",1,"icon"]],template:function(t,r){t&1&&(o(0,"c3-menu")(1,"c3-nav-item",0),F(),o(2,"svg",1),h(3,"path",2),i()(),N(),o(4,"c3-nav-item",3)(5,"span",4),s(6,"TE"),i()(),o(7,"c3-nav-item",5)(8,"span",6),s(9,"T2"),i()()())},dependencies:[se,ie,re,u],styles:["[_nghost-%COMP%]{display:block;position:relative;min-height:600px;width:100%;overflow:hidden}"]})}}return e})();var ae=()=>({}),le=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["c3-examples"]],decls:15,vars:4,consts:[[1,"my-4"],["title",""],["example",""],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(t,r){t&1&&(o(0,"p",0),s(1,` This is a menu example.
`),i(),o(2,"example-viewer")(3,"h4",1),s(4,"Menu Example"),i(),P(5,2),h(6,"c3-menu-example"),Q(),o(7,"c3-example-viewer-tab",3)(8,"div")(9,"textarea",4),s(10,`<c3-menu>
  <c3-nav-item route="/docs/menu/examples" itemTitle="Accueil">
    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L12 3L21 12H16V21H8V12H3Z" fill="currentColor"/>
  </svg>
  </c3-nav-item>

  <c3-nav-item
    route="/docs/menu/examples/TEST"
    check="/docs/menu/examples/TEST"
    itemTitle="TEST"
  >
    <span class="icon" title="Test">TE</span>
  </c3-nav-item>

  <c3-nav-item
    route="/docs/menu/examples/test-2"
    check="/docs/menu/examples/test-2"
    itemTitle="T2"
  >
    <span class="icon" title="T2">T2</span>
  </c3-nav-item>
</c3-menu>
      `),i()()(),o(11,"c3-example-viewer-tab",5)(12,"div")(13,"textarea",6),s(14,`import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { C3MenuModule } from 'c3-components';

@Component({
  selector: 'c3-menu-example',
  imports: [C3MenuModule, RouterModule],
  templateUrl: './menu-example.component.html',
  styleUrl: './menu-example.component.scss',
})
export class MenuExampleComponent { }

      `),i()()()()),t&2&&(l(9),x("options",T(2,ae)),l(4),x("options",T(3,ae)))},dependencies:[ce,te,ee,Y],encapsulation:2})}}return e})();var ge=[{path:"",component:ne,children:[{path:"api",component:oe},{path:"**",component:le}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],me=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[u.forChild(ge),u]})}}return e})();var gt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[M,me]})}}return e})();export{gt as MenuModule};

import{b as ee,c as te}from"./chunk-GGJRU6BV.js";import{p as ne}from"./chunk-TUREW2WE.js";import"./chunk-N47YJUST.js";import"./chunk-ZSSD5RUB.js";import"./chunk-CG7WHYDA.js";import{K,L as X}from"./chunk-L5NJVBGW.js";import{h as G,i as J,j as W,k as $,n as u}from"./chunk-YIUEZFDD.js";import{l as Y}from"./chunk-ZNIQB2HC.js";import{$a as H,Bb as A,D,Ea as v,Fa as E,Kc as S,Mb as g,Ob as U,Rb as V,V as I,Wb as o,X as _,Xb as r,Yb as h,Zb as P,_b as Q,aa as O,ba as p,cd as M,eb as l,ec as y,fc as b,ga as a,i as j,mb as d,mc as B,nb as L,nc as Z,oa as N,pc as s,rc as z,sa as q,t as x,ta as F,tc as T,ub as c,vb as f,ya as C}from"./chunk-ZUPD5GRW.js";var oe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=c({type:e,selectors:[["c3-api"]],decls:2,vars:0,template:function(t,i){t&1&&(o(0,"p"),s(1,"api works!"),r())},encapsulation:2})}}return e})();var w=(()=>{class e{constructor(){this.selectedElement=null,this.currentRoute=d(""),this.isHeadless=d(!1),this._router=a(W),this._ar=a(G),this.currentRoute.set(this._router.routerState.snapshot.url),this.currentRouteChange=this._router.events.pipe(D(n=>n.urlAfterRedirects!==void 0&&n.state===void 0),x(n=>(this.currentRoute.set(n.urlAfterRedirects),n.urlAfterRedirects))),this.isHeadless.set(this._ar.snapshot.queryParams.headless==="true"),console.log(this.isHeadless())}clickItem(n,t){this.selectedElement!==n.target.parentElement.parentElement&&n.target.parentElement.parentElement.tagName==="LI"&&this.setSelectedItem(n.target.parentElement.parentElement)}setSelectedItem(n){this.selectedElement&&this.selectedElement.classList.remove("active-item"),this.selectedElement=n,this.selectedElement.classList.add("active-item")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var pe=["*"];function de(e,k){e&1&&(o(0,"div",0)(1,"div",2)(2,"ul"),b(3),r()()())}var ie=(()=>{class e{constructor(){this._c3Menu=a(w)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=c({type:e,selectors:[["c3-menu"]],standalone:!1,ngContentSelectors:pe,decls:3,vars:3,consts:[["id","app-menu"],[1,"layout-main"],[1,"ui-scroll"]],template:function(t,i){t&1&&(y(),A(0,de,4,0,"div",0),o(1,"div",1),h(2,"router-outlet"),r()),t&2&&(V(i._c3Menu.isHeadless()?-1:0),l(),U("headless",i._c3Menu.isHeadless()))},dependencies:[J],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();function R(e){e||(N(R),e=a(C));let k=new j(n=>e.onDestroy(n.next.bind(n)));return n=>n.pipe(_(k))}var he=["button"],ve=["*"],re=(()=>{class e{constructor(){this.route=v.required(),this.itemTitle=v.required(),this.check=v(null),this.isExternal=v(!1),this.element=L("button",{read:E}),this._menu=a(w),this.destroyRef=a(C),this.currentRouteChangeSubscription=d(null),S(()=>{if(!this.currentRouteChangeSubscription()&&this.element()){let n=this._menu.currentRouteChange.pipe(I(this._menu.currentRoute()),x(t=>t),R(this.destroyRef)).subscribe(t=>{let i=new RegExp(this.check()||this.route());console.log(i,t),i.exec(t)&&this.element()&&this._menu.setSelectedItem(this.element().nativeElement)});this.currentRouteChangeSubscription.set(n)}})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=c({type:e,selectors:[["c3-nav-item"]],viewQuery:function(t,i){t&1&&B(i.element,he,5,E),t&2&&Z()},inputs:{route:[1,"route"],itemTitle:[1,"itemTitle"],check:[1,"check"],isExternal:[1,"isExternal"]},standalone:!1,ngContentSelectors:ve,decls:6,vars:3,consts:[["button",""],["matRipple","","matRippleColor","#ffffff66",3,"routerLink","href"]],template:function(t,i){t&1&&(y(),o(0,"li",null,0)(2,"a",1),b(3),o(4,"span"),s(5),r()()()),t&2&&(l(2),g("routerLink",i.isExternal()?null:i.route())("href",i.isExternal()?i.route():null,H),l(3),z(" ",i.itemTitle()," "))},dependencies:[$,K],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var se=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[M,u,X]})}}return e})();var ae=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=c({type:e,selectors:[["c3-menu-example"]],decls:10,vars:0,consts:[["route","/docs/menu/examples","itemTitle","Accueil"],["width","20","height","20","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"icon"],["d","M3 12L12 3L21 12H16V21H8V12H3Z","fill","currentColor"],["route","/docs/menu/examples/TEST","check","/docs/menu/examples/TEST","itemTitle","TEST"],["title","Test",1,"icon"],["route","/docs/menu/examples/test-2","check","/docs/menu/examples/test-2","itemTitle","T2"],["title","T2",1,"icon"]],template:function(t,i){t&1&&(o(0,"c3-menu")(1,"c3-nav-item",0),q(),o(2,"svg",1),h(3,"path",2),r()(),F(),o(4,"c3-nav-item",3)(5,"span",4),s(6,"TE"),r()(),o(7,"c3-nav-item",5)(8,"span",6),s(9,"T2"),r()()())},dependencies:[se,ie,re,u],styles:["[_nghost-%COMP%]{display:block;position:relative;min-height:600px;width:100%;overflow:hidden}"]})}}return e})();var ce=()=>({}),le=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=c({type:e,selectors:[["c3-examples"]],decls:15,vars:4,consts:[[1,"my-4"],["title",""],["example",""],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(t,i){t&1&&(o(0,"p",0),s(1,` This is a menu example.
`),r(),o(2,"example-viewer")(3,"h4",1),s(4,"Menu Example"),r(),P(5,2),h(6,"c3-menu-example"),Q(),o(7,"c3-example-viewer-tab",3)(8,"div")(9,"textarea",4),s(10,`<c3-menu>
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
      `),r()()(),o(11,"c3-example-viewer-tab",5)(12,"div")(13,"textarea",6),s(14,`import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { C3MenuModule } from 'c3-components';

@Component({
  selector: 'c3-menu-example',
  imports: [C3MenuModule, RouterModule],
  templateUrl: './menu-example.component.html',
  styleUrl: './menu-example.component.scss',
})
export class MenuExampleComponent { }

      `),r()()()()),t&2&&(l(9),g("options",T(2,ce)),l(4),g("options",T(3,ce)))},dependencies:[ae,te,ee,Y],encapsulation:2})}}return e})();var xe=[{path:"",component:ne,children:[{path:"api",component:oe},{path:"**",component:le}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],me=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[u.forChild(xe),u]})}}return e})();var xt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[M,me]})}}return e})();export{xt as MenuModule};

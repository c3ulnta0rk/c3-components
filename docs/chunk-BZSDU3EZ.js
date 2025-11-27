import"./chunk-PP2ARSR7.js";import"./chunk-7R7XORZ5.js";import{b as te,c as ne}from"./chunk-IGHIKPM7.js";import{p as oe}from"./chunk-IQEWDOWY.js";import"./chunk-O2VT6O52.js";import{b as _}from"./chunk-GE74CIZ5.js";import{G as Y}from"./chunk-AWLEKEVE.js";import{h as W,i as $,j as K,k as X,n as p}from"./chunk-XO7UL54F.js";import{l as ee}from"./chunk-C6OSHIVD.js";import{Ba as D,D as k,Fc as G,Ib as H,Ic as b,Jb as L,Jc as J,Ob as x,Pb as i,Qb as s,Rb as v,Sb as U,Tb as A,U as j,Vb as V,W as I,Wa as O,Wb as P,_a as m,aa as N,ba as d,bc as M,cc as w,fa as c,gd as E,ic as Q,j as R,jc as B,mc as Z,na as q,oa as F,pb as l,pc as a,qb as h,ra as C,rc as z,u as y,uc as S,va as f}from"./chunk-RPEIJ3SN.js";var ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["c3-api"]],decls:2,vars:0,template:function(n,r){n&1&&(U(0,"p"),a(1,"api works!"),A())},encapsulation:2});let t=e;return t})();var T=(()=>{let e=class e{constructor(){this.selectedElement=null,this.currentRoute=f(""),this.isHeadless=f(!1),this._router=c(K),this._ar=c(W),this.currentRoute.set(this._router.routerState.snapshot.url),this.currentRouteChange=this._router.events.pipe(k(o=>o.urlAfterRedirects!==void 0&&o.state===void 0),y(o=>(this.currentRoute.set(o.urlAfterRedirects),o.urlAfterRedirects))),this.isHeadless.set(this._ar.snapshot.queryParams.headless==="true")}setSelectedItem(o){this.selectedElement&&this.selectedElement.classList.remove("active-item"),this.selectedElement=o,this.selectedElement.classList.add("active-item")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var fe=["*"];function he(t,e){t&1&&(i(0,"div",0)(1,"div",2)(2,"ul"),w(3),s()()())}var re=(()=>{let e=class e{constructor(){this._c3Menu=c(T)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["c3-menu"]],standalone:!1,ngContentSelectors:fe,decls:3,vars:3,consts:[["id","app-menu"],[1,"layout-main"],[1,"ui-scroll"]],template:function(n,r){n&1&&(M(),H(0,he,4,0,"div",0),i(1,"div",1),v(2,"router-outlet"),s()),n&2&&(L(r._c3Menu.isHeadless()?-1:0),m(),Z("headless",r._c3Menu.isHeadless()))},dependencies:[$],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();function se(t){t||(t=c(C));let e=new R(g=>{if(t.destroyed){g.next();return}return t.onDestroy(g.next.bind(g))});return g=>g.pipe(I(e))}var ge=["button"],xe=["*"],ae=(()=>{let e=class e{constructor(){this.route=b.required(),this.itemTitle=b.required(),this.check=b(null),this.isExternal=b(!1),this.element=J("button",{read:D}),this._menu=c(T),this.destroyRef=c(C),this.currentRouteChangeSubscription=f(null),G(()=>{if(!this.currentRouteChangeSubscription()&&this.element()){let o=this._menu.currentRouteChange.pipe(j(this._menu.currentRoute()),y(n=>n),se(this.destroyRef)).subscribe(n=>{new RegExp(this.check()||this.route()).exec(n)&&this.element()&&this._menu.setSelectedItem(this.element().nativeElement)});this.currentRouteChangeSubscription.set(o)}})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["c3-nav-item"]],viewQuery:function(n,r){n&1&&Q(r.element,ge,5,D),n&2&&B()},inputs:{route:[1,"route"],itemTitle:[1,"itemTitle"],check:[1,"check"],isExternal:[1,"isExternal"]},standalone:!1,ngContentSelectors:xe,decls:6,vars:3,consts:[["button",""],["matRipple","","matRippleColor","#ffffff66",3,"routerLink","href"]],template:function(n,r){n&1&&(M(),i(0,"li",null,0)(2,"a",1),w(3),i(4,"span"),a(5),s()()()),n&2&&(m(2),x("routerLink",r.isExternal()?null:r.route())("href",r.isExternal()?r.route():null,O),m(3),z(" ",r.itemTitle()," "))},dependencies:[X,Y],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=d({imports:[E,p,_]});let t=e;return t})();var le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["c3-menu-example"]],decls:10,vars:0,consts:[["route","/docs/menu/examples","itemTitle","Accueil"],["width","20","height","20","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"icon"],["d","M3 12L12 3L21 12H16V21H8V12H3Z","fill","currentColor"],["route","/docs/menu/examples/TEST","check","/docs/menu/examples/TEST","itemTitle","TEST"],["title","Test",1,"icon"],["route","/docs/menu/examples/test-2","check","/docs/menu/examples/test-2","itemTitle","T2"],["title","T2",1,"icon"]],template:function(n,r){n&1&&(i(0,"c3-menu")(1,"c3-nav-item",0),q(),i(2,"svg",1),v(3,"path",2),s()(),F(),i(4,"c3-nav-item",3)(5,"span",4),a(6,"TE"),s()(),i(7,"c3-nav-item",5)(8,"span",6),a(9,"T2"),s()()())},dependencies:[ce,re,ae,p],styles:["[_nghost-%COMP%]{display:block;position:relative;min-height:600px;width:100%;overflow:hidden}"]});let t=e;return t})();var me=()=>({}),ue=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["c3-examples"]],decls:15,vars:4,consts:[[1,"my-4"],["title",""],["example",""],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(n,r){n&1&&(i(0,"p",0),a(1,` This is a menu example.
`),s(),i(2,"example-viewer")(3,"h4",1),a(4,"Menu Example"),s(),V(5,2),v(6,"c3-menu-example"),P(),i(7,"c3-example-viewer-tab",3)(8,"div")(9,"textarea",4),a(10,`<c3-menu>
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
      `),s()()(),i(11,"c3-example-viewer-tab",5)(12,"div")(13,"textarea",6),a(14,`import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { C3MenuModule } from 'c3-components';

@Component({
  selector: 'c3-menu-example',
  imports: [C3MenuModule, RouterModule],
  templateUrl: './menu-example.component.html',
  styleUrl: './menu-example.component.scss',
})
export class MenuExampleComponent { }

      `),s()()()()),n&2&&(m(9),x("options",S(2,me)),m(4),x("options",S(3,me)))},dependencies:[le,ne,te,ee],encapsulation:2});let t=e;return t})();var ye=[{path:"",component:oe,children:[{path:"api",component:ie},{path:"**",component:ue}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=d({imports:[p.forChild(ye),p]});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=d({imports:[E,pe]});let t=e;return t})();export{ft as MenuModule};

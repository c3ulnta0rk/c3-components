import{b as W,c as X}from"./chunk-4PIUTQD3.js";import{p as Y}from"./chunk-UZ5KNFDG.js";import{n as K}from"./chunk-5WNTS45I.js";import"./chunk-WXI33M2S.js";import"./chunk-BGJYTKG3.js";import"./chunk-WSK65TWK.js";import{m as j}from"./chunk-CAW2AP7F.js";import{Bb as x,Db as N,Gb as A,Ib as $,Jb as O,Kb as U,Kc as z,Lb as m,Mb as o,Nb as E,Ob as H,Pb as L,Qb as b,Rb as P,Tb as B,Ub as h,Vb as T,Wb as v,_c as G,ac as J,bc as M,bd as c,cc as y,da as u,eb as f,ec as l,hb as g,ic as _,jc as I,ma as a,na as d,nb as S,pb as Q,pc as D,qb as C,sb as R,tb as k,wa as q,xa as V,zb as w}from"./chunk-ZROX25F6.js";var Z=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-api"]],standalone:!0,features:[_],decls:3,vars:0,template:function(n,r){n&1&&(m(0,"p"),l(1,"api works!"),o(),l(2,`,
`))},dependencies:[c],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var le=["menuTpl"],ae=["contentTpl"],ce=[[["","menu-title",""]],[["c3-flowing-menu-item-content"]]],pe=["[menu-title]","c3-flowing-menu-item-content"];function se(t,e){t&1&&v(0)}function ue(t,e){t&1&&v(0,1)}var F=(()=>{let e=class e{constructor(){this.menuTpl=C("menuTpl",{read:g}),this.contentTpl=C("contentTpl",{read:g}),this.active=Q(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu-item"]],viewQuery:function(n,r){n&1&&(M(r.menuTpl,le,5,g),M(r.contentTpl,ae,5,g)),n&2&&y(2)},ngContentSelectors:pe,decls:4,vars:0,consts:[["menuTpl",""],["contentTpl",""]],template:function(n,r){n&1&&(T(ce),w(0,se,1,0,"ng-template",null,0,D)(2,ue,1,0,"ng-template",null,1,D))},encapsulation:2});let t=e;return t})();var fe=["targetContent"];function ge(t,e){t&1&&b(0)}function Ce(t,e){if(t&1){let s=P();m(0,"button",4),B("click",function(){q(s);let n=h().$index,r=h();return V(r.selectMenu(n))}),w(1,ge,1,0,"ng-container",5),o()}if(t&2){let s=h(),i=s.$implicit,n=s.$index,r=h();N("active",n===r.selectedIndex()),f(),x("ngTemplateOutlet",i.menuTpl())}}function we(t,e){if(t&1&&w(0,Ce,2,3,"button",3),t&2){let s=e.$implicit;A(s.menuTpl()?0:-1)}}var ee=(()=>{let e=class e{constructor(){this.c3FlowingMenu=R(F),this.targetContentRef=C("targetContent",{read:S}),this.selectedIndex=k(0),z(()=>{this.targetContentRef()&&this.updateView()})}selectMenu(i){this.selectedIndex.set(i),this.updateView()}updateView(){if(!this.targetContentRef())return;this.targetContentRef().clear();let i=this.c3FlowingMenu()[this.selectedIndex()];i&&this.targetContentRef().createEmbeddedView(i.contentTpl())}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu"]],contentQueries:function(n,r,re){n&1&&J(re,r.c3FlowingMenu,F,4),n&2&&y()},viewQuery:function(n,r){n&1&&M(r.targetContentRef,fe,5,S),n&2&&y()},hostAttrs:["ngSkipHydration","true",1,"c3-flowing-menu"],inputs:{selectedIndex:[1,"selectedIndex"]},outputs:{selectedIndex:"selectedIndexChange"},decls:6,vars:0,consts:[["targetContent",""],[1,"menu"],[1,"contenu"],[3,"active"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(n,r){n&1&&(m(0,"aside",1),O(1,we,1,1,null,null,$),o(),m(3,"section",2),b(4,null,0),o()),n&2&&(f(),U(r.c3FlowingMenu()))},dependencies:[G],encapsulation:2});let t=e;return t})();var he=["*"],te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu-item-content"]],ngContentSelectors:he,decls:1,vars:0,template:function(n,r){n&1&&(T(),v(0))},encapsulation:2});let t=e;return t})();var ne=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=u({imports:[c]});let t=e;return t})();var ie=()=>({}),oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-examples"]],standalone:!0,features:[_],decls:34,vars:4,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["menu-title",""]],template:function(n,r){n&1&&(m(0,"p",0),l(1,"Component for display content with menu"),o(),m(2,"example-viewer",1)(3,"h4",2),l(4,"Example"),o(),m(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),l(8,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3FlowingMenuModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-flowing-menu',
  standalone: true,
  imports: [CommonModule, C3FlowingMenuModule],
  templateUrl: './flowing-menu.component.html',
  styleUrl: './flowing-menu.component.scss',
})
export class FlowingMenuComponent {}
      `),o()()(),m(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),l(12,`<c3-flowing-menu>
  <c3-flowing-menu-item>
    <h4 menu-title>Menu 1</h4>
    <c3-flowing-menu-item-content>
      <h1>Contenu 1</h1>
      <p>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        2. Sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
        <br />
      </p>
    </c3-flowing-menu-item-content>
  </c3-flowing-menu-item>

  <c3-flowing-menu-item>
    <h4 menu-title>Menu 2</h4>
    <c3-flowing-menu-item-content>
      <h1>Contenu 2</h1>
      <p>
        1. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
        2. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      </p>
    </c3-flowing-menu-item-content>
  </c3-flowing-menu-item>
</c3-flowing-menu>
      `),o()()(),H(13,7),m(14,"c3-flowing-menu")(15,"c3-flowing-menu-item")(16,"h4",8),l(17,"Menu 1"),o(),m(18,"c3-flowing-menu-item-content")(19,"h1"),l(20,"Contenu 1"),o(),m(21,"p"),l(22," 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),E(23,"br"),l(24," 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),E(25,"br"),o()()(),m(26,"c3-flowing-menu-item")(27,"h4",8),l(28,"Menu 2"),o(),m(29,"c3-flowing-menu-item-content")(30,"h1"),l(31,"Contenu 2"),o(),m(32,"p"),l(33," 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),o()()()(),L(),o()),n&2&&(f(7),x("options",I(2,ie)),f(4),x("options",I(3,ie)))},dependencies:[c,X,W,K,ne,ee,F,te],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var Me=[{path:"",component:Y,children:[{path:"api",component:Z},{path:"examples",component:oe},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=u({imports:[j.forChild(Me),j]});let t=e;return t})();var Je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=u({imports:[c,me]});let t=e;return t})();export{Je as FlowingMenuModule};

import{m as K,n as W,o as X}from"./chunk-2TCS5I26.js";import{n as G}from"./chunk-HKIQNM75.js";import"./chunk-FEMR6DLU.js";import{m as q}from"./chunk-RKYAZ433.js";import{$b as B,Ab as h,Cb as k,Fb as N,Hb as A,Ib as $,Jb as O,Jc as J,Kb as m,Lb as o,Mb as b,Nb as U,Ob as H,Pb as I,Qb as L,Sb as P,Tb as x,Ub as _,Vb as v,Zc as z,ac as M,ad as c,bc as y,da as u,dc as l,eb as f,hb as g,hc as S,ic as D,ma as a,na as d,nb as E,oc as j,pb as T,qb as C,sb as R,wa as V,xa as Q,yb as w}from"./chunk-SKJHGEYD.js";var Y=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-api"]],standalone:!0,features:[S],decls:3,vars:0,template:function(n,r){n&1&&(m(0,"p"),l(1,"api works!"),o(),l(2,`,
`))},dependencies:[c],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var re=["menuTpl"],le=["contentTpl"],ae=[[["","menu-title",""]],[["c3-flowing-menu-item-content"]]],ce=["[menu-title]","c3-flowing-menu-item-content"];function pe(t,e){t&1&&v(0)}function se(t,e){t&1&&v(0,1)}var F=(()=>{let e=class e{constructor(){this.menuTpl=C("menuTpl",{read:g}),this.contentTpl=C("contentTpl",{read:g}),this.active=T(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu-item"]],viewQuery:function(n,r){n&1&&(M(r.menuTpl,re,5,g),M(r.contentTpl,le,5,g)),n&2&&y(2)},ngContentSelectors:ce,decls:4,vars:0,consts:[["menuTpl",""],["contentTpl",""]],template:function(n,r){n&1&&(_(ae),w(0,pe,1,0,"ng-template",null,0,j)(2,se,1,0,"ng-template",null,1,j))},encapsulation:2});let t=e;return t})();var de=["targetContent"];function fe(t,e){t&1&&I(0)}function ge(t,e){if(t&1){let s=L();m(0,"button",4),P("click",function(){V(s);let n=x().$index,r=x();return Q(r.selectMenu(n))}),w(1,fe,1,0,"ng-container",5),o()}if(t&2){let s=x(),i=s.$implicit,n=s.$index,r=x();k("active",n===r.selectedIndex()),f(),h("ngTemplateOutlet",i.menuTpl())}}function Ce(t,e){if(t&1&&w(0,ge,2,3,"button",3),t&2){let s=e.$implicit;N(s.menuTpl()?0:-1)}}var Z=(()=>{let e=class e{constructor(){this.c3FlowingMenu=R(F),this.targetContentRef=C("targetContent",{read:E}),this.selectedIndex=T(0),J(()=>{this.targetContentRef()&&this.updateView()})}selectMenu(i){this.selectedIndex.set(i),this.updateView()}updateView(){if(!this.targetContentRef())return;this.targetContentRef().clear();let i=this.c3FlowingMenu()[this.selectedIndex()];i&&this.targetContentRef().createEmbeddedView(i.contentTpl())}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu"]],contentQueries:function(n,r,me){n&1&&B(me,r.c3FlowingMenu,F,4),n&2&&y()},viewQuery:function(n,r){n&1&&M(r.targetContentRef,de,5,E),n&2&&y()},hostAttrs:["ngSkipHydration","true",1,"c3-flowing-menu"],decls:6,vars:0,consts:[["targetContent",""],[1,"menu"],[1,"contenu"],[3,"active"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(n,r){n&1&&(m(0,"aside",1),$(1,Ce,1,1,null,null,A),o(),m(3,"section",2),I(4,null,0),o()),n&2&&(f(),O(r.c3FlowingMenu()))},dependencies:[z],encapsulation:2});let t=e;return t})();var he=["*"],ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu-item-content"]],ngContentSelectors:he,decls:1,vars:0,template:function(n,r){n&1&&(_(),v(0))},encapsulation:2});let t=e;return t})();var te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=u({imports:[c]});let t=e;return t})();var ne=()=>({}),ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-examples"]],standalone:!0,features:[S],decls:34,vars:4,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["menu-title",""]],template:function(n,r){n&1&&(m(0,"p",0),l(1,"Component for display content with menu"),o(),m(2,"example-viewer",1)(3,"h4",2),l(4,"Example"),o(),m(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),l(8,`import { CommonModule } from '@angular/common';
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
      `),o()()(),U(13,7),m(14,"c3-flowing-menu")(15,"c3-flowing-menu-item")(16,"h4",8),l(17,"Menu 1"),o(),m(18,"c3-flowing-menu-item-content")(19,"h1"),l(20,"Contenu 1"),o(),m(21,"p"),l(22," 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),b(23,"br"),l(24," 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),b(25,"br"),o()()(),m(26,"c3-flowing-menu-item")(27,"h4",8),l(28,"Menu 2"),o(),m(29,"c3-flowing-menu-item-content")(30,"h1"),l(31,"Contenu 2"),o(),m(32,"p"),l(33," 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),o()()()(),H(),o()),n&2&&(f(7),h("options",D(2,ne)),f(4),h("options",D(3,ne)))},dependencies:[c,W,K,G,te,Z,F,ee],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var ve=[{path:"",component:X,children:[{path:"api",component:Y},{path:"examples",component:ie},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=u({imports:[q.forChild(ve),q]});let t=e;return t})();var Be=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=u({imports:[c,oe]});let t=e;return t})();export{Be as FlowingMenuModule};

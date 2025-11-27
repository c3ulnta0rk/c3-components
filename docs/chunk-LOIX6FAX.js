import{b as Y,c as Z}from"./chunk-IGHIKPM7.js";import{p as ee}from"./chunk-IQEWDOWY.js";import"./chunk-O2VT6O52.js";import"./chunk-GE74CIZ5.js";import"./chunk-AWLEKEVE.js";import{n as I}from"./chunk-XO7UL54F.js";import{l as X}from"./chunk-C6OSHIVD.js";import{Fc as z,Ib as V,Jb as q,Jc as v,Lb as Q,Lc as G,Mb as k,Mc as K,Nb as A,Ob as g,Pb as r,Qb as m,Rb as b,Sb as $,Tb as O,Vb as U,Wb as H,Xb as E,Yb as L,_a as u,_b as P,ac as C,ba as s,bc as T,cc as w,dd as W,gb as f,gd as F,hc as B,ic as x,jc as h,la as j,lb as _,ma as N,mc as J,pb as a,pc as l,qb as d,uc as S,va as R,vb as y,zc as D}from"./chunk-RPEIJ3SN.js";var te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-api"]],decls:3,vars:0,template:function(n,o){n&1&&($(0,"p"),l(1,"api works!"),O(),l(2,`,
`))},styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var ce=["menuTpl"],pe=["contentTpl"],se=[[["","menu-title",""]],[["c3-flowing-menu-item-content"]]],ue=["[menu-title]","c3-flowing-menu-item-content"];function de(t,e){t&1&&w(0)}function fe(t,e){t&1&&w(0,1)}var M=(()=>{let e=class e{constructor(){this.menuTpl=v("menuTpl",{read:f}),this.contentTpl=v("contentTpl",{read:f}),this.active=R(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu-item"]],viewQuery:function(n,o){n&1&&(x(o.menuTpl,ce,5,f),x(o.contentTpl,pe,5,f)),n&2&&h(2)},standalone:!1,ngContentSelectors:ue,decls:4,vars:0,consts:[["menuTpl",""],["contentTpl",""]],template:function(n,o){n&1&&(T(se),y(0,de,1,0,"ng-template",null,0,D)(2,fe,1,0,"ng-template",null,1,D))},encapsulation:2});let t=e;return t})();var Ce=["targetContent"];function we(t,e){t&1&&E(0)}function xe(t,e){if(t&1){let p=L();r(0,"button",4),P("click",function(){j(p);let n=C().$index,o=C();return N(o.selectMenu(n))}),y(1,we,1,0,"ng-container",5),m()}if(t&2){let p=C(),i=p.$implicit,n=p.$index,o=C();J("active",n===o.selectedIndex()),u(),g("ngTemplateOutlet",i.menuTpl())}}function he(t,e){if(t&1&&V(0,xe,2,3,"button",3),t&2){let p=e.$implicit;q(p.menuTpl()?0:-1)}}var ne=(()=>{let e=class e{constructor(){this.c3FlowingMenu=G(M),this.targetContentRef=v("targetContent",{read:_}),this.selectedIndex=K(0),z(()=>{this.targetContentRef()&&this.updateView()})}selectMenu(i){this.selectedIndex.set(i),this.updateView()}updateView(){if(!this.targetContentRef())return;this.targetContentRef().clear();let i=this.c3FlowingMenu()[this.selectedIndex()];i&&this.targetContentRef().createEmbeddedView(i.contentTpl())}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu"]],contentQueries:function(n,o,ae){n&1&&B(ae,o.c3FlowingMenu,M,4),n&2&&h()},viewQuery:function(n,o){n&1&&x(o.targetContentRef,Ce,5,_),n&2&&h()},hostAttrs:["ngSkipHydration","true",1,"c3-flowing-menu"],inputs:{selectedIndex:[1,"selectedIndex"]},outputs:{selectedIndex:"selectedIndexChange"},standalone:!1,decls:6,vars:0,consts:[["targetContent",""],[1,"menu"],[1,"contenu"],[3,"active"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(n,o){n&1&&(r(0,"aside",1),k(1,he,1,1,null,null,Q),m(),r(3,"section",2),E(4,null,0),m()),n&2&&(u(),A(o.c3FlowingMenu()))},dependencies:[W],encapsulation:2});let t=e;return t})();var Me=["*"],ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-flowing-menu-item-content"]],standalone:!1,ngContentSelectors:Me,decls:1,vars:0,template:function(n,o){n&1&&(T(),w(0))},encapsulation:2});let t=e;return t})();var oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=s({imports:[F]});let t=e;return t})();var me=()=>({}),re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["c3-examples"]],decls:34,vars:4,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["menu-title",""]],template:function(n,o){n&1&&(r(0,"p",0),l(1,"Component for display content with menu"),m(),r(2,"example-viewer",1)(3,"h4",2),l(4,"Example"),m(),r(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),l(8,`import { CommonModule } from '@angular/common';
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
      `),m()()(),r(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),l(12,`<c3-flowing-menu>
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
      `),m()()(),U(13,7),r(14,"c3-flowing-menu")(15,"c3-flowing-menu-item")(16,"h4",8),l(17,"Menu 1"),m(),r(18,"c3-flowing-menu-item-content")(19,"h1"),l(20,"Contenu 1"),m(),r(21,"p"),l(22," 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),b(23,"br"),l(24," 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),b(25,"br"),m()()(),r(26,"c3-flowing-menu-item")(27,"h4",8),l(28,"Menu 2"),m(),r(29,"c3-flowing-menu-item-content")(30,"h1"),l(31,"Contenu 2"),m(),r(32,"p"),l(33," 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),m()()()(),H(),m()),n&2&&(u(7),g("options",S(2,me)),u(4),g("options",S(3,me)))},dependencies:[Z,Y,X,oe,ne,M,ie],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var Te=[{path:"",component:ee,children:[{path:"api",component:te},{path:"examples",component:re},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=s({imports:[I.forChild(Te),I]});let t=e;return t})();var Je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=s({imports:[F,le]});let t=e;return t})();export{Je as FlowingMenuModule};

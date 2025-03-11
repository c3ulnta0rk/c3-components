import{b as K,c as W}from"./chunk-XSVI6WBR.js";import{p as X}from"./chunk-43MNO3RZ.js";import"./chunk-VMEAVLAH.js";import"./chunk-ZSSD5RUB.js";import"./chunk-B2K2JW2E.js";import"./chunk-DW6W5TPA.js";import{n as D}from"./chunk-UROJQV2A.js";import{l as G}from"./chunk-R4VREYKJ.js";import{$b as y,Ba as q,Gc as J,Hb as x,Jb as k,Mb as A,Ob as N,Pb as $,Qb as O,Rb as o,Sb as i,Tb as E,Ub as U,Vb as H,Wb as S,Xb as L,Xc as z,Z as p,Zb as P,_b as M,_c as a,ab as u,ac as h,cb as g,gc as B,hb as T,hc as _,ib as C,ic as v,ka as j,kb as V,kc as l,la as R,lb as Q,oc as b,pb as r,qb as s,uc as I,wb as w}from"./chunk-BJ7BWNUF.js";var Y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["c3-api"]],decls:3,vars:0,template:function(t,m){t&1&&(o(0,"p"),l(1,"api works!"),i(),l(2,`,
`))},dependencies:[a],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var me=["menuTpl"],le=["contentTpl"],re=[[["","menu-title",""]],[["c3-flowing-menu-item-content"]]],ae=["[menu-title]","c3-flowing-menu-item-content"];function ce(e,d){e&1&&h(0)}function pe(e,d){e&1&&h(0,1)}var F=(()=>{class e{constructor(){this.menuTpl=C("menuTpl",{read:g}),this.contentTpl=C("contentTpl",{read:g}),this.active=q(!1)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["c3-flowing-menu-item"]],viewQuery:function(t,m){t&1&&(_(m.menuTpl,me,5,g),_(m.contentTpl,le,5,g)),t&2&&v(2)},standalone:!1,ngContentSelectors:ae,decls:4,vars:0,consts:[["menuTpl",""],["contentTpl",""]],template:function(t,m){t&1&&(y(re),w(0,ce,1,0,"ng-template",null,0,I)(2,pe,1,0,"ng-template",null,1,I))},encapsulation:2})}}return e})();var se=["targetContent"];function de(e,d){e&1&&S(0)}function fe(e,d){if(e&1){let n=L();o(0,"button",4),P("click",function(){j(n);let m=M().$index,f=M();return R(f.selectMenu(m))}),w(1,de,1,0,"ng-container",5),i()}if(e&2){let n=M(),t=n.$implicit,m=n.$index,f=M();k("active",m===f.selectedIndex()),u(),x("ngTemplateOutlet",t.menuTpl())}}function ge(e,d){if(e&1&&w(0,fe,2,3,"button",3),e&2){let n=d.$implicit;A(n.menuTpl()?0:-1)}}var Z=(()=>{class e{constructor(){this.c3FlowingMenu=V(F),this.targetContentRef=C("targetContent",{read:T}),this.selectedIndex=Q(0),J(()=>{this.targetContentRef()&&this.updateView()})}selectMenu(n){this.selectedIndex.set(n),this.updateView()}updateView(){if(!this.targetContentRef())return;this.targetContentRef().clear();let n=this.c3FlowingMenu()[this.selectedIndex()];n&&this.targetContentRef().createEmbeddedView(n.contentTpl())}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["c3-flowing-menu"]],contentQueries:function(t,m,f){t&1&&B(f,m.c3FlowingMenu,F,4),t&2&&v()},viewQuery:function(t,m){t&1&&_(m.targetContentRef,se,5,T),t&2&&v()},hostAttrs:["ngSkipHydration","true",1,"c3-flowing-menu"],inputs:{selectedIndex:[1,"selectedIndex"]},outputs:{selectedIndex:"selectedIndexChange"},standalone:!1,decls:6,vars:0,consts:[["targetContent",""],[1,"menu"],[1,"contenu"],[3,"active"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(t,m){t&1&&(o(0,"aside",1),$(1,ge,1,1,null,null,N),i(),o(3,"section",2),S(4,null,0),i()),t&2&&(u(),O(m.c3FlowingMenu()))},dependencies:[z],encapsulation:2})}}return e})();var we=["*"],ee=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["c3-flowing-menu-item-content"]],standalone:!1,ngContentSelectors:we,decls:1,vars:0,template:function(t,m){t&1&&(y(),h(0))},encapsulation:2})}}return e})();var te=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=p({imports:[a]})}}return e})();var ne=()=>({}),ie=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["c3-examples"]],decls:34,vars:4,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["menu-title",""]],template:function(t,m){t&1&&(o(0,"p",0),l(1,"Component for display content with menu"),i(),o(2,"example-viewer",1)(3,"h4",2),l(4,"Example"),i(),o(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),l(8,`import { CommonModule } from '@angular/common';
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
      `),i()()(),o(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),l(12,`<c3-flowing-menu>
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
      `),i()()(),U(13,7),o(14,"c3-flowing-menu")(15,"c3-flowing-menu-item")(16,"h4",8),l(17,"Menu 1"),i(),o(18,"c3-flowing-menu-item-content")(19,"h1"),l(20,"Contenu 1"),i(),o(21,"p"),l(22," 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),E(23,"br"),l(24," 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),E(25,"br"),i()()(),o(26,"c3-flowing-menu-item")(27,"h4",8),l(28,"Menu 2"),i(),o(29,"c3-flowing-menu-item-content")(30,"h1"),l(31,"Contenu 2"),i(),o(32,"p"),l(33," 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),i()()()(),H(),i()),t&2&&(u(7),x("options",b(2,ne)),u(4),x("options",b(3,ne)))},dependencies:[a,W,K,G,te,Z,F,ee],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var Me=[{path:"",component:X,children:[{path:"api",component:Y},{path:"examples",component:ie},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],oe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=p({imports:[D.forChild(Me),D]})}}return e})();var Pe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=p({imports:[a,oe]})}}return e})();export{Pe as FlowingMenuModule};

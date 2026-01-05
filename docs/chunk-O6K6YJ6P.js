import{a as ee}from"./chunk-6G7WH2DU.js";import{b as Y,c as Z}from"./chunk-OU3IZBA3.js";import"./chunk-ROMPVTZG.js";import"./chunk-MBJBYIEM.js";import"./chunk-ENUS3AYZ.js";import{a as X}from"./chunk-OEYL6T2Z.js";import"./chunk-PEQUY4GQ.js";import"./chunk-OBP7XN6Z.js";import"./chunk-2I6A6QTS.js";import{g as N}from"./chunk-AHIU6KM7.js";import"./chunk-D2JVOI32.js";import"./chunk-24HI4LVF.js";import"./chunk-QFITDM3P.js";import{k as K,n as T}from"./chunk-5WXWLFM7.js";import{$b as _,Ac as D,Fc as R,Lc as J,Mb as Q,Nb as k,Pb as U,Pc as y,Qb as A,Rb as P,Rc as z,Sb as x,Sc as G,Tb as a,Ub as r,Vb as I,Wb as t,Xb as n,Zb as $,_b as H,ab as E,ac as L,ba as u,ec as O,gc as h,hc as v,ib as g,ic as C,na as j,nb as F,nc as W,oa as V,oc as S,pc as w,rb as c,sb as f,sc as B,vc as e,xa as q,xb as b}from"./chunk-RCGMRQ6T.js";var te=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=c({type:i,selectors:[["c3-api"]],decls:219,vars:0,consts:[[1,"api-section"],[1,"api-table"],[1,"notes-list"]],template:function(m,d){m&1&&(t(0,"h1"),e(1,"Flowing Menu API"),n(),t(2,"section",0)(3,"h2"),e(4,"Import"),n(),t(5,"pre")(6,"code"),e(7,`import {
  C3FlowingMenuModule,
  C3FlowingMenuComponent,
  C3FlowingMenuItemComponent,
  C3FlowingMenuItemContentComponent
} from 'c3-components';`),n()()(),t(8,"section",0)(9,"h2"),e(10,"C3FlowingMenuComponent"),n(),t(11,"p"),e(12,"Selector: "),t(13,"code"),e(14,"c3-flowing-menu"),n()(),t(15,"p"),e(16,"Host Class: "),t(17,"code"),e(18,"c3-flowing-menu"),n()(),t(19,"p"),e(20,"A tabbed menu component that displays content from the selected menu item with smooth transitions."),n(),t(21,"h3"),e(22,"Inputs"),n(),t(23,"table",1)(24,"thead")(25,"tr")(26,"th"),e(27,"Name"),n(),t(28,"th"),e(29,"Type"),n(),t(30,"th"),e(31,"Default"),n(),t(32,"th"),e(33,"Description"),n()()(),t(34,"tbody")(35,"tr")(36,"td")(37,"code"),e(38,"selectedIndex"),n()(),t(39,"td")(40,"code"),e(41,"number"),n()(),t(42,"td")(43,"code"),e(44,"0"),n()(),t(45,"td"),e(46,"Index of the currently selected menu item. Two-way bindable with "),t(47,"code"),e(48,"[(selectedIndex)]"),n(),e(49,"."),n()()()(),t(50,"h3"),e(51,"Methods"),n(),t(52,"table",1)(53,"thead")(54,"tr")(55,"th"),e(56,"Method"),n(),t(57,"th"),e(58,"Parameters"),n(),t(59,"th"),e(60,"Description"),n()()(),t(61,"tbody")(62,"tr")(63,"td")(64,"code"),e(65,"selectMenu(index)"),n()(),t(66,"td")(67,"code"),e(68,"number"),n()(),t(69,"td"),e(70,"Programmatically select a menu item by index."),n()()()(),t(71,"h3"),e(72,"Content Children"),n(),t(73,"table",1)(74,"thead")(75,"tr")(76,"th"),e(77,"Query"),n(),t(78,"th"),e(79,"Type"),n(),t(80,"th"),e(81,"Description"),n()()(),t(82,"tbody")(83,"tr")(84,"td")(85,"code"),e(86,"c3FlowingMenu"),n()(),t(87,"td")(88,"code"),e(89,"QueryList<C3FlowingMenuItemComponent>"),n()(),t(90,"td"),e(91,"Collection of menu item children."),n()()()()(),t(92,"section",0)(93,"h2"),e(94,"C3FlowingMenuItemComponent"),n(),t(95,"p"),e(96,"Selector: "),t(97,"code"),e(98,"c3-flowing-menu-item"),n()(),t(99,"p"),e(100,"Individual menu item containing both the menu label and associated content."),n(),t(101,"h3"),e(102,"Signals"),n(),t(103,"table",1)(104,"thead")(105,"tr")(106,"th"),e(107,"Name"),n(),t(108,"th"),e(109,"Type"),n(),t(110,"th"),e(111,"Description"),n()()(),t(112,"tbody")(113,"tr")(114,"td")(115,"code"),e(116,"active"),n()(),t(117,"td")(118,"code"),e(119,"Signal<boolean>"),n()(),t(120,"td"),e(121,"Whether this menu item is currently active."),n()(),t(122,"tr")(123,"td")(124,"code"),e(125,"menuTpl"),n()(),t(126,"td")(127,"code"),e(128,"Signal<TemplateRef | undefined>"),n()(),t(129,"td"),e(130,"Reference to the menu label template."),n()(),t(131,"tr")(132,"td")(133,"code"),e(134,"contentTpl"),n()(),t(135,"td")(136,"code"),e(137,"Signal<TemplateRef | undefined>"),n()(),t(138,"td"),e(139,"Reference to the content template."),n()()()(),t(140,"h3"),e(141,"Content Projection"),n(),t(142,"p"),e(143,"Use "),t(144,"code"),e(145,"ng-template"),n(),e(146," with the following markers:"),n(),t(147,"table",1)(148,"thead")(149,"tr")(150,"th"),e(151,"Template Ref"),n(),t(152,"th"),e(153,"Description"),n()()(),t(154,"tbody")(155,"tr")(156,"td")(157,"code"),e(158,"#menuTpl"),n()(),t(159,"td"),e(160,"Template for the menu label/tab."),n()(),t(161,"tr")(162,"td")(163,"code"),e(164,"#contentTpl"),n()(),t(165,"td"),e(166,"Template for the content displayed when this item is selected."),n()()()()(),t(167,"section",0)(168,"h2"),e(169,"C3FlowingMenuItemContentComponent"),n(),t(170,"p"),e(171,"Selector: "),t(172,"code"),e(173,"c3-flowing-menu-item-content"),n()(),t(174,"p"),e(175,"Wrapper component for menu item content. Used inside "),t(176,"code"),e(177,"c3-flowing-menu-item"),n(),e(178,"."),n()(),t(179,"section",0)(180,"h2"),e(181,"Usage Example"),n(),t(182,"pre")(183,"code"),e(184,`<c3-flowing-menu [(selectedIndex)]="activeTab">
  <c3-flowing-menu-item>
    <ng-template #menuTpl>
      <span>Tab 1</span>
    </ng-template>
    <ng-template #contentTpl>
      <c3-flowing-menu-item-content>
        <p>Content for Tab 1</p>
      </c3-flowing-menu-item-content>
    </ng-template>
  </c3-flowing-menu-item>

  <c3-flowing-menu-item>
    <ng-template #menuTpl>
      <span>Tab 2</span>
    </ng-template>
    <ng-template #contentTpl>
      <c3-flowing-menu-item-content>
        <p>Content for Tab 2</p>
      </c3-flowing-menu-item-content>
    </ng-template>
  </c3-flowing-menu-item>
</c3-flowing-menu>`),n()()(),t(185,"section",0)(186,"h2"),e(187,"Styling"),n(),t(188,"p"),e(189,"Import styles from:"),n(),t(190,"pre")(191,"code"),e(192,"@use 'c3-components/lib/c3-flowing-menu/styles/c3-flowing-menu';"),n()()(),t(193,"section",0)(194,"h2"),e(195,"Usage Notes"),n(),t(196,"ul",2)(197,"li"),e(198,"The component uses "),t(199,"code"),e(200,"ngSkipHydration"),n(),e(201," for SSR compatibility."),n(),t(202,"li"),e(203,"Content is dynamically rendered using "),t(204,"code"),e(205,"ViewContainerRef.createEmbeddedView()"),n(),e(206,"."),n(),t(207,"li"),e(208,"Menu items are queried using "),t(209,"code"),e(210,"contentChildren()"),n(),e(211,"."),n(),t(212,"li"),e(213,"Use "),t(214,"code"),e(215,"[(selectedIndex)]"),n(),e(216," for two-way binding of the active tab."),n(),t(217,"li"),e(218,"The selected content is displayed in a designated content area."),n()()())},encapsulation:2});let o=i;return o})();var ae=["menuTpl"],ce=["contentTpl"],pe=[[["","menu-title",""]],[["c3-flowing-menu-item-content"]]],se=["[menu-title]","c3-flowing-menu-item-content"];function ue(o,i){o&1&&C(0)}function Ee(o,i){o&1&&C(0,1)}var M=(()=>{let i=class i{constructor(){this.menuTpl=y("menuTpl",{read:g}),this.contentTpl=y("contentTpl",{read:g}),this.active=q(!1)}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=c({type:i,selectors:[["c3-flowing-menu-item"]],viewQuery:function(m,d){m&1&&(S(d.menuTpl,ae,5,g),S(d.contentTpl,ce,5,g)),m&2&&w(2)},standalone:!1,ngContentSelectors:se,decls:4,vars:0,consts:[["menuTpl",""],["contentTpl",""]],template:function(m,d){m&1&&(v(pe),b(0,ue,1,0,"ng-template",null,0,R)(2,Ee,1,0,"ng-template",null,1,R))},encapsulation:2});let o=i;return o})();var ge=["targetContent"];function xe(o,i){o&1&&_(0)}function he(o,i){if(o&1){let s=L();a(0,"button",4),O("click",function(){j(s);let m=h().$index,d=h();return V(d.selectMenu(m))}),b(1,xe,1,0,"ng-container",5),r()}if(o&2){let s=h(),l=s.$implicit,m=s.$index,d=h();B("active",m===d.selectedIndex()),E(),x("ngTemplateOutlet",l.menuTpl())}}function Ce(o,i){if(o&1&&Q(0,he,2,3,"button",3),o&2){let s=i.$implicit;k(s.menuTpl()?0:-1)}}var ne=(()=>{let i=class i{constructor(){this.c3FlowingMenu=z(M),this.targetContentRef=y("targetContent",{read:F}),this.selectedIndex=G(0),J(()=>{this.targetContentRef()&&this.updateView()})}selectMenu(l){this.selectedIndex.set(l),this.updateView()}updateView(){if(!this.targetContentRef())return;this.targetContentRef().clear();let l=this.c3FlowingMenu()[this.selectedIndex()];l&&this.targetContentRef().createEmbeddedView(l.contentTpl())}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=c({type:i,selectors:[["c3-flowing-menu"]],contentQueries:function(m,d,re){m&1&&W(re,d.c3FlowingMenu,M,4),m&2&&w()},viewQuery:function(m,d){m&1&&S(d.targetContentRef,ge,5,F),m&2&&w()},hostAttrs:["ngSkipHydration","true",1,"c3-flowing-menu"],inputs:{selectedIndex:[1,"selectedIndex"]},outputs:{selectedIndex:"selectedIndexChange"},standalone:!1,decls:6,vars:0,consts:[["targetContent",""],[1,"menu"],[1,"contenu"],[3,"active"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(m,d){m&1&&(a(0,"aside",1),A(1,Ce,1,1,null,null,U),r(),a(3,"section",2),_(4,null,0),r()),m&2&&(E(),P(d.c3FlowingMenu()))},dependencies:[K],encapsulation:2});let o=i;return o})();var we=["*"],ie=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=c({type:i,selectors:[["c3-flowing-menu-item-content"]],standalone:!1,ngContentSelectors:we,decls:1,vars:0,template:function(m,d){m&1&&(v(),C(0))},encapsulation:2});let o=i;return o})();var oe=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=f({type:i}),i.\u0275inj=u({imports:[T]});let o=i;return o})();var me=()=>({}),le=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=c({type:i,selectors:[["c3-examples"]],decls:34,vars:4,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["menu-title",""]],template:function(m,d){m&1&&(a(0,"p",0),e(1,"Component for display content with menu"),r(),a(2,"example-viewer",1)(3,"h4",2),e(4,"Example"),r(),a(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),e(8,`import { CommonModule } from '@angular/common';
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
      `),r()()(),a(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),e(12,`<c3-flowing-menu>
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
      `),r()()(),$(13,7),a(14,"c3-flowing-menu")(15,"c3-flowing-menu-item")(16,"h4",8),e(17,"Menu 1"),r(),a(18,"c3-flowing-menu-item-content")(19,"h1"),e(20,"Contenu 1"),r(),a(21,"p"),e(22," 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),I(23,"br"),e(24," 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),I(25,"br"),r()()(),a(26,"c3-flowing-menu-item")(27,"h4",8),e(28,"Menu 2"),r(),a(29,"c3-flowing-menu-item-content")(30,"h1"),e(31,"Contenu 2"),r(),a(32,"p"),e(33," 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),r()()()(),H(),r()),m&2&&(E(7),x("options",D(2,me)),E(4),x("options",D(3,me)))},dependencies:[Z,Y,X,oe,ne,M,ie],styles:["[_nghost-%COMP%]{display:block}"]});let o=i;return o})();var Me=[{path:"",component:ee,children:[{path:"api",component:te},{path:"examples",component:le},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],de=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=f({type:i}),i.\u0275inj=u({imports:[N.forChild(Me),N]});let o=i;return o})();var Be=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=f({type:i}),i.\u0275inj=u({imports:[T,de]});let o=i;return o})();export{Be as FlowingMenuModule};

import{a as ie,b as O}from"./chunk-T5Y7UFQB.js";import{a as de}from"./chunk-6G7WH2DU.js";import{a as oe,b as me,c as ae}from"./chunk-OU3IZBA3.js";import"./chunk-ROMPVTZG.js";import{k as ee,l as te}from"./chunk-MBJBYIEM.js";import"./chunk-ENUS3AYZ.js";import{a as ne}from"./chunk-OEYL6T2Z.js";import{a as P,d as M}from"./chunk-PEQUY4GQ.js";import"./chunk-OBP7XN6Z.js";import"./chunk-2I6A6QTS.js";import{g as J}from"./chunk-AHIU6KM7.js";import{a as B,b as V}from"./chunk-D2JVOI32.js";import"./chunk-24HI4LVF.js";import"./chunk-QFITDM3P.js";import{n as N}from"./chunk-5WXWLFM7.js";import{Ac as b,Da as z,Lc as X,Mb as T,Nb as D,Nc as Y,Oc as v,Qc as Z,Sb as E,Sc as $,Tb as a,Ub as d,Vb as _,Wb as t,Xb as n,Zb as Q,_b as R,ab as l,ac as j,ba as h,ec as A,fa as L,gc as H,hc as I,ic as C,na as y,nc as K,oa as w,pc as W,qc as q,rb as p,sb as f,uc as g,vc as e,wb as G,wc as F,xc as k}from"./chunk-RCGMRQ6T.js";var re=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=p({type:i,selectors:[["c3-api"]],decls:223,vars:0,consts:[[1,"api-section"],[1,"api-table"],[1,"notes-list"]],template:function(m,s){m&1&&(t(0,"h1"),e(1,"Expansion API"),n(),t(2,"section",0)(3,"h2"),e(4,"Import"),n(),t(5,"pre")(6,"code"),e(7,`import {
  C3ExpansionModule,
  C3ExpansionComponent,
  C3ExpansionHeaderComponent
} from 'c3-components';`),n()()(),t(8,"section",0)(9,"h2"),e(10,"C3ExpansionComponent"),n(),t(11,"p"),e(12,"Selector: "),t(13,"code"),e(14,"c3-expansion"),n()(),t(15,"p"),e(16,"Host Class: "),t(17,"code"),e(18,"c3-expansion"),n()(),t(19,"p"),e(20,"An expandable panel component with smooth animations powered by "),t(21,"code"),e(22,"C3AutoAnimateDirective"),n(),e(23,"."),n(),t(24,"h3"),e(25,"Inputs"),n(),t(26,"table",1)(27,"thead")(28,"tr")(29,"th"),e(30,"Name"),n(),t(31,"th"),e(32,"Type"),n(),t(33,"th"),e(34,"Default"),n(),t(35,"th"),e(36,"Description"),n()()(),t(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"headerClass"),n()(),t(42,"td")(43,"code"),e(44,"string"),n()(),t(45,"td")(46,"code"),e(47,"'c3-expansion-header'"),n()(),t(48,"td"),e(49,"CSS class for the header section."),n()(),t(50,"tr")(51,"td")(52,"code"),e(53,"isExpanded"),n()(),t(54,"td")(55,"code"),e(56,"boolean"),n()(),t(57,"td")(58,"code"),e(59,"false"),n()(),t(60,"td"),e(61,"Controls the expanded state. Two-way bindable with "),t(62,"code"),e(63,"[(isExpanded)]"),n(),e(64,"."),n()(),t(65,"tr")(66,"td")(67,"code"),e(68,"options"),n()(),t(69,"td")(70,"code"),e(71,"AutoAnimateOptions | AutoAnimationPlugin"),n()(),t(72,"td")(73,"code"),e(74,"undefined"),n()(),t(75,"td"),e(76,"Animation options passed to the auto-animate directive."),n()()()(),t(77,"h3"),e(78,"Methods"),n(),t(79,"table",1)(80,"thead")(81,"tr")(82,"th"),e(83,"Method"),n(),t(84,"th"),e(85,"Description"),n()()(),t(86,"tbody")(87,"tr")(88,"td")(89,"code"),e(90,"toggleExpand()"),n()(),t(91,"td"),e(92,"Toggles the expanded state."),n()()()(),t(93,"h3"),e(94,"Content Projection"),n(),t(95,"table",1)(96,"thead")(97,"tr")(98,"th"),e(99,"Element"),n(),t(100,"th"),e(101,"Description"),n()()(),t(102,"tbody")(103,"tr")(104,"td")(105,"code"),e(106,"c3-expansion-header"),n()(),t(107,"td"),e(108,"The clickable header section."),n()(),t(109,"tr")(110,"td"),e(111,"Default content"),n(),t(112,"td"),e(113,"The expandable body content."),n()()()()(),t(114,"section",0)(115,"h2"),e(116,"C3ExpansionHeaderComponent"),n(),t(117,"p"),e(118,"Selector: "),t(119,"code"),e(120,"c3-expansion-header"),n()(),t(121,"p"),e(122,"Host Class: "),t(123,"code"),e(124,"c3-expansion-header"),n()(),t(125,"p"),e(126,"Header component that triggers expansion on click."),n(),t(127,"h3"),e(128,"Inputs"),n(),t(129,"table",1)(130,"thead")(131,"tr")(132,"th"),e(133,"Name"),n(),t(134,"th"),e(135,"Type"),n(),t(136,"th"),e(137,"Default"),n(),t(138,"th"),e(139,"Description"),n()()(),t(140,"tbody")(141,"tr")(142,"td")(143,"code"),e(144,"title"),n()(),t(145,"td")(146,"code"),e(147,"string"),n()(),t(148,"td")(149,"code"),e(150,"undefined"),n()(),t(151,"td"),e(152,"Optional title text for the header."),n()(),t(153,"tr")(154,"td")(155,"code"),e(156,"isExpanded"),n()(),t(157,"td")(158,"code"),e(159,"boolean"),n()(),t(160,"td")(161,"code"),e(162,"false"),n()(),t(163,"td"),e(164,"Current expanded state (for styling purposes)."),n()()()(),t(165,"h3"),e(166,"Outputs"),n(),t(167,"table",1)(168,"thead")(169,"tr")(170,"th"),e(171,"Name"),n(),t(172,"th"),e(173,"Type"),n(),t(174,"th"),e(175,"Description"),n()()(),t(176,"tbody")(177,"tr")(178,"td")(179,"code"),e(180,"toggleExpand"),n()(),t(181,"td")(182,"code"),e(183,"void"),n()(),t(184,"td"),e(185,"Emits when the header is clicked to toggle expansion."),n()()()()(),t(186,"section",0)(187,"h2"),e(188,"Usage Example"),n(),t(189,"pre")(190,"code"),e(191,`<c3-expansion [(isExpanded)]="panelOpen">
  <c3-expansion-header [title]="'Click to expand'">
    <!-- Optional custom header content -->
    <mat-icon>expand_more</mat-icon>
  </c3-expansion-header>

  <!-- Expandable content -->
  <div class="panel-content">
    <p>This content is shown when expanded.</p>
  </div>
</c3-expansion>`),n()()(),t(192,"section",0)(193,"h2"),e(194,"Styling"),n(),t(195,"p"),e(196,"Import styles from:"),n(),t(197,"pre")(198,"code"),e(199,"@use 'c3-components/lib/c3-expansion/styles/c3-expansion';"),n()()(),t(200,"section",0)(201,"h2"),e(202,"Usage Notes"),n(),t(203,"ul",2)(204,"li"),e(205,"The expansion animation is powered by "),t(206,"code"),e(207,"@formkit/auto-animate"),n(),e(208,"."),n(),t(209,"li"),e(210,"The header automatically subscribes to toggle the expansion state."),n(),t(211,"li"),e(212,"Use "),t(213,"code"),e(214,"[(isExpanded)]"),n(),e(215," for two-way binding of the expanded state."),n(),t(216,"li"),e(217,"The component uses "),t(218,"code"),e(219,"C3AutoAnimateDirective"),n(),e(220," as a host directive."),n(),t(221,"li"),e(222,"Content is conditionally rendered based on the expanded state."),n()()())},encapsulation:2});let o=i;return o})();var fe=["*"];function Se(o,i){if(o&1&&(a(0,"h4",0),e(1),d()),o&2){let c=H(2);l(),k(" ",c.title()," ")}}function Ce(o,i){if(o&1){let c=j();T(0,Se,2,1,"h4",0),a(1,"button",1),A("click",function(){y(c);let m=H();return w(m.toggleExpand.emit())}),a(2,"mat-icon"),e(3),d()()}if(o&2){let c=H();D(c.title()?0:-1),l(),E("matTooltip",c.isExpanded()?"R\xE9duire":"D\xE9velopper"),l(2),F(c.isExpanded()?"expand_less":"expand_more")}}var x=(()=>{let i=class i{constructor(){this.title=v(),this.isExpanded=v(!1),this.toggleExpand=Y()}get hostClass(){return"c3-expansion-header"}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=p({type:i,selectors:[["c3-expansion-header"]],hostVars:2,hostBindings:function(m,s){m&2&&g(s.hostClass)},inputs:{title:[1,"title"],isExpanded:[1,"isExpanded"]},outputs:{toggleExpand:"toggleExpand"},standalone:!1,ngContentSelectors:fe,decls:2,vars:0,consts:[[1,"text-lg"],["mat-icon-button","",3,"click","matTooltip"]],template:function(m,s){m&1&&(I(),C(0,0,null,Ce,4,3))},dependencies:[P,B,ee],encapsulation:2});let o=i;return o})();var ge=[[["c3-expansion-header"]],"*"],be=["c3-expansion-header","*"];function ve(o,i){o&1&&_(0,"c3-expansion-header")}function Me(o,i){o&1&&(a(0,"div"),C(1,1),d())}var se=(()=>{let i=class i{get hostClass(){return"c3-expansion"}constructor(){this.headerClass=v("c3-expansion-header"),this.isExpanded=$(!1),this._elementRef=L(z),this.header=Z(x),X(()=>{this.expandSubsciption?.unsubscribe(),this.header()?.toggleExpand.subscribe(()=>this.toggleExpand())})}ngOnDestroy(){this.expandSubsciption?.unsubscribe()}toggleExpand(){this.isExpanded.set(!this.isExpanded())}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=p({type:i,selectors:[["c3-expansion"]],contentQueries:function(m,s,u){m&1&&K(u,s.header,x,5),m&2&&W()},hostVars:2,hostBindings:function(m,s){m&2&&g(s.hostClass)},inputs:{headerClass:[1,"headerClass"],isExpanded:[1,"isExpanded"]},outputs:{isExpanded:"isExpandedChange"},standalone:!1,features:[G([{directive:oe,inputs:["options","options"]}])],ngContentSelectors:be,decls:4,vars:3,template:function(m,s){m&1&&(I(ge),a(0,"div"),C(1,0,null,ve,1,0),d(),T(3,Me,2,0,"div")),m&2&&(g(s.headerClass()),l(3),D(s.isExpanded()?3:-1))},dependencies:[x],encapsulation:2});let o=i;return o})();var pe=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=f({type:i}),i.\u0275inj=h({imports:[N,M,V,te,M,O]});let o=i;return o})();var U=()=>({}),ce=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=p({type:i,selectors:[["c3-examples"]],decls:39,vars:10,consts:[["c3Expansion",""],[1,"mb-2","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],[1,"rounded","border"],["title","Example title",1,"bg-blue-800","rounded"],[1,"!justify-between","gap-4","!bg-blue-800","rounded",3,"click"],["mat-icon-button",""]],template:function(m,s){if(m&1){let u=j();a(0,"example-viewer",1)(1,"h4",2),e(2,"Basic Expansion"),d(),a(3,"c3-example-viewer-tab",3)(4,"div")(5,"textarea",4),e(6,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3ExpansionModule } from 'c3-components';

@Component({
  selector: 'c3-example',
  standalone: true,
  imports: [
    C3ExpansionModule,
    CommonModule,
  ],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}
      `),d()()(),a(7,"c3-example-viewer-tab",5)(8,"div")(9,"textarea",6),e(10,`<c3-expansion>
  <c3-expansion-header title="Example title" />

  <div>
    content
  </div>
</c3-expansion>
      `),d()()(),Q(11,7),a(12,"c3-expansion",8),_(13,"c3-expansion-header",9),a(14,"div"),e(15," content "),d()(),R(),d(),a(16,"example-viewer",1)(17,"h4",2),e(18,"Basic Expansion with custome header"),d(),a(19,"c3-example-viewer-tab",3)(20,"div")(21,"textarea",4),e(22,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { C3ExpansionModule } from 'c3-components';

@Component({
  selector: 'c3-example',
  standalone: true,
  imports: [
    C3ExpansionModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}
      `),d()()(),a(23,"c3-example-viewer-tab",5)(24,"div")(25,"textarea",6),e(26),d()()(),Q(27,7),a(28,"c3-expansion",8,0)(30,"c3-expansion-header")(31,"mat-toolbar",10),A("click",function(){y(u);let xe=q(29);return w(xe.toggleExpand())}),a(32,"span"),e(33,"Fichiers re\xE7u"),d(),a(34,"button",11)(35,"mat-icon"),e(36),d()()()(),a(37,"div"),e(38," super content "),d()(),R(),d()}if(m&2){let u=q(29);l(5),E("options",b(6,U)),l(4),E("options",b(7,U)),l(12),E("options",b(8,U)),l(4),E("options",b(9,U)),l(),k(`<c3-expansion #c3Expansion class="rounded border">
  <c3-expansion-header>
    <mat-toolbar
      class="!justify-between gap-4 !bg-blue-800 rounded"
      (click)="c3Expansion.toggleExpand()"
    >
      <span>Fichiers re\xE7u</span>
      <button mat-icon-button>
        <mat-icon>`,u.isExpanded()?"expand_less":"expand_more",`</mat-icon>
      </button>
    </mat-toolbar>
  </c3-expansion-header>

  <div>
    super content
  </div>
</c3-expansion>
      `),l(10),F(u.isExpanded()?"expand_less":"expand_more")}},dependencies:[pe,se,x,ae,me,M,P,O,ie,V,B,ne],encapsulation:2});let o=i;return o})();var we=[{path:"",component:de,children:[{path:"api",component:re},{path:"examples",component:ce},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],Ee=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=f({type:i}),i.\u0275inj=h({imports:[J.forChild(we),J]});let o=i;return o})();var at=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=f({type:i}),i.\u0275inj=h({imports:[N,Ee]});let o=i;return o})();export{at as ExpansionModule};

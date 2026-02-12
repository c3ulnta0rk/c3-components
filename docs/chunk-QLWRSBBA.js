import{a as L}from"./chunk-IP5QXJH5.js";import{b as F,c as N}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as A}from"./chunk-RA7FHYGQ.js";import"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import{i as y}from"./chunk-SU6PRRH7.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{n as g}from"./chunk-7WGNA6AJ.js";import{$b as w,Fc as v,Tb as S,Ub as d,Vb as m,Wb as h,Xb as n,Yb as i,_b as M,bb as u,ca as E,ga as T,ic as x,jc as p,sb as c,tb as f,tc as j,ub as D,wc as t,ya as b}from"./chunk-AGADXNXO.js";var R=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["c3-api"]],decls:165,vars:0,consts:[[1,"api-section"],[1,"api-table"],[1,"notes-list"]],template:function(r,s){r&1&&(n(0,"h1"),t(1,"Trace Card API"),i(),n(2,"section",0)(3,"h2"),t(4,"Import"),i(),n(5,"pre")(6,"code"),t(7,`import {
  C3TraceCardModule,
  C3TraceCardComponent,
  C3TraceCardContentComponent,
  C3TraceCardTitleComponent,
  C3TraceCardAlignLeftDirective,
  C3TraceCardAlignRightDirective
} from 'c3-components';`),i()()(),n(8,"section",0)(9,"h2"),t(10,"C3TraceCardComponent"),i(),n(11,"p"),t(12,"Selector: "),n(13,"code"),t(14,"c3-trace-card"),i()(),n(15,"p"),t(16,"Host Class: "),n(17,"code"),t(18,"c3-trace-card"),i()(),n(19,"p"),t(20,"A card component designed for displaying trace/timeline-like content with left or right alignment."),i(),n(21,"h3"),t(22,"Signals"),i(),n(23,"table",1)(24,"thead")(25,"tr")(26,"th"),t(27,"Name"),i(),n(28,"th"),t(29,"Type"),i(),n(30,"th"),t(31,"Default"),i(),n(32,"th"),t(33,"Description"),i()()(),n(34,"tbody")(35,"tr")(36,"td")(37,"code"),t(38,"align"),i()(),n(39,"td")(40,"code"),t(41,"Signal<'left' | 'right'>"),i()(),n(42,"td")(43,"code"),t(44,"'left'"),i()(),n(45,"td"),t(46,"Alignment of the card. Controlled via directives."),i()()()(),n(47,"h3"),t(48,"Host Bindings"),i(),n(49,"table",1)(50,"thead")(51,"tr")(52,"th"),t(53,"Class"),i(),n(54,"th"),t(55,"Condition"),i()()(),n(56,"tbody")(57,"tr")(58,"td")(59,"code"),t(60,".align-left"),i()(),n(61,"td"),t(62,"When "),n(63,"code"),t(64,"align() === 'left'"),i()()(),n(65,"tr")(66,"td")(67,"code"),t(68,".align-right"),i()(),n(69,"td"),t(70,"When "),n(71,"code"),t(72,"align() === 'right'"),i()()()()(),n(73,"h3"),t(74,"Content Projection"),i(),n(75,"table",1)(76,"thead")(77,"tr")(78,"th"),t(79,"Component"),i(),n(80,"th"),t(81,"Description"),i()()(),n(82,"tbody")(83,"tr")(84,"td")(85,"code"),t(86,"c3-trace-card-title"),i()(),n(87,"td"),t(88,"Title section of the card."),i()(),n(89,"tr")(90,"td")(91,"code"),t(92,"c3-trace-card-content"),i()(),n(93,"td"),t(94,"Main content section of the card."),i()()()()(),n(95,"section",0)(96,"h2"),t(97,"C3TraceCardTitleComponent"),i(),n(98,"p"),t(99,"Selector: "),n(100,"code"),t(101,"c3-trace-card-title"),i()(),n(102,"p"),t(103,"Title component for the trace card. Typically displays a heading or label."),i()(),n(104,"section",0)(105,"h2"),t(106,"C3TraceCardContentComponent"),i(),n(107,"p"),t(108,"Selector: "),n(109,"code"),t(110,"c3-trace-card-content"),i()(),n(111,"p"),t(112,"Content component for the trace card. Contains the main body of the card."),i()(),n(113,"section",0)(114,"h2"),t(115,"Alignment Directives"),i(),n(116,"h3"),t(117,"C3TraceCardAlignLeftDirective"),i(),n(118,"p"),t(119,"Selector: "),n(120,"code"),t(121,"c3-trace-card[align-left]"),i()(),n(122,"p"),t(123,"Sets the card alignment to left."),i(),n(124,"h3"),t(125,"C3TraceCardAlignRightDirective"),i(),n(126,"p"),t(127,"Selector: "),n(128,"code"),t(129,"c3-trace-card[align-right]"),i()(),n(130,"p"),t(131,"Sets the card alignment to right."),i()(),n(132,"section",0)(133,"h2"),t(134,"Usage Example"),i(),n(135,"pre")(136,"code"),t(137,`<!-- Left-aligned card (default) -->
<c3-trace-card>
  <c3-trace-card-title>
    Event Title
  </c3-trace-card-title>
  <c3-trace-card-content>
    <p>Event description and details...</p>
  </c3-trace-card-content>
</c3-trace-card>

<!-- Right-aligned card -->
<c3-trace-card align-right>
  <c3-trace-card-title>
    Another Event
  </c3-trace-card-title>
  <c3-trace-card-content>
    <p>This card is aligned to the right.</p>
  </c3-trace-card-content>
</c3-trace-card>

<!-- Explicit left alignment -->
<c3-trace-card align-left>
  <c3-trace-card-title>
    Third Event
  </c3-trace-card-title>
  <c3-trace-card-content>
    <p>Explicitly aligned left.</p>
  </c3-trace-card-content>
</c3-trace-card>`),i()()(),n(138,"section",0)(139,"h2"),t(140,"Timeline Example"),i(),n(141,"pre")(142,"code"),t(143,`<div class="timeline">
  <c3-trace-card align-left>
    <c3-trace-card-title>January 2024</c3-trace-card-title>
    <c3-trace-card-content>Project started</c3-trace-card-content>
  </c3-trace-card>

  <c3-trace-card align-right>
    <c3-trace-card-title>March 2024</c3-trace-card-title>
    <c3-trace-card-content>First milestone</c3-trace-card-content>
  </c3-trace-card>

  <c3-trace-card align-left>
    <c3-trace-card-title>June 2024</c3-trace-card-title>
    <c3-trace-card-content>Release v1.0</c3-trace-card-content>
  </c3-trace-card>
</div>`),i()()(),n(144,"section",0)(145,"h2"),t(146,"Usage Notes"),i(),n(147,"ul",2)(148,"li"),t(149,"The alignment directives are standalone and can be imported individually."),i(),n(150,"li"),t(151,"The "),n(152,"code"),t(153,"align"),i(),t(154," signal is automatically set by the directives in the constructor."),i(),n(155,"li"),t(156,"Use CSS to style the timeline connector line between cards."),i(),n(157,"li"),t(158,"Both "),n(159,"code"),t(160,"align-left"),i(),t(161," and "),n(162,"code"),t(163,"align-right"),i(),t(164," are attribute directives."),i()()())},encapsulation:2});let o=e;return o})();var J=[[["c3-trace-card-content"]],[["c3-trace-card-title"]]],W=["c3-trace-card-content","c3-trace-card-title"],C=(()=>{let e=class e{constructor(){this.align=b("left")}get alignLeft(){return this.align()==="left"}get alignRight(){return this.align()==="right"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["c3-trace-card"]],hostAttrs:[1,"c3-trace-card"],hostVars:4,hostBindings:function(r,s){r&2&&j("align-left",s.alignLeft)("align-right",s.alignRight)},standalone:!1,ngContentSelectors:W,decls:4,vars:0,consts:[[1,"content"],[1,"horizontal-line"]],template:function(r,s){r&1&&(x(J),d(0,"div",0),h(1,"div",1),p(2),m(),p(3,1))},styles:[`.c3-trace-card{--c3-trace-card-border-color: rgba(0, 0, 0, .12);display:flex;flex-direction:row;justify-content:space-between;align-items:start;font-size:14px}.c3-trace-card.align-right{flex-direction:row-reverse}.c3-trace-card c3-trace-card-title{padding:.5rem 1rem;font-size:1.5rem;line-height:2rem;border:var(--c3-trace-card-border-color) solid 1px;border-radius:1rem;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.c3-trace-card .content{display:flex;flex-direction:column;flex-grow:1}.c3-trace-card .content .horizontal-line{margin-top:25px;height:1px;background-color:var(--c3-trace-card-border-color)}
`],encapsulation:2});let o=e;return o})();var q=["*"],H=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["c3-trace-card-title"]],hostAttrs:[1,"c3-trace-card-title"],standalone:!1,ngContentSelectors:q,decls:1,vars:0,template:function(r,s){r&1&&(x(),p(0))},encapsulation:2});let o=e;return o})();var K=["*"],z=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["c3-trace-card-content"]],hostAttrs:[1,"c3-trace-card-content"],standalone:!1,ngContentSelectors:K,decls:1,vars:0,template:function(r,s){r&1&&(x(),p(0))},encapsulation:2});let o=e;return o})();var B=(()=>{let e=class e{constructor(){this.c3CardTitle=T(C,{self:!0}),this.c3CardTitle.align.set("right")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=D({type:e,selectors:[["c3-trace-card","align-right",""]]});let o=e;return o})();var I=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=E({imports:[g]});let o=e;return o})();var P=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["c3-example-trace-card-simple"]],decls:5,vars:0,consts:[["align-right",""]],template:function(r,s){r&1&&(d(0,"c3-trace-card",0)(1,"c3-trace-card-title"),t(2," coucou "),m(),d(3,"c3-trace-card-content"),t(4," content "),m()())},dependencies:[I,C,H,z,B],styles:["[_nghost-%COMP%]{display:block}"]});let o=e;return o})();var U=()=>({}),k=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["c3-examples"]],decls:15,vars:4,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""]],template:function(r,s){r&1&&(d(0,"p",0),t(1,"Composant pour afficher une carte avec un titre et un contenu connect\xE9s par une ligne horizontale"),m(),d(2,"example-viewer",1)(3,"h4",2),t(4,"Exemple "),m(),d(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),t(8,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3TraceCardModule } from 'c3-components';

@Component({
  selector: 'c3-example-trace-card',
  standalone: true,
  imports: [CommonModule, C3TraceCardModule],
  templateUrl: './example-trace-card.component.html',
  styleUrl: './example-trace-card.component.scss',
})
export class ExampleTraceCardComponent {}
      `),m()()(),d(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),t(12,`<c3-trace-card align-right>
  <c3-trace-card-title>
    coucou
  </c3-trace-card-title>

  <c3-trace-card-content>
    content
  </c3-trace-card-content>
</c3-trace-card>
      `),m()()(),M(13,7),h(14,"c3-example-trace-card-simple"),w(),m()),r&2&&(u(7),S("options",v(2,U)),u(4),S("options",v(3,U)))},dependencies:[P,N,F,A],encapsulation:2});let o=e;return o})();var Y=[{path:"",component:L,children:[{path:"api",component:R},{path:"examples",component:k},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],V=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=E({imports:[y.forChild(Y),y]});let o=e;return o})();var vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=E({imports:[g,V]});let o=e;return o})();export{vt as TraceCardModule};

import{a as D,b as T,c as F}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as P}from"./chunk-RA7FHYGQ.js";import{a as w,c as k,e as O}from"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{n as S}from"./chunk-7WGNA6AJ.js";import{$b as g,Fc as d,Qb as C,Rb as A,Sb as E,Tb as s,Ub as e,Vb as i,_b as u,bb as a,bc as M,fc as c,hc as y,oa as h,pa as f,sb as _,wc as t,xc as I,ya as b}from"./chunk-AGADXNXO.js";var v=()=>({}),$=()=>({duration:500,easing:"ease-in-out"});function B(r,o){if(r&1){let p=M();e(0,"li",8)(1,"span"),t(2),i(),e(3,"button",14),c("click",function(){let m=h(p).$index,l=y();return f(l.removeItem(m))}),t(4,"\xD7"),i()()}if(r&2){let p=o.$implicit;a(2),I(p)}}var W=(()=>{let o=class o{constructor(){this.items=b(["Item 1","Item 2","Item 3"])}addItem(){this.items.update(n=>[...n,`Item ${n.length+1}`])}removeItem(n){this.items.update(m=>m.filter((l,x)=>x!==n))}shuffleItems(){this.items.update(n=>[...n].sort(()=>Math.random()-.5))}};o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=_({type:o,selectors:[["c3-auto-animate-examples"]],decls:90,vars:8,consts:[[1,"description"],["href","https://auto-animate.formkit.com/","target","_blank","rel","noopener"],["title",""],["example",""],[1,"demo-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],["c3AutoAnimate","",1,"demo-list"],[1,"demo-item"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["c3AutoAnimate","",1,"demo-box",3,"options"],["mat-icon-button","","aria-label","Remove",3,"click"]],template:function(m,l){m&1&&(e(0,"h1"),t(1,"Auto Animate"),i(),e(2,"p",0),t(3," A directive that automatically animates DOM changes using "),e(4,"a",1),t(5,"FormKit AutoAnimate"),i(),t(6,`. Simply add the directive to a parent element and any additions, removals, or moves of child elements will be animated smoothly.
`),i(),e(7,"example-viewer")(8,"h4",2),t(9,"Basic List Animation"),i(),u(10,3),e(11,"div",4)(12,"button",5),c("click",function(){return l.addItem()}),t(13,"Add Item"),i(),e(14,"button",6),c("click",function(){return l.shuffleItems()}),t(15,"Shuffle"),i()(),e(16,"ul",7),A(17,B,5,1,"li",8,C),i(),g(),e(19,"c3-example-viewer-tab",9)(20,"div")(21,"textarea",10),t(22,"<"),t(23,"ul c3AutoAnimate>"),t(24,`
  @`),t(25,"for (item of items(); track item; let i = $index) {"),t(26,`
    <`),t(27,"li>"),t(28,`
      <`),t(29,"span>"),t(30,"{"),t(31,"{"),t(32," item }"),t(33,"}"),t(34,"<"),t(35,"/span>"),t(36,`
      <`),t(37,'button (click)="removeItem(i)">'),t(38,"\xD7<"),t(39,"/button>"),t(40,`
    <`),t(41,"/li>"),t(42,`
  }`),t(43,`
<`),t(44,"/ul>"),t(45,`
      `),i()()(),e(46,"c3-example-viewer-tab",11)(47,"div")(48,"textarea",12),t(49,"import {"),t(50," Component, signal }"),t(51," from '@"),t(52,`angular/core';
import {`),t(53," C3AutoAnimateDirective }"),t(54,` from 'c3-components';

@`),t(55,"Component({"),t(56,`
  selector: 'app-example',
  standalone: true,
  imports: [C3AutoAnimateDirective],
  templateUrl: './example.component.html',
}`),t(57,`)
export class ExampleComponent {`),t(58,`
  items = signal<`),t(59,"string[]>"),t(60,`(['Item 1', 'Item 2', 'Item 3']);

  addItem(): void {`),t(61,`
    this.items.update(items =>`),t(62," [...items, `Item ${"),t(63,"items.length + 1}"),t(64,"`]);\n  }"),t(65,`

  removeItem(index: number): void {`),t(66,`
    this.items.update(items =>`),t(67," items.filter((_, i) =>"),t(68,` i !== index));
  }`),t(69,`
}`),t(70,`
      `),i()()()(),e(71,"example-viewer")(72,"h4",2),t(73,"With Custom Options"),i(),u(74,3),e(75,"div",13)(76,"p"),t(77,"This container has custom animation duration and easing."),i()(),g(),e(78,"c3-example-viewer-tab",9)(79,"div")(80,"textarea",10),t(81,"<"),t(82,'div c3AutoAnimate [options]="{'),t(83," duration: 500, easing: 'ease-in-out' }"),t(84,'">'),t(85,`
  <`),t(86,"!-- Content here will animate with custom settings -->"),t(87,`
<`),t(88,"/div>"),t(89,`
      `),i()()()()),m&2&&(a(17),E(l.items()),a(4),s("options",d(4,v)),a(27),s("options",d(5,v)),a(27),s("options",d(6,$)),a(5),s("options",d(7,v)))},dependencies:[S,O,k,w,F,T,P,D],styles:[".description[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:2rem}.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--c3-accent)}.demo-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-bottom:1rem}.demo-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.demo-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--border-radius-md);margin-bottom:.5rem}.demo-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.demo-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32px;height:32px;min-width:32px;padding:0;font-size:1.25rem;line-height:1}.demo-box[_ngcontent-%COMP%]{padding:1rem;background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--border-radius-md)}.demo-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]});let r=o;return r})();export{W as AutoAnimateExamplesComponent};

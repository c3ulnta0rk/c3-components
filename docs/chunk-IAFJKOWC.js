import{b as u,c as C}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as x}from"./chunk-RA7FHYGQ.js";import{e as g}from"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{n as v}from"./chunk-7WGNA6AJ.js";import{$b as s,Fc as a,Tb as r,Ub as t,Vb as n,_b as m,bb as o,sb as d,wc as e}from"./chunk-AGADXNXO.js";var c=()=>({}),y=(()=>{let i=class i{constructor(){this.parentClicked=!1}onParentClick(){this.parentClicked=!0,setTimeout(()=>this.parentClicked=!1,1e3)}};i.\u0275fac=function(p){return new(p||i)},i.\u0275cmp=d({type:i,selectors:[["c3-prevent-event-examples"]],decls:38,vars:8,consts:[[1,"description"],["title",""],["example",""],[1,"note"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(p,h){p&1&&(t(0,"h1"),e(1,"Prevent Event Directives"),n(),t(2,"p",0),e(3,` A collection of directives to prevent default browser actions and stop event propagation. Useful for preventing unwanted navigation or event bubbling in complex UI scenarios.
`),n(),t(4,"example-viewer")(5,"h4",1),e(6,"Prevent Click"),n(),m(7,2),t(8,"p",3),e(9," The "),t(10,"code"),e(11,"c3-prevent-click"),n(),e(12," directive prevents the default action and stops propagation. "),n(),s(),t(13,"c3-example-viewer-tab",4)(14,"div")(15,"textarea",5),e(16,`<!-- Prevents link navigation and stops propagation -->
<a href="https://google.com" c3-prevent-click>
  Click me - I won't navigate!
</a>

<!-- Useful inside clickable containers -->
<div (click)="onContainerClick()">
  <button c3-prevent-click>
    Click me - Parent won't receive the event
  </button>
</div>
      `),n()()(),t(17,"c3-example-viewer-tab",6)(18,"div")(19,"textarea",7),e(20,`import { Component } from '@angular/core';
import { C3PreventClickDirective } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3PreventClickDirective],
  template: \`
    <a href="https://google.com" c3-prevent-click>
      Click me - I won't navigate!
    </a>
  \`
})
export class ExampleComponent {}
      `),n()()()(),t(21,"example-viewer")(22,"h4",1),e(23,"Stop Click Propagation"),n(),m(24,2),t(25,"p",3),e(26," The "),t(27,"code"),e(28,"c3-stop-click-propagation"),n(),e(29," directive only stops immediate propagation, without preventing the default action. "),n(),s(),t(30,"c3-example-viewer-tab",4)(31,"div")(32,"textarea",5),e(33,`<!-- Stops propagation but allows default action -->
<div (click)="onParentClick()">
  Parent container
  <a href="/docs" c3-stop-click-propagation>
    Click me - I'll navigate, but parent won't be notified
  </a>
</div>
      `),n()()(),t(34,"c3-example-viewer-tab",6)(35,"div")(36,"textarea",7),e(37,`import { Component } from '@angular/core';
import { C3StopPropagationDirective } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3StopPropagationDirective],
  template: \`...\`
})
export class ExampleComponent {}
      `),n()()()()),p&2&&(o(15),r("options",a(4,c)),o(4),r("options",a(5,c)),o(13),r("options",a(6,c)),o(4),r("options",a(7,c)))},dependencies:[v,g,C,u,x],styles:[".description[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:2rem}.note[_ngcontent-%COMP%]{padding:1rem;background:var(--surface-elevated);border-left:3px solid var(--c3-accent);border-radius:var(--border-radius-md);color:var(--text-secondary);margin:0}.note[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:var(--text-sm)}"]});let l=i;return l})();export{y as PreventEventExamplesComponent};

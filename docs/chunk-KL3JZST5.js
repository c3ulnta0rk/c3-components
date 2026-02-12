import{b as x,c as u}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as f}from"./chunk-RA7FHYGQ.js";import"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{n as d}from"./chunk-7WGNA6AJ.js";import{$b as c,Fc as l,Tb as m,Ub as t,Vb as n,_b as s,bb as a,sb as p,wc as e}from"./chunk-AGADXNXO.js";var h=()=>({}),y=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=p({type:i,selectors:[["c3-safe-url-examples"]],decls:25,vars:4,consts:[[1,"description"],["title",""],["example",""],[1,"note"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(r,S){r&1&&(t(0,"h1"),e(1,"Safe URL"),n(),t(2,"p",0),e(3," A pipe that sanitizes URLs for use in "),t(4,"code"),e(5,"iframe"),n(),e(6,", "),t(7,"code"),e(8,"embed"),n(),e(9,", or "),t(10,"code"),e(11,"object"),n(),e(12," elements. Uses Angular's DomSanitizer to bypass security for trusted resource URLs. "),n(),t(13,"example-viewer")(14,"h4",1),e(15,"Basic Usage"),n(),s(16,2),t(17,"p",3),e(18,"Use this pipe when embedding trusted external content."),n(),c(),t(19,"c3-example-viewer-tab",4)(20,"textarea",5),e(21,`<iframe [src]="pdfUrl | c3SafeUrl" width="100%" height="500"></iframe>
<iframe [src]="videoUrl | c3SafeUrl" width="100%" height="315"></iframe>
        `),n()(),t(22,"c3-example-viewer-tab",6)(23,"textarea",7),e(24,`import { Component } from '@angular/core';
import { C3SafeUrlPipe } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3SafeUrlPipe],
  template: \`<iframe [src]="pdfUrl | c3SafeUrl"></iframe>\`
})
export class ExampleComponent {
  pdfUrl = 'https://example.com/document.pdf';
}
        `),n()()()),r&2&&(a(20),m("options",l(2,h)),a(3),m("options",l(3,h)))},dependencies:[d,u,x,f],styles:[".description[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:2rem}.note[_ngcontent-%COMP%]{padding:1rem;background:var(--surface-elevated);border-left:3px solid var(--c3-accent);border-radius:var(--border-radius-md);color:var(--text-secondary);margin:0}"]});let o=i;return o})();export{y as SafeUrlExamplesComponent};

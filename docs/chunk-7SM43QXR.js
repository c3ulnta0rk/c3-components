import{b as g,c as v}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as u}from"./chunk-RA7FHYGQ.js";import"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{n as d}from"./chunk-7WGNA6AJ.js";import{$b as m,Fc as p,Tb as s,Ub as t,Vb as n,_b as c,bb as a,sb as l,wc as i}from"./chunk-AGADXNXO.js";var b=()=>({}),E=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["c3-signals-examples"]],decls:13,vars:2,consts:[[1,"description"],["title",""],["example",""],[1,"note"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"]],template:function(o,f){o&1&&(t(0,"h1"),i(1,"C3 Signal"),n(),t(2,"p",0),i(3," A wrapper around Angular signals that also exposes an RxJS Subject for reactive subscriptions. Bridges the gap between signals and observables. "),n(),t(4,"example-viewer")(5,"h4",1),i(6,"Basic Usage"),n(),c(7,2),t(8,"p",3),i(9,"C3Signal combines Angular signals with RxJS observables."),n(),m(),t(10,"c3-example-viewer-tab",4)(11,"textarea",5),i(12,`import { c3Signal } from 'c3-components';

// Create a C3Signal
const counter = c3Signal(0);

// Get current value (like a signal)
console.log(counter.get()); // 0

// Set value
counter.value = 5;

// Update with function
counter.update(v => v + 1);

// Subscribe to changes (RxJS)
counter.value$.subscribe(value => {
  console.log('Value changed:', value);
});
        `),n()()()),o&2&&(a(11),s("options",p(1,b)))},dependencies:[d,v,g,u],styles:[".description[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:2rem}.note[_ngcontent-%COMP%]{padding:1rem;background:var(--surface-elevated);border-left:3px solid var(--c3-accent);border-radius:var(--border-radius-md);color:var(--text-secondary);margin:0}"]});let r=e;return r})();export{E as SignalsExamplesComponent};

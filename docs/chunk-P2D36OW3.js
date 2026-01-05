import{b as u,c as g}from"./chunk-OU3IZBA3.js";import"./chunk-ROMPVTZG.js";import"./chunk-MBJBYIEM.js";import"./chunk-ENUS3AYZ.js";import{a as f}from"./chunk-OEYL6T2Z.js";import"./chunk-PEQUY4GQ.js";import"./chunk-OBP7XN6Z.js";import"./chunk-2I6A6QTS.js";import"./chunk-D2JVOI32.js";import"./chunk-24HI4LVF.js";import"./chunk-QFITDM3P.js";import{n as c}from"./chunk-5WXWLFM7.js";import{Ac as l,Sb as p,Tb as n,Ub as e,Zb as s,_b as m,ab as a,rb as d,vc as t}from"./chunk-RCGMRQ6T.js";var x=()=>({}),S=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["c3-pdf-viewer-examples"]],decls:37,vars:4,consts:[[1,"description"],["title",""],["example",""],[1,"note"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],[1,"setup-steps"]],template:function(r,C){r&1&&(n(0,"h1"),t(1,"PDF Viewer"),e(),n(2,"p",0),t(3,` A standalone PDF viewer component built on top of PDF.js, providing a complete viewing experience with navigation controls, zoom, and page controls.
`),e(),n(4,"example-viewer")(5,"h4",1),t(6,"Basic Usage"),e(),s(7,2),n(8,"p",3),t(9," Requires PDF.js worker files to be available in your assets folder. See the API section for setup instructions. "),e(),m(),n(10,"c3-example-viewer-tab",4)(11,"div")(12,"textarea",5),t(13,`<pdf-viewer-container [src]="pdfUrl" />
      `),e()()(),n(14,"c3-example-viewer-tab",6)(15,"div")(16,"textarea",7),t(17,`import { Component } from '@angular/core';
import { PdfViewerContainerComponent } from 'c3-components';

@Component({
  selector: 'app-pdf-example',
  standalone: true,
  imports: [PdfViewerContainerComponent],
  template: \`<pdf-viewer-container [src]="pdfUrl" />\`
})
export class PdfExampleComponent {
  pdfUrl = 'assets/documents/sample.pdf';
}
      `),e()()()(),n(18,"example-viewer")(19,"h4",1),t(20,"Setup Instructions"),e(),s(21,2),n(22,"div",8)(23,"p")(24,"strong"),t(25,"1."),e(),t(26," Copy PDF.js worker files to your assets:"),e(),n(27,"pre")(28,"code"),t(29,`// angular.json assets array
"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/pdfjs-dist/build/",
    "output": "/pdfjs/"
  }
]`),e()(),n(30,"p")(31,"strong"),t(32,"2."),e(),t(33," Configure the worker path in your app:"),e(),n(34,"pre")(35,"code"),t(36,`import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';`),e()()(),m(),e()),r&2&&(a(12),p("options",l(2,x)),a(4),p("options",l(3,x)))},dependencies:[c,g,u,f],styles:[".description[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:2rem}.note[_ngcontent-%COMP%]{padding:1rem;background:var(--surface-elevated);border-left:3px solid var(--c3-accent);border-radius:var(--border-radius-md);color:var(--text-secondary);margin:0}.setup-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:1rem 0 .5rem}.setup-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-top:0}.setup-steps[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--code-bg);padding:1rem;border-radius:var(--border-radius-md);overflow-x:auto}.setup-steps[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:var(--code-text);background:transparent;font-size:var(--text-sm)}"]});let i=o;return i})();export{S as PdfViewerExamplesComponent};

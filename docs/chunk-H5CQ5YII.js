import{a as O,b as T,c as C,d as y,e as v,f as x}from"./chunk-JCPNHGX5.js";import"./chunk-IHLRU4DX.js";import"./chunk-3EUK4EJI.js";import{b as z,c as H}from"./chunk-IGHIKPM7.js";import{p as N}from"./chunk-IQEWDOWY.js";import"./chunk-O2VT6O52.js";import{c as j,d as k}from"./chunk-GE74CIZ5.js";import"./chunk-AWLEKEVE.js";import{d as w,n as E}from"./chunk-XO7UL54F.js";import{l as B}from"./chunk-C6OSHIVD.js";import{Ob as l,Pb as r,Qb as i,Rb as h,Sb as M,Tb as S,Vb as F,Wb as V,_a as p,_b as D,ba as b,fa as d,gd as I,pb as m,pc as o,qb as u,uc as c}from"./chunk-RPEIJ3SN.js";var U=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["c3-api"]],decls:3,vars:0,template:function(t,s){t&1&&(M(0,"p"),o(1,"api works!"),S(),o(2,`,
`))},styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var $=(()=>{let e=class e{constructor(){this.fileViewer=new C({files:v,config:x,client:d(w)})}handleEvent(a){switch(console.log(`${a?.name} has been clicked on img ${a?.fileUrl}`),a?.name){case"print":console.log("run print logic");break}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["basic-viewer"]],decls:1,vars:2,consts:[[3,"customFileEvent","fileViewer","screenHeightOccupied"]],template:function(t,s){t&1&&(r(0,"c3-file-viewer",0),D("customFileEvent",function(Z){return s.handleEvent(Z)}),i()),t&2&&l("fileViewer",s.fileViewer)("screenHeightOccupied",0)},dependencies:[y,O],encapsulation:2});let n=e;return n})();var A=(()=>{let e=class e{constructor(){this.fileViewer=new C({files:v,config:x,client:d(w)})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["dialog-viewer"]],decls:3,vars:1,consts:[[3,"fileViewer"],["mat-raised-button","","color","primary"]],template:function(t,s){t&1&&(r(0,"c3-file-viewer-dialog",0)(1,"button",1),o(2,"Open Dialog"),i()()),t&2&&l("fileViewer",s.fileViewer)},dependencies:[y,T,k,j],encapsulation:2});let n=e;return n})();var f=()=>({}),K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["c3-examples"]],decls:36,vars:12,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","CrabbyImg.ts"],["example",""]],template:function(t,s){t&1&&(r(0,"p",0),o(1,"Component Viewer for file, video and pdf"),i(),r(2,"example-viewer",1)(3,"h4",2),o(4,"Basic viewer for images"),i(),r(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),o(8,`import { Component } from '@angular/core';
import {
  C3FileViewerConfig,
  C3FileViewer,
  CustomFileEvent,
  C3FileViewerModule,
} from 'c3-components';
import { crabbyImgs } from '../../files';

@Component({
  selector: 'basic-viewer',
  standalone: true,
  imports: [C3FileViewerModule],
  templateUrl: './basic-viewer.component.html',
  styleUrls: ['./basic-viewer.component.scss'],
})
export class BasicViewerComponent {
  public config: C3FileViewerConfig = {
    btnContainerClass: 'other',
    btnClass: 'btn btn-hover-primary px-1',
    btnSubClass: 'material-icons font-size-xl',
    zoomFactor: 0.1,
    wheelZoom: true,
    allowFullscreen: true,
    allowKeyboardNavigation: true,
    height: '640px',
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: false,
      prev: false,
      reset: true,
    },
    btnIcons: {
      next: {
        text: 'navigate_next',
      },
      prev: {
        text: 'navigate_before',
      },
    },
    customBtns: [],
  };

  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: this.config,
  });

  handleEvent(event: CustomFileEvent) {
    console.log(\`\${event?.name} has been clicked on img \${event?.fileUrl}\`);

    switch (event?.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
      `),i()()(),r(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),o(12,`<c3-file-viewer
  [fileViewer]="fileViewer"
  [screenHeightOccupied]="0"
  (customFileEvent)="handleEvent($event)"
>
</c3-file-viewer>
      `),i()()(),r(13,"c3-example-viewer-tab",7)(14,"div")(15,"textarea",4),o(16,`import { FileMetadata } from 'c3-components';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
  },
  {
    name: 'Crabby - 5',
    type: 'image/png',
    location: 'img/crabby-5.png',
  },
  {
    name: 'Crabby - 6',
    type: 'image/png',
    location: 'img/crabby-6.png',
  },
];
      `),i()()(),F(17,8),h(18,"basic-viewer"),V(),i(),r(19,"example-viewer",1)(20,"h4",2),o(21,"Dialog Viewer"),i(),r(22,"c3-example-viewer-tab",3)(23,"div")(24,"textarea",4),o(25,`import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3FileViewerConfig,
  C3FileViewer,
  C3FileViewerModule,
} from 'c3-components';
import { crabbyImgs } from '../../files';

@Component({
  selector: 'dialog-viewer',
  standalone: true,
  imports: [C3FileViewerModule, MatButtonModule],
  templateUrl: './dialog-viewer.component.html',
  styleUrls: ['./dialog-viewer.component.scss'],
})
export class DialogViewerComponent {
  public config: C3FileViewerConfig = {
    btnContainerClass: 'other',
    btnClass: 'btn btn-hover-primary px-1',
    btnSubClass: 'material-icons font-size-xl',
    zoomFactor: 0.1,
    wheelZoom: true,
    allowFullscreen: true,
    allowKeyboardNavigation: true,
    height: '640px',
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: false,
      prev: false,
      reset: true,
    },
    btnIcons: {
      next: {
        text: 'navigate_next',
      },
      prev: {
        text: 'navigate_before',
      },
    },
    customBtns: [],
  };

  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: this.config,
  });
}
      `),i()()(),r(26,"c3-example-viewer-tab",5)(27,"div")(28,"textarea",6),o(29,`<c3-file-viewer-dialog [fileViewer]="fileViewer">
  <button mat-raised-button color="primary">Open Dialog</button>
</c3-file-viewer-dialog>
      `),i()()(),r(30,"c3-example-viewer-tab",7)(31,"div")(32,"textarea",4),o(33,`import { FileMetadata } from 'c3-components';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
  },
  {
    name: 'Crabby - 5',
    type: 'image/png',
    location: 'img/crabby-5.png',
  },
  {
    name: 'Crabby - 6',
    type: 'image/png',
    location: 'img/crabby-6.png',
  },
];
      `),i()()(),F(34,8),h(35,"dialog-viewer"),V(),i()),t&2&&(p(7),l("options",c(6,f)),p(4),l("options",c(7,f)),p(4),l("options",c(8,f)),p(9),l("options",c(9,f)),p(4),l("options",c(10,f)),p(4),l("options",c(11,f)))},dependencies:[$,A,H,z,B],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var J=[{path:"",component:N,children:[{path:"api",component:U},{path:"examples",component:K},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],P=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=b({imports:[E.forChild(J),E]});let n=e;return n})();var he=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=b({imports:[I,P]});let n=e;return n})();export{he as FileViewerModule};

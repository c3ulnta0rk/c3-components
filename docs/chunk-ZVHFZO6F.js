import{a as B,b as O,c as v,d as x,e as h,f as F}from"./chunk-AWWEKCVB.js";import"./chunk-V2W7XTCA.js";import{n as T,o as z,p as H}from"./chunk-RFZF74G4.js";import{n as k}from"./chunk-HKIQNM75.js";import{G as I,J as j}from"./chunk-FEMR6DLU.js";import{a as y,m as S}from"./chunk-RKYAZ433.js";import{Ab as l,Kb as o,Lb as i,Mb as V,Nb as M,Ob as E,Sb as D,ad as g,da as b,dc as r,eb as c,hc as p,ia as w,ic as s,ma as m,na as C}from"./chunk-SKJHGEYD.js";var N=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["c3-api"]],standalone:!0,features:[p],decls:3,vars:0,template:function(t,f){t&1&&(o(0,"p"),r(1,"api works!"),i(),r(2,`,
`))},dependencies:[g],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var U=(()=>{let e=class e{constructor(){this.fileViewer=new v({files:h,config:F,client:w(y)})}handleEvent(a){switch(console.log(`${a?.name} has been clicked on img ${a?.fileUrl}`),a?.name){case"print":console.log("run print logic");break}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["basic-viewer"]],standalone:!0,features:[p],decls:1,vars:2,consts:[[3,"customFileEvent","fileViewer","screenHeightOccupied"]],template:function(t,f){t&1&&(o(0,"c3-file-viewer",0),D("customFileEvent",function(P){return f.handleEvent(P)}),i()),t&2&&l("fileViewer",f.fileViewer)("screenHeightOccupied",0)},dependencies:[x,B]});let n=e;return n})();var $=(()=>{let e=class e{constructor(){this.fileViewer=new v({files:h,config:F,client:w(y)})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["dialog-viewer"]],standalone:!0,features:[p],decls:3,vars:1,consts:[[3,"fileViewer"],["mat-raised-button","","color","primary"]],template:function(t,f){t&1&&(o(0,"c3-file-viewer-dialog",0)(1,"button",1),r(2,"Open Dialog"),i()()),t&2&&l("fileViewer",f.fileViewer)},dependencies:[x,O,j,I]});let n=e;return n})();var d=()=>({}),A=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["c3-examples"]],standalone:!0,features:[p],decls:36,vars:12,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","CrabbyImg.ts"],["example",""]],template:function(t,f){t&1&&(o(0,"p",0),r(1,"Component Viewer for file, video and pdf"),i(),o(2,"example-viewer",1)(3,"h4",2),r(4,"Basic viewer for images"),i(),o(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),r(8,`import { Component } from '@angular/core';
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
      `),i()()(),o(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),r(12,`<c3-file-viewer
  [fileViewer]="fileViewer"
  [screenHeightOccupied]="0"
  (customFileEvent)="handleEvent($event)"
>
</c3-file-viewer>
      `),i()()(),o(13,"c3-example-viewer-tab",7)(14,"div")(15,"textarea",4),r(16,`import { FileMetadata } from 'c3-components';

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
      `),i()()(),M(17,8),V(18,"basic-viewer"),E(),i(),o(19,"example-viewer",1)(20,"h4",2),r(21,"Dialog Viewer"),i(),o(22,"c3-example-viewer-tab",3)(23,"div")(24,"textarea",4),r(25,`import { Component } from '@angular/core';
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
      `),i()()(),o(26,"c3-example-viewer-tab",5)(27,"div")(28,"textarea",6),r(29,`<c3-file-viewer-dialog [fileViewer]="fileViewer">
  <button mat-raised-button color="primary">Open Dialog</button>
</c3-file-viewer-dialog>
      `),i()()(),o(30,"c3-example-viewer-tab",7)(31,"div")(32,"textarea",4),r(33,`import { FileMetadata } from 'c3-components';

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
      `),i()()(),M(34,8),V(35,"dialog-viewer"),E(),i()),t&2&&(c(7),l("options",s(6,d)),c(4),l("options",s(7,d)),c(4),l("options",s(8,d)),c(9),l("options",s(9,d)),c(4),l("options",s(10,d)),c(4),l("options",s(11,d)))},dependencies:[U,g,$,z,T,k],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var Z=[{path:"",component:H,children:[{path:"api",component:N},{path:"examples",component:A},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e}),e.\u0275inj=b({imports:[S.forChild(Z),S]});let n=e;return n})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e}),e.\u0275inj=b({imports:[g,K]});let n=e;return n})();export{Fe as FileViewerModule};

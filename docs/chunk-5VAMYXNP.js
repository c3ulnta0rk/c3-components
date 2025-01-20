import{a as j,b as k,c as C,d as y,e as v,f as x}from"./chunk-XVQ6HCCK.js";import"./chunk-UXSI7XYG.js";import"./chunk-37J6S5KT.js";import{b as B,c as _}from"./chunk-H6ZEXU62.js";import{p as O}from"./chunk-RWQ2AXW7.js";import{n as I}from"./chunk-7BZJT4RK.js";import"./chunk-ZSSD5RUB.js";import{a as D,d as S}from"./chunk-TU7CQMX5.js";import"./chunk-7T6WRIRU.js";import{a as w,m as M}from"./chunk-DIDNN7OT.js";import{$b as E,$c as s,Jb as a,Tb as i,Ub as t,Vb as h,Wb as V,Xb as F,ba as d,bb as m,ga as u,mc as o,qc as p,rb as l,sb as b}from"./chunk-VX4SSQKW.js";var T=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["c3-api"]],decls:3,vars:0,template:function(n,c){n&1&&(i(0,"p"),o(1,"api works!"),t(),o(2,`,
`))},dependencies:[s],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var z=(()=>{class e{constructor(){this.fileViewer=new C({files:v,config:x,client:u(w)})}handleEvent(r){switch(console.log(`${r?.name} has been clicked on img ${r?.fileUrl}`),r?.name){case"print":console.log("run print logic");break}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["basic-viewer"]],decls:1,vars:2,consts:[[3,"customFileEvent","fileViewer","screenHeightOccupied"]],template:function(n,c){n&1&&(i(0,"c3-file-viewer",0),E("customFileEvent",function(U){return c.handleEvent(U)}),t()),n&2&&a("fileViewer",c.fileViewer)("screenHeightOccupied",0)},dependencies:[y,j],encapsulation:2})}}return e})();var H=(()=>{class e{constructor(){this.fileViewer=new C({files:v,config:x,client:u(w)})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["dialog-viewer"]],decls:3,vars:1,consts:[[3,"fileViewer"],["mat-raised-button","","color","primary"]],template:function(n,c){n&1&&(i(0,"c3-file-viewer-dialog",0)(1,"button",1),o(2,"Open Dialog"),t()()),n&2&&a("fileViewer",c.fileViewer)},dependencies:[y,k,S,D],encapsulation:2})}}return e})();var f=()=>({}),N=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["c3-examples"]],decls:36,vars:12,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","CrabbyImg.ts"],["example",""]],template:function(n,c){n&1&&(i(0,"p",0),o(1,"Component Viewer for file, video and pdf"),t(),i(2,"example-viewer",1)(3,"h4",2),o(4,"Basic viewer for images"),t(),i(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),o(8,`import { Component } from '@angular/core';
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
      `),t()()(),i(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),o(12,`<c3-file-viewer
  [fileViewer]="fileViewer"
  [screenHeightOccupied]="0"
  (customFileEvent)="handleEvent($event)"
>
</c3-file-viewer>
      `),t()()(),i(13,"c3-example-viewer-tab",7)(14,"div")(15,"textarea",4),o(16,`import { FileMetadata } from 'c3-components';

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
      `),t()()(),V(17,8),h(18,"basic-viewer"),F(),t(),i(19,"example-viewer",1)(20,"h4",2),o(21,"Dialog Viewer"),t(),i(22,"c3-example-viewer-tab",3)(23,"div")(24,"textarea",4),o(25,`import { Component } from '@angular/core';
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
      `),t()()(),i(26,"c3-example-viewer-tab",5)(27,"div")(28,"textarea",6),o(29,`<c3-file-viewer-dialog [fileViewer]="fileViewer">
  <button mat-raised-button color="primary">Open Dialog</button>
</c3-file-viewer-dialog>
      `),t()()(),i(30,"c3-example-viewer-tab",7)(31,"div")(32,"textarea",4),o(33,`import { FileMetadata } from 'c3-components';

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
      `),t()()(),V(34,8),h(35,"dialog-viewer"),F(),t()),n&2&&(m(7),a("options",p(6,f)),m(4),a("options",p(7,f)),m(4),a("options",p(8,f)),m(9),a("options",p(9,f)),m(4),a("options",p(10,f)),m(4),a("options",p(11,f)))},dependencies:[z,s,H,_,B,I],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var $=[{path:"",component:O,children:[{path:"api",component:T},{path:"examples",component:N},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],A=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=b({type:e})}static{this.\u0275inj=d({imports:[M.forChild($),M]})}}return e})();var xe=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=b({type:e})}static{this.\u0275inj=d({imports:[s,A]})}}return e})();export{xe as FileViewerModule};

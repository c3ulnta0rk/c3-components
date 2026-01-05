import {
  C3FileViewer,
  C3FileViewerComponent,
  C3FileViewerDialogComponent,
  C3FileViewerModule,
  configDemo,
  crabbyImgs
} from "./chunk-KUO36XDT.js";
import "./chunk-ZZ5UYSMJ.js";
import {
  ComponentNavComponent
} from "./chunk-PN4CLJLJ.js";
import {
  ExampleViewerComponent,
  ExampleViewerTabComponent
} from "./chunk-LALM5A6J.js";
import "./chunk-M3WS2NE6.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-HJOU2AGX.js";
import "./chunk-HCQT5YPP.js";
import {
  HighlightJsDirective
} from "./chunk-H2OJKUSB.js";
import {
  RouterModule
} from "./chunk-DYF2Z4RC.js";
import "./chunk-XOJCRGWO.js";
import "./chunk-2WQUS347.js";
import {
  HttpClient
} from "./chunk-OUHP5ZTC.js";
import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
import {
  Component,
  NgModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/pages/api/api.component.ts
var _ApiComponent = class _ApiComponent {
};
_ApiComponent.\u0275fac = function ApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiComponent)();
};
_ApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiComponent, selectors: [["c3-api"]], decls: 3, vars: 0, template: function ApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "api works!");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(2, ",\n");
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var ApiComponent = _ApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiComponent, [{
    type: Component,
    args: [{ selector: "c3-api", imports: [], template: "<p>api works!</p>,\n", styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/pages/api/api.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/pages/api/api.component.ts", lineNumber: 10 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/components/basic-viewer/basic-viewer.component.ts
var _BasicViewerComponent = class _BasicViewerComponent {
  constructor() {
    this.fileViewer = new C3FileViewer({
      files: crabbyImgs,
      config: configDemo,
      client: inject(HttpClient)
    });
  }
  handleEvent(event) {
    console.log(`${event?.name} has been clicked on img ${event?.fileUrl}`);
    switch (event?.name) {
      case "print":
        console.log("run print logic");
        break;
    }
  }
};
_BasicViewerComponent.\u0275fac = function BasicViewerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BasicViewerComponent)();
};
_BasicViewerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicViewerComponent, selectors: [["basic-viewer"]], decls: 1, vars: 2, consts: [[3, "customFileEvent", "fileViewer", "screenHeightOccupied"]], template: function BasicViewerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c3-file-viewer", 0);
    \u0275\u0275listener("customFileEvent", function BasicViewerComponent_Template_c3_file_viewer_customFileEvent_0_listener($event) {
      return ctx.handleEvent($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fileViewer", ctx.fileViewer)("screenHeightOccupied", 0);
  }
}, dependencies: [C3FileViewerModule, C3FileViewerComponent], encapsulation: 2 });
var BasicViewerComponent = _BasicViewerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicViewerComponent, [{
    type: Component,
    args: [{ selector: "basic-viewer", imports: [C3FileViewerModule], template: '<c3-file-viewer\n  [fileViewer]="fileViewer"\n  [screenHeightOccupied]="0"\n  (customFileEvent)="handleEvent($event)"\n>\n</c3-file-viewer>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicViewerComponent, { className: "BasicViewerComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/components/basic-viewer/basic-viewer.component.ts", lineNumber: 16 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/components/dialog-viewer/dialog-viewer.component.ts
var _DialogViewerComponent = class _DialogViewerComponent {
  constructor() {
    this.fileViewer = new C3FileViewer({
      files: crabbyImgs,
      config: configDemo,
      client: inject(HttpClient)
    });
  }
};
_DialogViewerComponent.\u0275fac = function DialogViewerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DialogViewerComponent)();
};
_DialogViewerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogViewerComponent, selectors: [["dialog-viewer"]], decls: 3, vars: 1, consts: [[3, "fileViewer"], ["mat-raised-button", "", "color", "primary"]], template: function DialogViewerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c3-file-viewer-dialog", 0)(1, "button", 1);
    \u0275\u0275text(2, "Open Dialog");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("fileViewer", ctx.fileViewer);
  }
}, dependencies: [C3FileViewerModule, C3FileViewerDialogComponent, MatButtonModule, MatButton], encapsulation: 2 });
var DialogViewerComponent = _DialogViewerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogViewerComponent, [{
    type: Component,
    args: [{ selector: "dialog-viewer", imports: [C3FileViewerModule, MatButtonModule], template: '<c3-file-viewer-dialog [fileViewer]="fileViewer">\n  <button mat-raised-button color="primary">Open Dialog</button>\n</c3-file-viewer-dialog>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogViewerComponent, { className: "DialogViewerComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/components/dialog-viewer/dialog-viewer.component.ts", lineNumber: 17 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/pages/examples/examples.component.ts
var _c0 = () => ({});
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 36, vars: 12, consts: [[1, "my-4"], [1, "mb-1", "px-4", "pb-2"], ["title", ""], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "CrabbyImg.ts"], ["example", ""]], template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Component Viewer for file, video and pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "example-viewer", 1)(3, "h4", 2);
    \u0275\u0275text(4, "Basic viewer for images");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "c3-example-viewer-tab", 3)(6, "div")(7, "textarea", 4);
    \u0275\u0275text(8, "import { Component } from '@angular/core';\nimport {\n  C3FileViewerConfig,\n  C3FileViewer,\n  CustomFileEvent,\n  C3FileViewerModule,\n} from 'c3-components';\nimport { crabbyImgs } from '../../files';\n\n@Component({\n  selector: 'basic-viewer',\n  standalone: true,\n  imports: [C3FileViewerModule],\n  templateUrl: './basic-viewer.component.html',\n  styleUrls: ['./basic-viewer.component.scss'],\n})\nexport class BasicViewerComponent {\n  public config: C3FileViewerConfig = {\n    btnContainerClass: 'other',\n    btnClass: 'btn btn-hover-primary px-1',\n    btnSubClass: 'material-icons font-size-xl',\n    zoomFactor: 0.1,\n    wheelZoom: true,\n    allowFullscreen: true,\n    allowKeyboardNavigation: true,\n    height: '640px',\n    btnShow: {\n      zoomIn: true,\n      zoomOut: true,\n      rotateClockwise: true,\n      rotateCounterClockwise: true,\n      next: false,\n      prev: false,\n      reset: true,\n    },\n    btnIcons: {\n      next: {\n        text: 'navigate_next',\n      },\n      prev: {\n        text: 'navigate_before',\n      },\n    },\n    customBtns: [],\n  };\n\n  public fileViewer = new C3FileViewer({\n    files: crabbyImgs,\n    config: this.config,\n  });\n\n  handleEvent(event: CustomFileEvent) {\n    console.log(`${event?.name} has been clicked on img ${event?.fileUrl}`);\n\n    switch (event?.name) {\n      case 'print':\n        console.log('run print logic');\n        break;\n    }\n  }\n}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "c3-example-viewer-tab", 5)(10, "div")(11, "textarea", 6);
    \u0275\u0275text(12, '<c3-file-viewer\n  [fileViewer]="fileViewer"\n  [screenHeightOccupied]="0"\n  (customFileEvent)="handleEvent($event)"\n>\n</c3-file-viewer>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "c3-example-viewer-tab", 7)(14, "div")(15, "textarea", 4);
    \u0275\u0275text(16, "import { FileMetadata } from 'c3-components';\n\nexport const crabbyImgs: Array<FileMetadata> = [\n  {\n    name: 'Crabby - 1',\n    type: 'image/png',\n    location: 'img/crabby-1.png',\n  },\n  {\n    name: 'Crabby - 2',\n    type: 'image/jpeg',\n    location: 'img/crabby-2.jpeg',\n  },\n  {\n    name: 'Crabby - 3',\n    type: 'image/png',\n    location: 'img/crabby-3.png',\n  },\n  {\n    name: 'Crabby - 4',\n    type: 'image/png',\n    location: 'img/crabby-4.png',\n  },\n  {\n    name: 'Crabby - 5',\n    type: 'image/png',\n    location: 'img/crabby-5.png',\n  },\n  {\n    name: 'Crabby - 6',\n    type: 'image/png',\n    location: 'img/crabby-6.png',\n  },\n];\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(17, 8);
    \u0275\u0275element(18, "basic-viewer");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "example-viewer", 1)(20, "h4", 2);
    \u0275\u0275text(21, "Dialog Viewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "c3-example-viewer-tab", 3)(23, "div")(24, "textarea", 4);
    \u0275\u0275text(25, "import { Component } from '@angular/core';\nimport { MatButtonModule } from '@angular/material/button';\nimport {\n  C3FileViewerConfig,\n  C3FileViewer,\n  C3FileViewerModule,\n} from 'c3-components';\nimport { crabbyImgs } from '../../files';\n\n@Component({\n  selector: 'dialog-viewer',\n  standalone: true,\n  imports: [C3FileViewerModule, MatButtonModule],\n  templateUrl: './dialog-viewer.component.html',\n  styleUrls: ['./dialog-viewer.component.scss'],\n})\nexport class DialogViewerComponent {\n  public config: C3FileViewerConfig = {\n    btnContainerClass: 'other',\n    btnClass: 'btn btn-hover-primary px-1',\n    btnSubClass: 'material-icons font-size-xl',\n    zoomFactor: 0.1,\n    wheelZoom: true,\n    allowFullscreen: true,\n    allowKeyboardNavigation: true,\n    height: '640px',\n    btnShow: {\n      zoomIn: true,\n      zoomOut: true,\n      rotateClockwise: true,\n      rotateCounterClockwise: true,\n      next: false,\n      prev: false,\n      reset: true,\n    },\n    btnIcons: {\n      next: {\n        text: 'navigate_next',\n      },\n      prev: {\n        text: 'navigate_before',\n      },\n    },\n    customBtns: [],\n  };\n\n  public fileViewer = new C3FileViewer({\n    files: crabbyImgs,\n    config: this.config,\n  });\n}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "c3-example-viewer-tab", 5)(27, "div")(28, "textarea", 6);
    \u0275\u0275text(29, '<c3-file-viewer-dialog [fileViewer]="fileViewer">\n  <button mat-raised-button color="primary">Open Dialog</button>\n</c3-file-viewer-dialog>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "c3-example-viewer-tab", 7)(31, "div")(32, "textarea", 4);
    \u0275\u0275text(33, "import { FileMetadata } from 'c3-components';\n\nexport const crabbyImgs: Array<FileMetadata> = [\n  {\n    name: 'Crabby - 1',\n    type: 'image/png',\n    location: 'img/crabby-1.png',\n  },\n  {\n    name: 'Crabby - 2',\n    type: 'image/jpeg',\n    location: 'img/crabby-2.jpeg',\n  },\n  {\n    name: 'Crabby - 3',\n    type: 'image/png',\n    location: 'img/crabby-3.png',\n  },\n  {\n    name: 'Crabby - 4',\n    type: 'image/png',\n    location: 'img/crabby-4.png',\n  },\n  {\n    name: 'Crabby - 5',\n    type: 'image/png',\n    location: 'img/crabby-5.png',\n  },\n  {\n    name: 'Crabby - 6',\n    type: 'image/png',\n    location: 'img/crabby-6.png',\n  },\n];\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(34, 8);
    \u0275\u0275element(35, "dialog-viewer");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(9);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(11, _c0));
  }
}, dependencies: [
  BasicViewerComponent,
  DialogViewerComponent,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [
      BasicViewerComponent,
      DialogViewerComponent,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective
    ], template: `<p class="my-4">Component Viewer for file, video and pdf</p>

<example-viewer class="mb-1 px-4 pb-2">
  <h4 title>Basic viewer for images</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
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
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-file-viewer
  [fileViewer]="fileViewer"
  [screenHeightOccupied]="0"
  (customFileEvent)="handleEvent($event)"
>
</c3-file-viewer>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="CrabbyImg.ts">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { FileMetadata } from 'c3-components';

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
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <basic-viewer></basic-viewer>
  </ng-container>
</example-viewer>

<example-viewer class="mb-1 px-4 pb-2">
  <h4 title>Dialog Viewer</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
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
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-file-viewer-dialog [fileViewer]="fileViewer">
  <button mat-raised-button color="primary">Open Dialog</button>
</c3-file-viewer-dialog>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="CrabbyImg.ts">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { FileMetadata } from 'c3-components';

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
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <dialog-viewer></dialog-viewer>
  </ng-container>
</example-viewer>
`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/pages/examples/examples.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/pages/examples/examples.component.ts", lineNumber: 21 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/file-viewer-routing.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    children: [
      {
        path: "api",
        component: ApiComponent
      },
      {
        path: "examples",
        component: ExamplesComponent
      },
      {
        path: "**",
        redirectTo: "examples"
      }
    ],
    data: {
      links: [
        {
          url: "api",
          label: "Api"
        },
        {
          url: "examples",
          label: "Examples"
        }
      ]
    }
  }
];
var _FileViewerRoutingModule = class _FileViewerRoutingModule {
};
_FileViewerRoutingModule.\u0275fac = function FileViewerRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileViewerRoutingModule)();
};
_FileViewerRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FileViewerRoutingModule });
_FileViewerRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var FileViewerRoutingModule = _FileViewerRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileViewerRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/file-viewer/file-viewer.module.ts
var _FileViewerModule = class _FileViewerModule {
};
_FileViewerModule.\u0275fac = function FileViewerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileViewerModule)();
};
_FileViewerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FileViewerModule });
_FileViewerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FileViewerRoutingModule
] });
var FileViewerModule = _FileViewerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileViewerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        FileViewerRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  FileViewerModule
};
//# sourceMappingURL=chunk-ZIZBTDW5.js.map

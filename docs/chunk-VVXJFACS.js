import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-LPI747AQ.js";
import {
  ComponentNavComponent
} from "./chunk-JZL7V6LU.js";
import {
  C3AutoAnimateDirective,
  ExampleViewerComponent,
  ExampleViewerTabComponent
} from "./chunk-BIBYCL2S.js";
import "./chunk-JVJVJ3I4.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B3LRXQVS.js";
import "./chunk-MNEDZF6X.js";
import {
  HighlightJsDirective
} from "./chunk-CP5TLJ4H.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-CKAG3KXZ.js";
import "./chunk-56K62WNN.js";
import "./chunk-PSEOTE3Z.js";
import {
  RouterModule
} from "./chunk-ECYVAQNN.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  contentChild,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/expansion/pages/api/api.component.ts
var _ApiComponent = class _ApiComponent {
};
_ApiComponent.\u0275fac = function ApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiComponent)();
};
_ApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiComponent, selectors: [["c3-api"]], decls: 2, vars: 0, template: function ApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "api works!");
    \u0275\u0275domElementEnd();
  }
}, encapsulation: 2 });
var ApiComponent = _ApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiComponent, [{
    type: Component,
    args: [{ selector: "c3-api", imports: [], template: "<p>api works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/expansion/pages/api/api.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-expansion/components/c3-expansion-header/c3-expansion-header.component.ts
var _c0 = ["*"];
function C3ExpansionHeaderComponent_ProjectionFallback_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title(), " ");
  }
}
function C3ExpansionHeaderComponent_ProjectionFallback_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, C3ExpansionHeaderComponent_ProjectionFallback_0_Conditional_0_Template, 2, 1, "h4", 0);
    \u0275\u0275elementStart(1, "button", 1);
    \u0275\u0275listener("click", function C3ExpansionHeaderComponent_ProjectionFallback_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExpand.emit());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.title() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r1.isExpanded() ? "R\xE9duire" : "D\xE9velopper");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded() ? "expand_less" : "expand_more");
  }
}
var _C3ExpansionHeaderComponent = class _C3ExpansionHeaderComponent {
  constructor() {
    this.title = input(...ngDevMode ? [void 0, { debugName: "title" }] : []);
    this.isExpanded = input(false, ...ngDevMode ? [{ debugName: "isExpanded" }] : []);
    this.toggleExpand = output();
  }
  get hostClass() {
    return "c3-expansion-header";
  }
};
_C3ExpansionHeaderComponent.\u0275fac = function C3ExpansionHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3ExpansionHeaderComponent)();
};
_C3ExpansionHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3ExpansionHeaderComponent, selectors: [["c3-expansion-header"]], hostVars: 2, hostBindings: function C3ExpansionHeaderComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classMap(ctx.hostClass);
  }
}, inputs: { title: [1, "title"], isExpanded: [1, "isExpanded"] }, outputs: { toggleExpand: "toggleExpand" }, standalone: false, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "text-lg"], ["mat-icon-button", "", 3, "click", "matTooltip"]], template: function C3ExpansionHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0, 0, null, C3ExpansionHeaderComponent_ProjectionFallback_0_Template, 4, 3);
  }
}, dependencies: [MatIconButton, MatIcon, MatTooltip], encapsulation: 2 });
var C3ExpansionHeaderComponent = _C3ExpansionHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3ExpansionHeaderComponent, [{
    type: Component,
    args: [{ selector: "c3-expansion-header", encapsulation: ViewEncapsulation.None, standalone: false, template: `<ng-content>
  @if(title()) {
    <h4 class="text-lg">
      {{ title() }}
    </h4>
  }
  <button
    mat-icon-button
    (click)="toggleExpand.emit()"
    [matTooltip]="isExpanded() ? 'R\xE9duire' : 'D\xE9velopper'"
  >
    <mat-icon>{{
      isExpanded() ? "expand_less" : "expand_more"
    }}</mat-icon>
  </button>
</ng-content>
` }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], isExpanded: [{ type: Input, args: [{ isSignal: true, alias: "isExpanded", required: false }] }], toggleExpand: [{ type: Output, args: ["toggleExpand"] }], hostClass: [{
    type: HostBinding,
    args: ["class"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3ExpansionHeaderComponent, { className: "C3ExpansionHeaderComponent", filePath: "projects/c3-components/src/lib/c3-expansion/components/c3-expansion-header/c3-expansion-header.component.ts", lineNumber: 15 });
})();

// projects/c3-components/src/lib/c3-expansion/components/c3-expansion/c3-expansion.component.ts
var _c02 = [[["c3-expansion-header"]], "*"];
var _c1 = ["c3-expansion-header", "*"];
function C3ExpansionComponent_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c3-expansion-header");
  }
}
function C3ExpansionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
var _C3ExpansionComponent = class _C3ExpansionComponent {
  get hostClass() {
    return "c3-expansion";
  }
  constructor() {
    this.headerClass = input("c3-expansion-header", ...ngDevMode ? [{ debugName: "headerClass" }] : []);
    this.isExpanded = model(false, ...ngDevMode ? [{ debugName: "isExpanded" }] : []);
    this._elementRef = inject(ElementRef);
    this.header = contentChild(C3ExpansionHeaderComponent, ...ngDevMode ? [{ debugName: "header" }] : []);
    effect(() => {
      this.expandSubsciption?.unsubscribe();
      this.header()?.toggleExpand.subscribe(() => this.toggleExpand());
    });
  }
  ngOnDestroy() {
    this.expandSubsciption?.unsubscribe();
  }
  toggleExpand() {
    this.isExpanded.set(!this.isExpanded());
  }
};
_C3ExpansionComponent.\u0275fac = function C3ExpansionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3ExpansionComponent)();
};
_C3ExpansionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3ExpansionComponent, selectors: [["c3-expansion"]], contentQueries: function C3ExpansionComponent_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuerySignal(dirIndex, ctx.header, C3ExpansionHeaderComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostVars: 2, hostBindings: function C3ExpansionComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classMap(ctx.hostClass);
  }
}, inputs: { headerClass: [1, "headerClass"], isExpanded: [1, "isExpanded"] }, outputs: { isExpanded: "isExpandedChange" }, standalone: false, features: [\u0275\u0275HostDirectivesFeature([{ directive: C3AutoAnimateDirective, inputs: ["options", "options"] }])], ngContentSelectors: _c1, decls: 4, vars: 3, template: function C3ExpansionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c02);
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 0, null, C3ExpansionComponent_ProjectionFallback_1_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, C3ExpansionComponent_Conditional_3_Template, 2, 0, "div");
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.headerClass());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isExpanded() ? 3 : -1);
  }
}, dependencies: [C3ExpansionHeaderComponent], encapsulation: 2 });
var C3ExpansionComponent = _C3ExpansionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3ExpansionComponent, [{
    type: Component,
    args: [{ selector: "c3-expansion", hostDirectives: [
      {
        directive: C3AutoAnimateDirective,
        inputs: ["options"]
      }
    ], standalone: false, template: '<div [class]="headerClass()">\n  <ng-content select="c3-expansion-header">\n    <c3-expansion-header />\n  </ng-content>\n</div>\n\n@if (isExpanded()) {\n  <div>\n    <ng-content></ng-content>\n  </div>\n}\n' }]
  }], () => [], { headerClass: [{ type: Input, args: [{ isSignal: true, alias: "headerClass", required: false }] }], isExpanded: [{ type: Input, args: [{ isSignal: true, alias: "isExpanded", required: false }] }, { type: Output, args: ["isExpandedChange"] }], hostClass: [{
    type: HostBinding,
    args: ["class"]
  }], header: [{ type: ContentChild, args: [forwardRef(() => C3ExpansionHeaderComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3ExpansionComponent, { className: "C3ExpansionComponent", filePath: "projects/c3-components/src/lib/c3-expansion/components/c3-expansion/c3-expansion.component.ts", lineNumber: 27 });
})();

// projects/c3-components/src/lib/c3-expansion/c3-expansion.module.ts
var _C3ExpansionModule = class _C3ExpansionModule {
};
_C3ExpansionModule.\u0275fac = function C3ExpansionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3ExpansionModule)();
};
_C3ExpansionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _C3ExpansionModule });
_C3ExpansionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatToolbarModule
] });
var C3ExpansionModule = _C3ExpansionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3ExpansionModule, [{
    type: NgModule,
    args: [{
      declarations: [C3ExpansionComponent, C3ExpansionHeaderComponent],
      imports: [
        CommonModule,
        C3AutoAnimateDirective,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatToolbarModule
      ],
      exports: [C3ExpansionComponent, C3ExpansionHeaderComponent]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/expansion/pages/examples/examples.component.ts
var _c03 = () => ({});
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 39, vars: 10, consts: [["c3Expansion", ""], [1, "mb-2", "px-4", "pb-2"], ["title", ""], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["example", ""], [1, "rounded", "border"], ["title", "Example title", 1, "bg-blue-800", "rounded"], [1, "!justify-between", "gap-4", "!bg-blue-800", "rounded", 3, "click"], ["mat-icon-button", ""]], template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "example-viewer", 1)(1, "h4", 2);
    \u0275\u0275text(2, "Basic Expansion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c3-example-viewer-tab", 3)(4, "div")(5, "textarea", 4);
    \u0275\u0275text(6, "import { CommonModule } from '@angular/common';\nimport { Component } from '@angular/core';\nimport { C3ExpansionModule } from 'c3-components';\n\n@Component({\n  selector: 'c3-example',\n  standalone: true,\n  imports: [\n    C3ExpansionModule,\n    CommonModule,\n  ],\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "c3-example-viewer-tab", 5)(8, "div")(9, "textarea", 6);
    \u0275\u0275text(10, '<c3-expansion>\n  <c3-expansion-header title="Example title" />\n\n  <div>\n    content\n  </div>\n</c3-expansion>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(11, 7);
    \u0275\u0275elementStart(12, "c3-expansion", 8);
    \u0275\u0275element(13, "c3-expansion-header", 9);
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, " content ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "example-viewer", 1)(17, "h4", 2);
    \u0275\u0275text(18, "Basic Expansion with custome header");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "c3-example-viewer-tab", 3)(20, "div")(21, "textarea", 4);
    \u0275\u0275text(22, "import { CommonModule } from '@angular/common';\nimport { Component } from '@angular/core';\nimport { MatButtonModule } from '@angular/material/button';\nimport { MatIconModule } from '@angular/material/icon';\nimport { MatToolbarModule } from '@angular/material/toolbar';\nimport { C3ExpansionModule } from 'c3-components';\n\n@Component({\n  selector: 'c3-example',\n  standalone: true,\n  imports: [\n    C3ExpansionModule,\n    CommonModule,\n    MatButtonModule,\n    MatToolbarModule,\n    MatIconModule,\n  ],\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "c3-example-viewer-tab", 5)(24, "div")(25, "textarea", 6);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(27, 7);
    \u0275\u0275elementStart(28, "c3-expansion", 8, 0)(30, "c3-expansion-header")(31, "mat-toolbar", 10);
    \u0275\u0275listener("click", function ExamplesComponent_Template_mat_toolbar_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const c3Expansion_r2 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(c3Expansion_r2.toggleExpand());
    });
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Fichiers re\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 11)(35, "mat-icon");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div");
    \u0275\u0275text(38, " super content ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c3Expansion_r2 = \u0275\u0275reference(29);
    \u0275\u0275advance(5);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(6, _c03));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(7, _c03));
    \u0275\u0275advance(12);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(8, _c03));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(9, _c03));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('<c3-expansion #c3Expansion class="rounded border">\n  <c3-expansion-header>\n    <mat-toolbar\n      class="!justify-between gap-4 !bg-blue-800 rounded"\n      (click)="c3Expansion.toggleExpand()"\n    >\n      <span>Fichiers re\xE7u</span>\n      <button mat-icon-button>\n        <mat-icon>', c3Expansion_r2.isExpanded() ? "expand_less" : "expand_more", "</mat-icon>\n      </button>\n    </mat-toolbar>\n  </c3-expansion-header>\n\n  <div>\n    super content\n  </div>\n</c3-expansion>\n      ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(c3Expansion_r2.isExpanded() ? "expand_less" : "expand_more");
  }
}, dependencies: [
  C3ExpansionModule,
  C3ExpansionComponent,
  C3ExpansionHeaderComponent,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  MatButtonModule,
  MatIconButton,
  MatToolbarModule,
  MatToolbar,
  MatIconModule,
  MatIcon,
  HighlightJsDirective
], encapsulation: 2 });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [
      C3ExpansionModule,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      HighlightJsDirective
    ], template: `<example-viewer class="mb-2 px-4 pb-2">
  <h4 title>Basic Expansion</h4>
  
  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3ExpansionModule } from 'c3-components';

@Component({
  selector: 'c3-example',
  standalone: true,
  imports: [
    C3ExpansionModule,
    CommonModule,
  ],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>


  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-expansion>
  <c3-expansion-header title="Example title" />

  <div>
    content
  </div>
</c3-expansion>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <c3-expansion class="rounded border">
      <c3-expansion-header title="Example title" class="bg-blue-800 rounded" />

      <div>
        content
      </div>
    </c3-expansion>
  </ng-container>
</example-viewer>


<example-viewer class="mb-2 px-4 pb-2"> 
  <h4 title>Basic Expansion with custome header</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { C3ExpansionModule } from 'c3-components';

@Component({
  selector: 'c3-example',
  standalone: true,
  imports: [
    C3ExpansionModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}
      </textarea>
    </div>
</c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-expansion #c3Expansion class="rounded border">
  <c3-expansion-header>
    <mat-toolbar
      class="!justify-between gap-4 !bg-blue-800 rounded"
      (click)="c3Expansion.toggleExpand()"
    >
      <span>Fichiers re\xE7u</span>
      <button mat-icon-button>
        <mat-icon>{{
          c3Expansion.isExpanded() ? "expand_less" : "expand_more"
        }}</mat-icon>
      </button>
    </mat-toolbar>
  </c3-expansion-header>

  <div>
    super content
  </div>
</c3-expansion>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <c3-expansion #c3Expansion class="rounded border">
      <c3-expansion-header>
        <mat-toolbar
          class="!justify-between gap-4 !bg-blue-800 rounded"
          (click)="c3Expansion.toggleExpand()"
        >
          <span>Fichiers re\xE7u</span>
          <button mat-icon-button>
            <mat-icon>{{
              c3Expansion.isExpanded() ? "expand_less" : "expand_more"
            }}</mat-icon>
          </button>
        </mat-toolbar>
      </c3-expansion-header>

      <div>
        super content
      </div>
    </c3-expansion>
  </ng-container>
</example-viewer>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/expansion/pages/examples/examples.component.ts", lineNumber: 25 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/expansion/expansion-routing.module.ts
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
var _ExpansionRoutingModule = class _ExpansionRoutingModule {
};
_ExpansionRoutingModule.\u0275fac = function ExpansionRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExpansionRoutingModule)();
};
_ExpansionRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExpansionRoutingModule });
_ExpansionRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ExpansionRoutingModule = _ExpansionRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/expansion/expansion.module.ts
var _ExpansionModule = class _ExpansionModule {
};
_ExpansionModule.\u0275fac = function ExpansionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExpansionModule)();
};
_ExpansionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExpansionModule });
_ExpansionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ExpansionRoutingModule
] });
var ExpansionModule = _ExpansionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ExpansionRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ExpansionModule
};
//# sourceMappingURL=chunk-VVXJFACS.js.map

import {
  ComponentNavComponent
} from "./chunk-JZL7V6LU.js";
import {
  ExampleViewerComponent,
  ExampleViewerTabComponent
} from "./chunk-BIBYCL2S.js";
import "./chunk-JVJVJ3I4.js";
import "./chunk-B3LRXQVS.js";
import "./chunk-MNEDZF6X.js";
import {
  HighlightJsDirective
} from "./chunk-CP5TLJ4H.js";
import "./chunk-CKAG3KXZ.js";
import "./chunk-56K62WNN.js";
import "./chunk-PSEOTE3Z.js";
import {
  RouterModule
} from "./chunk-ECYVAQNN.js";
import "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-HVHU2I45.js";
import {
  Component,
  ContentChildren,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  contentChildren,
  effect,
  forwardRef,
  model,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/pages/api/api.component.ts
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
    args: [{ selector: "c3-api", imports: [], template: "<p>api works!</p>,\n", styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/pages/api/api.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/pages/api/api.component.ts", lineNumber: 10 });
})();

// projects/c3-components/src/lib/c3-flowing-menu/components/c3-flowing-menu-item/c3-flowing-menu-item.component.ts
var _c0 = ["menuTpl"];
var _c1 = ["contentTpl"];
var _c2 = [[["", "menu-title", ""]], [["c3-flowing-menu-item-content"]]];
var _c3 = ["[menu-title]", "c3-flowing-menu-item-content"];
function C3FlowingMenuItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function C3FlowingMenuItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var _C3FlowingMenuItemComponent = class _C3FlowingMenuItemComponent {
  constructor() {
    this.menuTpl = viewChild("menuTpl", ...ngDevMode ? [{ debugName: "menuTpl", read: TemplateRef }] : [{
      read: TemplateRef
    }]);
    this.contentTpl = viewChild("contentTpl", ...ngDevMode ? [{ debugName: "contentTpl", read: TemplateRef }] : [{
      read: TemplateRef
    }]);
    this.active = signal(false, ...ngDevMode ? [{ debugName: "active" }] : []);
  }
};
_C3FlowingMenuItemComponent.\u0275fac = function C3FlowingMenuItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FlowingMenuItemComponent)();
};
_C3FlowingMenuItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FlowingMenuItemComponent, selectors: [["c3-flowing-menu-item"]], viewQuery: function C3FlowingMenuItemComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.menuTpl, _c0, 5, TemplateRef);
    \u0275\u0275viewQuerySignal(ctx.contentTpl, _c1, 5, TemplateRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, standalone: false, ngContentSelectors: _c3, decls: 4, vars: 0, consts: [["menuTpl", ""], ["contentTpl", ""]], template: function C3FlowingMenuItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c2);
    \u0275\u0275template(0, C3FlowingMenuItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, C3FlowingMenuItemComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
}, encapsulation: 2 });
var C3FlowingMenuItemComponent = _C3FlowingMenuItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FlowingMenuItemComponent, [{
    type: Component,
    args: [{ selector: "c3-flowing-menu-item", standalone: false, template: '<ng-template #menuTpl>\n  <ng-content select="[menu-title]"></ng-content>\n</ng-template>\n<ng-template #contentTpl>\n  <ng-content select="c3-flowing-menu-item-content"></ng-content>\n</ng-template>\n' }]
  }], null, { menuTpl: [{ type: ViewChild, args: ["menuTpl", __spreadProps(__spreadValues({}, {
    read: TemplateRef
  }), { isSignal: true })] }], contentTpl: [{ type: ViewChild, args: ["contentTpl", __spreadProps(__spreadValues({}, {
    read: TemplateRef
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FlowingMenuItemComponent, { className: "C3FlowingMenuItemComponent", filePath: "projects/c3-components/src/lib/c3-flowing-menu/components/c3-flowing-menu-item/c3-flowing-menu-item.component.ts", lineNumber: 8 });
})();

// projects/c3-components/src/lib/c3-flowing-menu/components/c3-flowing-menu/c3-flowing-menu.component.ts
var _c02 = ["targetContent"];
function C3FlowingMenuComponent_For_2_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function C3FlowingMenuComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function C3FlowingMenuComponent_For_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const \u0275$index_3_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMenu(\u0275$index_3_r2));
    });
    \u0275\u0275template(1, C3FlowingMenuComponent_For_2_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const menu_r5 = ctx_r3.$implicit;
    const \u0275$index_3_r2 = ctx_r3.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", \u0275$index_3_r2 === ctx_r2.selectedIndex());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", menu_r5.menuTpl());
  }
}
function C3FlowingMenuComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FlowingMenuComponent_For_2_Conditional_0_Template, 2, 3, "button", 3);
  }
  if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    \u0275\u0275conditional(menu_r5.menuTpl() ? 0 : -1);
  }
}
var _C3FlowingMenuComponent = class _C3FlowingMenuComponent {
  constructor() {
    this.c3FlowingMenu = contentChildren(C3FlowingMenuItemComponent, ...ngDevMode ? [{ debugName: "c3FlowingMenu" }] : []);
    this.targetContentRef = viewChild("targetContent", ...ngDevMode ? [{ debugName: "targetContentRef", read: ViewContainerRef }] : [{
      read: ViewContainerRef
    }]);
    this.selectedIndex = model(0, ...ngDevMode ? [{ debugName: "selectedIndex" }] : []);
    effect(() => {
      if (this.targetContentRef()) {
        this.updateView();
      }
    });
  }
  selectMenu(index) {
    this.selectedIndex.set(index);
    this.updateView();
  }
  updateView() {
    if (!this.targetContentRef())
      return;
    this.targetContentRef().clear();
    const selectedMenu = this.c3FlowingMenu()[this.selectedIndex()];
    if (selectedMenu) {
      this.targetContentRef().createEmbeddedView(selectedMenu.contentTpl());
    }
  }
};
_C3FlowingMenuComponent.\u0275fac = function C3FlowingMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FlowingMenuComponent)();
};
_C3FlowingMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FlowingMenuComponent, selectors: [["c3-flowing-menu"]], contentQueries: function C3FlowingMenuComponent_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuerySignal(dirIndex, ctx.c3FlowingMenu, C3FlowingMenuItemComponent, 4);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, viewQuery: function C3FlowingMenuComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.targetContentRef, _c02, 5, ViewContainerRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostAttrs: ["ngSkipHydration", "true", 1, "c3-flowing-menu"], inputs: { selectedIndex: [1, "selectedIndex"] }, outputs: { selectedIndex: "selectedIndexChange" }, standalone: false, decls: 6, vars: 0, consts: [["targetContent", ""], [1, "menu"], [1, "contenu"], [3, "active"], [3, "click"], [4, "ngTemplateOutlet"]], template: function C3FlowingMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 1);
    \u0275\u0275repeaterCreate(1, C3FlowingMenuComponent_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "section", 2);
    \u0275\u0275elementContainer(4, null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.c3FlowingMenu());
  }
}, dependencies: [NgTemplateOutlet], encapsulation: 2 });
var C3FlowingMenuComponent = _C3FlowingMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FlowingMenuComponent, [{
    type: Component,
    args: [{ selector: "c3-flowing-menu", encapsulation: ViewEncapsulation.None, host: {
      class: "c3-flowing-menu",
      ngSkipHydration: "true"
    }, standalone: false, template: '<aside class="menu">\n  @for(menu of c3FlowingMenu(); track menu; let i = $index) {\n    @if(menu.menuTpl()) {\n      <button (click)="selectMenu(i)" [class.active]="i === selectedIndex()">\n        <ng-container *ngTemplateOutlet="menu.menuTpl()!"></ng-container>\n      </button>\n    }\n  }\n</aside>\n\n<section class="contenu">\n  <ng-container #targetContent></ng-container>\n</section>\n' }]
  }], () => [], { c3FlowingMenu: [{ type: ContentChildren, args: [forwardRef(() => C3FlowingMenuItemComponent), { isSignal: true }] }], targetContentRef: [{ type: ViewChild, args: ["targetContent", __spreadProps(__spreadValues({}, {
    read: ViewContainerRef
  }), { isSignal: true })] }], selectedIndex: [{ type: Input, args: [{ isSignal: true, alias: "selectedIndex", required: false }] }, { type: Output, args: ["selectedIndexChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FlowingMenuComponent, { className: "C3FlowingMenuComponent", filePath: "projects/c3-components/src/lib/c3-flowing-menu/components/c3-flowing-menu/c3-flowing-menu.component.ts", lineNumber: 22 });
})();

// projects/c3-components/src/lib/c3-flowing-menu/components/c3-flowing-menu-item-content/c3-flowing-menu-item-content.component.ts
var _c03 = ["*"];
var _C3FlowingMenuItemContentComponent = class _C3FlowingMenuItemContentComponent {
};
_C3FlowingMenuItemContentComponent.\u0275fac = function C3FlowingMenuItemContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FlowingMenuItemContentComponent)();
};
_C3FlowingMenuItemContentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FlowingMenuItemContentComponent, selectors: [["c3-flowing-menu-item-content"]], standalone: false, ngContentSelectors: _c03, decls: 1, vars: 0, template: function C3FlowingMenuItemContentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
  }
}, encapsulation: 2 });
var C3FlowingMenuItemContentComponent = _C3FlowingMenuItemContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FlowingMenuItemContentComponent, [{
    type: Component,
    args: [{ selector: "c3-flowing-menu-item-content", standalone: false, template: "<ng-content></ng-content>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FlowingMenuItemContentComponent, { className: "C3FlowingMenuItemContentComponent", filePath: "projects/c3-components/src/lib/c3-flowing-menu/components/c3-flowing-menu-item-content/c3-flowing-menu-item-content.component.ts", lineNumber: 8 });
})();

// projects/c3-components/src/lib/c3-flowing-menu/c3-flowing-menu.module.ts
var _C3FlowingMenuModule = class _C3FlowingMenuModule {
};
_C3FlowingMenuModule.\u0275fac = function C3FlowingMenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FlowingMenuModule)();
};
_C3FlowingMenuModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _C3FlowingMenuModule });
_C3FlowingMenuModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule] });
var C3FlowingMenuModule = _C3FlowingMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FlowingMenuModule, [{
    type: NgModule,
    args: [{
      declarations: [
        C3FlowingMenuComponent,
        C3FlowingMenuItemComponent,
        C3FlowingMenuItemContentComponent
      ],
      imports: [CommonModule],
      exports: [
        C3FlowingMenuComponent,
        C3FlowingMenuItemComponent,
        C3FlowingMenuItemContentComponent
      ]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/pages/examples/examples.component.ts
var _c04 = () => ({});
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 34, vars: 4, consts: [[1, "my-4"], [1, "mb-1", "px-4", "pb-2"], ["title", ""], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["example", ""], ["menu-title", ""]], template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Component for display content with menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "example-viewer", 1)(3, "h4", 2);
    \u0275\u0275text(4, "Example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "c3-example-viewer-tab", 3)(6, "div")(7, "textarea", 4);
    \u0275\u0275text(8, "import { CommonModule } from '@angular/common';\nimport { Component } from '@angular/core';\nimport { C3FlowingMenuModule } from 'projects/c3-components/src/public-api';\n\n@Component({\n  selector: 'c3-flowing-menu',\n  standalone: true,\n  imports: [CommonModule, C3FlowingMenuModule],\n  templateUrl: './flowing-menu.component.html',\n  styleUrl: './flowing-menu.component.scss',\n})\nexport class FlowingMenuComponent {}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "c3-example-viewer-tab", 5)(10, "div")(11, "textarea", 6);
    \u0275\u0275text(12, "<c3-flowing-menu>\n  <c3-flowing-menu-item>\n    <h4 menu-title>Menu 1</h4>\n    <c3-flowing-menu-item-content>\n      <h1>Contenu 1</h1>\n      <p>\n        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        <br />\n        2. Sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua.\n        <br />\n      </p>\n    </c3-flowing-menu-item-content>\n  </c3-flowing-menu-item>\n\n  <c3-flowing-menu-item>\n    <h4 menu-title>Menu 2</h4>\n    <c3-flowing-menu-item-content>\n      <h1>Contenu 2</h1>\n      <p>\n        1. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n        laboris nisi ut aliquip ex ea commodo consequat.\n        2. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur.\n      </p>\n    </c3-flowing-menu-item-content>\n  </c3-flowing-menu-item>\n</c3-flowing-menu>\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(13, 7);
    \u0275\u0275elementStart(14, "c3-flowing-menu")(15, "c3-flowing-menu-item")(16, "h4", 8);
    \u0275\u0275text(17, "Menu 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "c3-flowing-menu-item-content")(19, "h1");
    \u0275\u0275text(20, "Contenu 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, " 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
    \u0275\u0275element(23, "br");
    \u0275\u0275text(24, " 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
    \u0275\u0275element(25, "br");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "c3-flowing-menu-item")(27, "h4", 8);
    \u0275\u0275text(28, "Menu 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "c3-flowing-menu-item-content")(30, "h1");
    \u0275\u0275text(31, "Contenu 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, " 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c04));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c04));
  }
}, dependencies: [
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective,
  C3FlowingMenuModule,
  C3FlowingMenuComponent,
  C3FlowingMenuItemComponent,
  C3FlowingMenuItemContentComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective,
      C3FlowingMenuModule
    ], template: `<p class="my-4">Component for display content with menu</p>

<example-viewer class="mb-1 px-4 pb-2">
  <h4 title>Example</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3FlowingMenuModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-flowing-menu',
  standalone: true,
  imports: [CommonModule, C3FlowingMenuModule],
  templateUrl: './flowing-menu.component.html',
  styleUrl: './flowing-menu.component.scss',
})
export class FlowingMenuComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-flowing-menu>
  <c3-flowing-menu-item>
    <h4 menu-title>Menu 1</h4>
    <c3-flowing-menu-item-content>
      <h1>Contenu 1</h1>
      <p>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        2. Sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
        <br />
      </p>
    </c3-flowing-menu-item-content>
  </c3-flowing-menu-item>

  <c3-flowing-menu-item>
    <h4 menu-title>Menu 2</h4>
    <c3-flowing-menu-item-content>
      <h1>Contenu 2</h1>
      <p>
        1. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
        2. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      </p>
    </c3-flowing-menu-item-content>
  </c3-flowing-menu-item>
</c3-flowing-menu>
      </textarea>
    </div>
  </c3-example-viewer-tab>
  <ng-container example>
    <c3-flowing-menu>
      <c3-flowing-menu-item>
        <h4 menu-title>Menu 1</h4>
        <c3-flowing-menu-item-content>
          <h1>Contenu 1</h1>
          <p>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            2. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
            <br />
          </p>
        </c3-flowing-menu-item-content>
      </c3-flowing-menu-item>

      <c3-flowing-menu-item>
        <h4 menu-title>Menu 2</h4>
        <c3-flowing-menu-item-content>
          <h1>Contenu 2</h1>
          <p>
            1. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            2. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </c3-flowing-menu-item-content>
      </c3-flowing-menu-item>
    </c3-flowing-menu>
  </ng-container>
</example-viewer>
`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/pages/examples/examples.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/pages/examples/examples.component.ts", lineNumber: 19 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/flowing-menu-routing.module.ts
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
var _FlowingMenuRoutingModule = class _FlowingMenuRoutingModule {
};
_FlowingMenuRoutingModule.\u0275fac = function FlowingMenuRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FlowingMenuRoutingModule)();
};
_FlowingMenuRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FlowingMenuRoutingModule });
_FlowingMenuRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var FlowingMenuRoutingModule = _FlowingMenuRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlowingMenuRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/flowing-menu/flowing-menu.module.ts
var _FlowingMenuModule = class _FlowingMenuModule {
};
_FlowingMenuModule.\u0275fac = function FlowingMenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FlowingMenuModule)();
};
_FlowingMenuModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FlowingMenuModule });
_FlowingMenuModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FlowingMenuRoutingModule
] });
var FlowingMenuModule = _FlowingMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlowingMenuModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        FlowingMenuRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  FlowingMenuModule
};
//# sourceMappingURL=chunk-HXP7ELHX.js.map

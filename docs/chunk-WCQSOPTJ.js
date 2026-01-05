import "./chunk-LRGXRPD7.js";
import "./chunk-HS5CBIXA.js";
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
import {
  MatRippleModule
} from "./chunk-CKAG3KXZ.js";
import {
  MatRipple
} from "./chunk-56K62WNN.js";
import "./chunk-PSEOTE3Z.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-ECYVAQNN.js";
import "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  DestroyRef,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  Observable,
  ViewChild,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  effect,
  filter,
  inject,
  input,
  map,
  setClassMetadata,
  signal,
  startWith,
  takeUntil,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/menu/pages/api/api.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/menu/pages/api/api.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-menu/services/c3-menu.service.ts
var _C3MenuService = class _C3MenuService {
  constructor() {
    this.selectedElement = null;
    this.currentRoute = signal("", ...ngDevMode ? [{ debugName: "currentRoute" }] : []);
    this.isHeadless = signal(false, ...ngDevMode ? [{ debugName: "isHeadless" }] : []);
    this._router = inject(Router);
    this._ar = inject(ActivatedRoute);
    this.currentRoute.set(this._router.routerState.snapshot.url);
    this.currentRouteChange = this._router.events.pipe(filter((status) => status.urlAfterRedirects !== void 0 && status.state === void 0), map((status) => {
      this.currentRoute.set(status.urlAfterRedirects);
      return status.urlAfterRedirects;
    }));
    this.isHeadless.set(this._ar.snapshot.queryParams["headless"] === "true");
  }
  setSelectedItem(element) {
    if (this.selectedElement)
      this.selectedElement.classList.remove("active-item");
    this.selectedElement = element;
    this.selectedElement.classList.add("active-item");
  }
};
_C3MenuService.\u0275fac = function C3MenuService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3MenuService)();
};
_C3MenuService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _C3MenuService, factory: _C3MenuService.\u0275fac, providedIn: "root" });
var C3MenuService = _C3MenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3MenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// projects/c3-components/src/lib/c3-menu/components/c3-menu/c3-menu.component.ts
var _c0 = ["*"];
function C3MenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "ul");
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd()()();
  }
}
var _C3MenuComponent = class _C3MenuComponent {
  constructor() {
    this._c3Menu = inject(C3MenuService);
  }
};
_C3MenuComponent.\u0275fac = function C3MenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3MenuComponent)();
};
_C3MenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3MenuComponent, selectors: [["c3-menu"]], standalone: false, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["id", "app-menu"], [1, "layout-main"], [1, "ui-scroll"]], template: function C3MenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275conditionalCreate(0, C3MenuComponent_Conditional_0_Template, 4, 0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx._c3Menu.isHeadless() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("headless", ctx._c3Menu.isHeadless());
  }
}, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=c3-menu.component.css.map */"] });
var C3MenuComponent = _C3MenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3MenuComponent, [{
    type: Component,
    args: [{ selector: "c3-menu", standalone: false, template: '@if(!_c3Menu.isHeadless()) {\n  <div id="app-menu">\n    <div class="ui-scroll">\n      <ul>\n        <ng-content></ng-content>\n      </ul>\n    </div>\n  </div>\n}\n<div class="layout-main" [class.headless]="_c3Menu.isHeadless()">\n  <router-outlet></router-outlet>\n</div>\n', styles: ["/* projects/c3-components/src/lib/c3-menu/components/c3-menu/c3-menu.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=c3-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3MenuComponent, { className: "C3MenuComponent", filePath: "projects/c3-components/src/lib/c3-menu/components/c3-menu/c3-menu.component.ts", lineNumber: 10 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// projects/c3-components/src/lib/c3-menu/components/c3-nav-item/c3-nav-item.component.ts
var _c02 = ["button"];
var _c1 = ["*"];
var _C3NavItemComponent = class _C3NavItemComponent {
  constructor() {
    this.route = input.required(...ngDevMode ? [{ debugName: "route" }] : []);
    this.itemTitle = input.required(...ngDevMode ? [{ debugName: "itemTitle" }] : []);
    this.check = input(null, ...ngDevMode ? [{ debugName: "check" }] : []);
    this.isExternal = input(false, ...ngDevMode ? [{ debugName: "isExternal" }] : []);
    this.element = viewChild("button", ...ngDevMode ? [{ debugName: "element", read: ElementRef }] : [{
      read: ElementRef
    }]);
    this._menu = inject(C3MenuService);
    this.destroyRef = inject(DestroyRef);
    this.currentRouteChangeSubscription = signal(null, ...ngDevMode ? [{ debugName: "currentRouteChangeSubscription" }] : []);
    effect(() => {
      if (!this.currentRouteChangeSubscription() && this.element()) {
        const subscribtion = this._menu.currentRouteChange.pipe(startWith(this._menu.currentRoute()), map((url) => url), takeUntilDestroyed(this.destroyRef)).subscribe((url) => {
          const _regex = new RegExp(this.check() || this.route());
          if (_regex.exec(url) && this.element())
            this._menu.setSelectedItem(this.element().nativeElement);
        });
        this.currentRouteChangeSubscription.set(subscribtion);
      }
    });
  }
};
_C3NavItemComponent.\u0275fac = function C3NavItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3NavItemComponent)();
};
_C3NavItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3NavItemComponent, selectors: [["c3-nav-item"]], viewQuery: function C3NavItemComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.element, _c02, 5, ElementRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { route: [1, "route"], itemTitle: [1, "itemTitle"], check: [1, "check"], isExternal: [1, "isExternal"] }, standalone: false, ngContentSelectors: _c1, decls: 6, vars: 3, consts: [["button", ""], ["matRipple", "", "matRippleColor", "#ffffff66", 3, "routerLink", "href"]], template: function C3NavItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "li", null, 0)(2, "a", 1);
    \u0275\u0275projection(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx.isExternal() ? null : ctx.route())("href", ctx.isExternal() ? ctx.route() : null, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.itemTitle(), " ");
  }
}, dependencies: [RouterLink, MatRipple], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=c3-nav-item.component.css.map */"] });
var C3NavItemComponent = _C3NavItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3NavItemComponent, [{
    type: Component,
    args: [{ selector: "c3-nav-item", standalone: false, template: '<li #button>\n  <a matRipple matRippleColor="#ffffff66" [routerLink]="isExternal() ? null : route()" [href]="isExternal() ? route() : null">\n    <ng-content></ng-content>\n    <span> {{ itemTitle() }} </span>\n  </a>\n</li>\n', styles: ["/* projects/c3-components/src/lib/c3-menu/components/c3-nav-item/c3-nav-item.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=c3-nav-item.component.css.map */\n"] }]
  }], () => [], { route: [{ type: Input, args: [{ isSignal: true, alias: "route", required: true }] }], itemTitle: [{ type: Input, args: [{ isSignal: true, alias: "itemTitle", required: true }] }], check: [{ type: Input, args: [{ isSignal: true, alias: "check", required: false }] }], isExternal: [{ type: Input, args: [{ isSignal: true, alias: "isExternal", required: false }] }], element: [{ type: ViewChild, args: ["button", __spreadProps(__spreadValues({}, {
    read: ElementRef
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3NavItemComponent, { className: "C3NavItemComponent", filePath: "projects/c3-components/src/lib/c3-menu/components/c3-nav-item/c3-nav-item.component.ts", lineNumber: 12 });
})();

// projects/c3-components/src/lib/c3-menu/c3-menu.module.ts
var _C3MenuModule = class _C3MenuModule {
};
_C3MenuModule.\u0275fac = function C3MenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3MenuModule)();
};
_C3MenuModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _C3MenuModule });
_C3MenuModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule, MatRippleModule] });
var C3MenuModule = _C3MenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3MenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, MatRippleModule],
      declarations: [C3MenuComponent, C3NavItemComponent],
      exports: [C3MenuComponent, C3NavItemComponent],
      providers: []
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/menu/components/menu-example/menu-example.component.ts
var _MenuExampleComponent = class _MenuExampleComponent {
};
_MenuExampleComponent.\u0275fac = function MenuExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuExampleComponent)();
};
_MenuExampleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuExampleComponent, selectors: [["c3-menu-example"]], decls: 10, vars: 0, consts: [["route", "/docs/menu/examples", "itemTitle", "Accueil"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "M3 12L12 3L21 12H16V21H8V12H3Z", "fill", "currentColor"], ["route", "/docs/menu/examples/TEST", "check", "/docs/menu/examples/TEST", "itemTitle", "TEST"], ["title", "Test", 1, "icon"], ["route", "/docs/menu/examples/test-2", "check", "/docs/menu/examples/test-2", "itemTitle", "T2"], ["title", "T2", 1, "icon"]], template: function MenuExampleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c3-menu")(1, "c3-nav-item", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 1);
    \u0275\u0275element(3, "path", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "c3-nav-item", 3)(5, "span", 4);
    \u0275\u0275text(6, "TE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c3-nav-item", 5)(8, "span", 6);
    \u0275\u0275text(9, "T2");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [C3MenuModule, C3MenuComponent, C3NavItemComponent, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  min-height: 600px;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=menu-example.component.css.map */"] });
var MenuExampleComponent = _MenuExampleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuExampleComponent, [{
    type: Component,
    args: [{ selector: "c3-menu-example", imports: [C3MenuModule, RouterModule], template: '<c3-menu>\n  <c3-nav-item route="/docs/menu/examples" itemTitle="Accueil">\n    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M3 12L12 3L21 12H16V21H8V12H3Z" fill="currentColor"/>\n  </svg>\n  </c3-nav-item>\n\n  <c3-nav-item\n    route="/docs/menu/examples/TEST"\n    check="/docs/menu/examples/TEST"\n    itemTitle="TEST"\n  >\n    <span class="icon" title="Test">TE</span>\n  </c3-nav-item>\n\n  <c3-nav-item\n    route="/docs/menu/examples/test-2"\n    check="/docs/menu/examples/test-2"\n    itemTitle="T2"\n  >\n    <span class="icon" title="T2">T2</span>\n  </c3-nav-item>\n</c3-menu>\n', styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/menu/components/menu-example/menu-example.component.scss */\n:host {\n  display: block;\n  position: relative;\n  min-height: 600px;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=menu-example.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuExampleComponent, { className: "MenuExampleComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/menu/components/menu-example/menu-example.component.ts", lineNumber: 11 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/menu/pages/examples/examples.component.ts
var _c03 = () => ({});
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 15, vars: 4, consts: [[1, "my-4"], ["title", ""], ["example", ""], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, " This is a menu example.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "example-viewer")(3, "h4", 1);
    \u0275\u0275text(4, "Menu Example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(5, 2);
    \u0275\u0275element(6, "c3-menu-example");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(7, "c3-example-viewer-tab", 3)(8, "div")(9, "textarea", 4);
    \u0275\u0275text(10, '<c3-menu>\n  <c3-nav-item route="/docs/menu/examples" itemTitle="Accueil">\n    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M3 12L12 3L21 12H16V21H8V12H3Z" fill="currentColor"/>\n  </svg>\n  </c3-nav-item>\n\n  <c3-nav-item\n    route="/docs/menu/examples/TEST"\n    check="/docs/menu/examples/TEST"\n    itemTitle="TEST"\n  >\n    <span class="icon" title="Test">TE</span>\n  </c3-nav-item>\n\n  <c3-nav-item\n    route="/docs/menu/examples/test-2"\n    check="/docs/menu/examples/test-2"\n    itemTitle="T2"\n  >\n    <span class="icon" title="T2">T2</span>\n  </c3-nav-item>\n</c3-menu>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "c3-example-viewer-tab", 5)(12, "div")(13, "textarea", 6);
    \u0275\u0275text(14, "import { Component } from '@angular/core';\nimport { RouterModule } from '@angular/router';\nimport { C3MenuModule } from 'c3-components';\n\n@Component({\n  selector: 'c3-menu-example',\n  imports: [C3MenuModule, RouterModule],\n  templateUrl: './menu-example.component.html',\n  styleUrl: './menu-example.component.scss',\n})\nexport class MenuExampleComponent { }\n\n      ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c03));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c03));
  }
}, dependencies: [
  MenuExampleComponent,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective
], encapsulation: 2 });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [
      MenuExampleComponent,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective
    ], template: `<p class="my-4">
  This is a menu example.
</p>


<example-viewer>
  <h4 title>Menu Example</h4>

  <ng-container example>
    <c3-menu-example />
  </ng-container>


  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-menu>
  <c3-nav-item route="/docs/menu/examples" itemTitle="Accueil">
    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L12 3L21 12H16V21H8V12H3Z" fill="currentColor"/>
  </svg>
  </c3-nav-item>

  <c3-nav-item
    route="/docs/menu/examples/TEST"
    check="/docs/menu/examples/TEST"
    itemTitle="TEST"
  >
    <span class="icon" title="Test">TE</span>
  </c3-nav-item>

  <c3-nav-item
    route="/docs/menu/examples/test-2"
    check="/docs/menu/examples/test-2"
    itemTitle="T2"
  >
    <span class="icon" title="T2">T2</span>
  </c3-nav-item>
</c3-menu>
      </textarea>
    </div>
  </c3-example-viewer-tab>


  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { C3MenuModule } from 'c3-components';

@Component({
  selector: 'c3-menu-example',
  imports: [C3MenuModule, RouterModule],
  templateUrl: './menu-example.component.html',
  styleUrl: './menu-example.component.scss',
})
export class MenuExampleComponent { }

      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/menu/pages/examples/examples.component.ts", lineNumber: 15 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/menu/menu-routing.module.ts
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
        path: "**",
        component: ExamplesComponent
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
var _MenuRoutingModule = class _MenuRoutingModule {
};
_MenuRoutingModule.\u0275fac = function MenuRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuRoutingModule)();
};
_MenuRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MenuRoutingModule });
_MenuRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var MenuRoutingModule = _MenuRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/menu/menu.module.ts
var _MenuModule = class _MenuModule {
};
_MenuModule.\u0275fac = function MenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuModule)();
};
_MenuModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MenuModule });
_MenuModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MenuRoutingModule
] });
var MenuModule = _MenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        MenuRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  MenuModule
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.14
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-WCQSOPTJ.js.map

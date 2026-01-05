import {
  animate,
  group,
  query,
  sequence,
  style,
  transition,
  trigger
} from "./chunk-6ZIKHCO3.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-DYF2Z4RC.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-XOJCRGWO.js";
import "./chunk-2WQUS347.js";
import "./chunk-OUHP5ZTC.js";
import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
import {
  ANIMATION_MODULE_TYPE,
  Component,
  DOCUMENT,
  Inject,
  Injectable,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/components/sidebar/sidebar.component.ts
function SidebarComponent_For_3_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.icon);
  }
}
function SidebarComponent_For_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 13);
    \u0275\u0275conditionalCreate(2, SidebarComponent_For_3_For_12_Conditional_2_Template, 2, 1, "mat-icon", 14);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.icon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function SidebarComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275listener("click", function SidebarComponent_For_3_Template_button_click_1_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCategory(category_r2.id));
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "mat-icon", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-icon", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "ul");
    \u0275\u0275repeaterCreate(11, SidebarComponent_For_3_For_12_Template, 5, 3, "li", null, \u0275\u0275componentInstance().trackByItem, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275classProp("expanded", category_r2.expanded);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", category_r2.expanded);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r2.expanded ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", !category_r2.expanded);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(category_r2.items);
  }
}
var _SidebarComponent = class _SidebarComponent {
  constructor() {
    this.categories = signal([
      {
        id: "getting-started",
        label: "Getting Started",
        icon: "rocket_launch",
        expanded: true,
        items: [
          { label: "Installation", path: "getting-started", icon: "download" }
        ]
      },
      {
        id: "components",
        label: "Components",
        icon: "widgets",
        expanded: true,
        items: [
          { label: "Dialog", path: "dialog" },
          { label: "Dropdown", path: "dropdown" },
          { label: "Expansion", path: "expansion" },
          { label: "File Displayer", path: "file-displayer" },
          { label: "File Viewer", path: "file-viewer" },
          { label: "Flowing Menu", path: "flowing-menu" },
          { label: "Menu", path: "menu" },
          { label: "Modal", path: "modal" },
          { label: "Tabs", path: "tabs" },
          { label: "Trace Card", path: "trace-card" },
          { label: "Tree", path: "tree" }
        ]
      },
      {
        id: "directives",
        label: "Directives",
        icon: "tune",
        expanded: false,
        items: [
          { label: "Auto Animate", path: "auto-animate" },
          { label: "Prevent Event", path: "prevent-event" },
          { label: "Select on Focus", path: "select-on-focus" }
        ]
      },
      {
        id: "utilities",
        label: "Utilities",
        icon: "build",
        expanded: false,
        items: [
          { label: "File Input", path: "file-input" },
          { label: "File Upload", path: "file-upload" },
          { label: "PDF Viewer", path: "pdf-viewer" },
          { label: "Safe URL", path: "safe-url" },
          { label: "Signals", path: "signals" },
          { label: "Navbar", path: "navbar" }
        ]
      },
      {
        id: "styles",
        label: "Styles",
        icon: "palette",
        expanded: false,
        items: [
          { label: "Rounded Title", path: "rounded-title" },
          { label: "Highlight Text", path: "highlight-text" }
        ]
      }
    ], ...ngDevMode ? [{ debugName: "categories" }] : []);
  }
  toggleCategory(categoryId) {
    this.categories.update((cats) => cats.map((cat) => cat.id === categoryId ? __spreadProps(__spreadValues({}, cat), { expanded: !cat.expanded }) : cat));
  }
  trackByCategory(index, category) {
    return category.id;
  }
  trackByItem(index, item) {
    return item.path;
  }
};
_SidebarComponent.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarComponent)();
};
_SidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["c3-sidebar"]], decls: 10, vars: 0, consts: [[1, "sidebar"], [1, "sidebar-nav"], [1, "nav-category", 3, "expanded"], [1, "sidebar-footer"], [1, "version-badge"], [1, "version-label"], [1, "version-number"], [1, "nav-category"], [1, "category-header", 3, "click"], [1, "category-label"], [1, "category-icon"], [1, "expand-icon"], [1, "category-items"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "item-icon"]], template: function SidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 0)(1, "nav", 1);
    \u0275\u0275repeaterCreate(2, SidebarComponent_For_3_Template, 13, 8, "div", 2, ctx.trackByCategory, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "span", 5);
    \u0275\u0275text(7, "Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "1.0.0");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.categories());
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive, MatIconModule, MatIcon], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: var(--sidebar-width);\n  height: calc(100vh - var(--header-height));\n  background: var(--sidebar-bg);\n  border-right: 1px solid var(--sidebar-border);\n  overflow: hidden;\n  transition: background-color var(--transition-normal), border-color var(--transition-normal);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1rem 0;\n}\n.nav-category[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n.category-header[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-link-hover);\n}\n.category-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--sidebar-category-color);\n}\n.category-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sidebar-category-color);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--text-muted);\n  transition: transform var(--transition-fast);\n}\n.nav-category.expanded[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.nav-category[_ngcontent-%COMP%]:not(.expanded)   .expand-icon[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.category-items[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 1000px;\n  transition: max-height var(--transition-normal) ease-out, opacity var(--transition-fast);\n}\n.category-items.collapsed[_ngcontent-%COMP%] {\n  max-height: 0;\n  opacity: 0;\n}\n.category-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.category-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem 0.5rem 2.75rem;\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: 400;\n  color: var(--text-secondary);\n  text-decoration: none;\n  border-left: 2px solid transparent;\n  transition: all var(--transition-fast);\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--sidebar-link-hover);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: var(--c3-primary);\n  background: var(--sidebar-link-active);\n  border-left-color: var(--c3-primary);\n  font-weight: 500;\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  opacity: 0.7;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--sidebar-border);\n}\n.version-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.75rem;\n  background: var(--surface-elevated);\n  border-radius: var(--border-radius-md);\n  font-size: var(--text-xs);\n}\n.version-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.version-number[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: var(--header-height);\n    z-index: var(--z-fixed);\n    transform: translateX(-100%);\n    transition: transform var(--transition-normal);\n    box-shadow: var(--shadow-xl);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
var SidebarComponent = _SidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "c3-sidebar", standalone: true, imports: [CommonModule, RouterModule, MatIconModule], template: `<aside class="sidebar">
  <nav class="sidebar-nav">
    @for (category of categories(); track trackByCategory($index, category)) {
      <div class="nav-category" [class.expanded]="category.expanded">
        <button
          class="category-header"
          (click)="toggleCategory(category.id)"
          [attr.aria-expanded]="category.expanded"
        >
          <div class="category-label">
            <mat-icon class="category-icon">{{ category.icon }}</mat-icon>
            <span>{{ category.label }}</span>
          </div>
          <mat-icon class="expand-icon">
            {{ category.expanded ? 'expand_less' : 'expand_more' }}
          </mat-icon>
        </button>

        <div class="category-items" [class.collapsed]="!category.expanded">
          <ul>
            @for (item of category.items; track trackByItem($index, item)) {
              <li>
                <a
                  class="nav-item"
                  [routerLink]="item.path"
                  routerLinkActive="active"
                >
                  @if (item.icon) {
                    <mat-icon class="item-icon">{{ item.icon }}</mat-icon>
                  }
                  <span>{{ item.label }}</span>
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    }
  </nav>

  <div class="sidebar-footer">
    <div class="version-badge">
      <span class="version-label">Version</span>
      <span class="version-number">1.0.0</span>
    </div>
  </div>
</aside>

`, styles: ["/* projects/c3-components-docs/src/app/components/sidebar/sidebar.component.scss */\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: var(--sidebar-width);\n  height: calc(100vh - var(--header-height));\n  background: var(--sidebar-bg);\n  border-right: 1px solid var(--sidebar-border);\n  overflow: hidden;\n  transition: background-color var(--transition-normal), border-color var(--transition-normal);\n}\n.sidebar-nav {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1rem 0;\n}\n.nav-category {\n  margin-bottom: 0.25rem;\n}\n.category-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n.category-header:hover {\n  background: var(--sidebar-link-hover);\n}\n.category-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--sidebar-category-color);\n}\n.category-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--sidebar-category-color);\n}\n.expand-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--text-muted);\n  transition: transform var(--transition-fast);\n}\n.nav-category.expanded .expand-icon {\n  transform: rotate(0deg);\n}\n.nav-category:not(.expanded) .expand-icon {\n  transform: rotate(-90deg);\n}\n.category-items {\n  overflow: hidden;\n  max-height: 1000px;\n  transition: max-height var(--transition-normal) ease-out, opacity var(--transition-fast);\n}\n.category-items.collapsed {\n  max-height: 0;\n  opacity: 0;\n}\n.category-items ul {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.category-items li {\n  margin: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem 0.5rem 2.75rem;\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: 400;\n  color: var(--text-secondary);\n  text-decoration: none;\n  border-left: 2px solid transparent;\n  transition: all var(--transition-fast);\n}\n.nav-item:hover {\n  color: var(--text-primary);\n  background: var(--sidebar-link-hover);\n}\n.nav-item.active {\n  color: var(--c3-primary);\n  background: var(--sidebar-link-active);\n  border-left-color: var(--c3-primary);\n  font-weight: 500;\n}\n.item-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  opacity: 0.7;\n}\n.sidebar-footer {\n  padding: 1rem;\n  border-top: 1px solid var(--sidebar-border);\n}\n.version-badge {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.75rem;\n  background: var(--surface-elevated);\n  border-radius: var(--border-radius-md);\n  font-size: var(--text-xs);\n}\n.version-label {\n  color: var(--text-muted);\n}\n.version-number {\n  font-family: var(--font-mono);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n@media (max-width: 1024px) {\n  .sidebar {\n    position: fixed;\n    left: 0;\n    top: var(--header-height);\n    z-index: var(--z-fixed);\n    transform: translateX(-100%);\n    transition: transform var(--transition-normal);\n    box-shadow: var(--shadow-xl);\n  }\n  .sidebar.open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "projects/c3-components-docs/src/app/components/sidebar/sidebar.component.ts", lineNumber: 27 });
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// projects/c3-components-docs/src/app/animations/route.animations.ts
var routeAnimations = trigger("routeAnimations", [
  transition("* <=> *", [
    // Initial state for entering page
    query(":enter", [
      style({
        opacity: 0,
        transform: "translateY(10px)"
      })
    ], { optional: true }),
    // Animate out leaving page and in entering page
    group([
      query(":leave", [
        animate("150ms ease-out", style({
          opacity: 0,
          transform: "translateY(-10px)"
        }))
      ], { optional: true }),
      query(":enter", [
        animate("200ms 100ms ease-out", style({
          opacity: 1,
          transform: "translateY(0)"
        }))
      ], { optional: true })
    ])
  ])
]);
var fadeAnimation = trigger("fadeAnimation", [
  transition("* <=> *", [
    query(":enter", [
      style({ opacity: 0 })
    ], { optional: true }),
    group([
      query(":leave", [animate("150ms ease-out", style({ opacity: 0 }))], { optional: true }),
      query(":enter", [animate("200ms ease-out", style({ opacity: 1 }))], { optional: true })
    ])
  ])
]);

// projects/c3-components-docs/src/app/pages/docs/docs.component.ts
var _DocsComponent = class _DocsComponent {
  prepareRoute(outlet) {
    return outlet?.activatedRouteData?.["animation"] || outlet?.activatedRoute?.routeConfig?.path || "";
  }
};
_DocsComponent.\u0275fac = function DocsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsComponent)();
};
_DocsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocsComponent, selectors: [["c3-docs"]], decls: 5, vars: 1, consts: [["outlet", "outlet"], [1, "docs-content"], [1, "docs-container"]], template: function DocsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c3-sidebar");
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
    \u0275\u0275element(3, "router-outlet", null, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const outlet_r1 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("@fadeAnimation", ctx.prepareRoute(outlet_r1));
  }
}, dependencies: [RouterModule, RouterOutlet, SidebarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-height: 0;\n}\n.docs-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: var(--surface-page);\n}\n.docs-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n@media (max-width: 640px) {\n  .docs-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  [_nghost-%COMP%] {\n    position: relative;\n  }\n  .docs-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=docs.component.css.map */"], data: { animation: [fadeAnimation] } });
var DocsComponent = _DocsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocsComponent, [{
    type: Component,
    args: [{ selector: "c3-docs", standalone: true, imports: [RouterModule, SidebarComponent], animations: [fadeAnimation], template: '<c3-sidebar />\n<section class="docs-content">\n  <div class="docs-container" [@fadeAnimation]="prepareRoute(outlet)">\n    <router-outlet #outlet="outlet" />\n  </div>\n</section>\n', styles: ["/* projects/c3-components-docs/src/app/pages/docs/docs.component.scss */\n:host {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-height: 0;\n}\n.docs-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: var(--surface-page);\n}\n.docs-container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n@media (max-width: 640px) {\n  .docs-container {\n    padding: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  :host {\n    position: relative;\n  }\n  .docs-content {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=docs.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocsComponent, { className: "DocsComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/docs.component.ts", lineNumber: 14 });
})();
export {
  DocsComponent
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.14
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-2MWIRSEW.js.map

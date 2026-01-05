import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-M3WS2NE6.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-DYF2Z4RC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/components/component-nav/component-nav.component.ts
var _c0 = (a0) => [a0];
function ComponentNavComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3, 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const rla_r2 = \u0275\u0275reference(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, link_r1.url))("relativeTo", ctx_r2.parentRoute)("active", rla_r2.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r1.label, " ");
  }
}
var _ComponentNavComponent = class _ComponentNavComponent {
  get parentRoute() {
    return this._activatedRoute.parent;
  }
  constructor(_activatedRoute) {
    this._activatedRoute = _activatedRoute;
    this.links = [];
    this.links = this._activatedRoute.snapshot.data["links"];
  }
};
_ComponentNavComponent.\u0275fac = function ComponentNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ComponentNavComponent)(\u0275\u0275directiveInject(ActivatedRoute));
};
_ComponentNavComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComponentNavComponent, selectors: [["c3-component-nav"]], decls: 7, vars: 1, consts: [["tabPanel", ""], ["rla", "routerLinkActive"], ["mat-tab-nav-bar", "", "mat-stretch-tabs", "false", "mat-align-tabs", "start", 3, "tabPanel"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "relativeTo", "active"], [1, "m-4"]], template: function ComponentNavComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 2);
    \u0275\u0275repeaterCreate(1, ComponentNavComponent_For_2_Template, 3, 6, "a", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-tab-nav-panel", null, 0)(5, "div", 4);
    \u0275\u0275element(6, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tabPanel_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("tabPanel", tabPanel_r4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.links);
  }
}, dependencies: [MatTabsModule, MatTabNav, MatTabNavPanel, MatTabLink, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\nnav[mat-tab-nav-bar][_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  background: var(--surface-elevated);\n  margin: -2rem -2rem 2rem -2rem;\n  padding: 0 2rem;\n}\nnav[mat-tab-nav-bar][_ngcontent-%COMP%]   .mat-mdc-tab-link[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-weight: 500;\n}\nmat-tab-nav-panel[_ngcontent-%COMP%] {\n  display: block;\n}\n.m-4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 640px) {\n  nav[mat-tab-nav-bar][_ngcontent-%COMP%] {\n    margin: -1rem -1rem 1rem -1rem;\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=component-nav.component.css.map */"] });
var ComponentNavComponent = _ComponentNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentNavComponent, [{
    type: Component,
    args: [{ selector: "c3-component-nav", standalone: true, imports: [MatTabsModule, RouterModule], template: '<nav\n  mat-tab-nav-bar\n  [tabPanel]="tabPanel"\n  mat-stretch-tabs="false"\n  mat-align-tabs="start"\n  >\n  @for (link of links; track link) {\n    <a\n      mat-tab-link\n      [routerLink]="[link.url]"\n      [relativeTo]="parentRoute"\n      routerLinkActive\n      #rla="routerLinkActive"\n      [active]="rla.isActive"\n      >\n      {{ link.label }}\n    </a>\n  }\n</nav>\n<mat-tab-nav-panel #tabPanel>\n  <div class="m-4">\n    <router-outlet></router-outlet>\n  </div>\n</mat-tab-nav-panel>\n', styles: ["/* projects/c3-components-docs/src/app/components/component-nav/component-nav.component.scss */\n:host {\n  display: block;\n}\nnav[mat-tab-nav-bar] {\n  border-bottom: 1px solid var(--border-color);\n  background: var(--surface-elevated);\n  margin: -2rem -2rem 2rem -2rem;\n  padding: 0 2rem;\n}\nnav[mat-tab-nav-bar] .mat-mdc-tab-link {\n  font-family: var(--font-body);\n  font-weight: 500;\n}\nmat-tab-nav-panel {\n  display: block;\n}\n.m-4 {\n  margin: 0;\n}\n@media (max-width: 640px) {\n  nav[mat-tab-nav-bar] {\n    margin: -1rem -1rem 1rem -1rem;\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=component-nav.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComponentNavComponent, { className: "ComponentNavComponent", filePath: "projects/c3-components-docs/src/app/components/component-nav/component-nav.component.ts", lineNumber: 12 });
})();

export {
  ComponentNavComponent
};
//# sourceMappingURL=chunk-PN4CLJLJ.js.map

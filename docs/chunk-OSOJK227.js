import {
  ComponentNavComponent
} from "./chunk-JZL7V6LU.js";
import {
  ExampleViewerComponent,
  ExampleViewerTabComponent
} from "./chunk-BIBYCL2S.js";
import "./chunk-JVJVJ3I4.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-B3LRXQVS.js";
import {
  TemplatePortal
} from "./chunk-MNEDZF6X.js";
import {
  HighlightJsDirective
} from "./chunk-CP5TLJ4H.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-CKAG3KXZ.js";
import "./chunk-56K62WNN.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-PSEOTE3Z.js";
import {
  RouterModule
} from "./chunk-ECYVAQNN.js";
import "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule,
  NgClass
} from "./chunk-HVHU2I45.js";
import {
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  Output,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  effect,
  forwardRef,
  inject,
  input,
  merge,
  model,
  setClassMetadata,
  signal,
  takeUntil,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/dropdown/pages/api/api.component.ts
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
    args: [{ selector: "c3-api", imports: [], template: "<p>api works!</p>,\n", styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/dropdown/pages/api/api.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/dropdown/pages/api/api.component.ts", lineNumber: 10 });
})();

// projects/c3-components/src/lib/c3-dropdown/components/c3-dropdown.component.ts
var _c0 = ["*"];
function C3DropdownComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.panelClass());
  }
}
var _C3DropdownComponent = class _C3DropdownComponent {
  constructor() {
    this.panelClass = input(...ngDevMode ? [void 0, { debugName: "panelClass" }] : []);
    this.isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
    this.template = viewChild.required(TemplateRef);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    effect(() => {
      if (this.panelClass()) {
        this._changeDetectorRef.markForCheck();
      }
    });
  }
};
_C3DropdownComponent.\u0275fac = function C3DropdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3DropdownComponent)();
};
_C3DropdownComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3DropdownComponent, selectors: [["c3-dropdown"]], viewQuery: function C3DropdownComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.template, TemplateRef, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { panelClass: [1, "panelClass"] }, standalone: false, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "c3-dropdown-panel", 3, "ngClass"]], template: function C3DropdownComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275template(0, C3DropdownComponent_ng_template_0_Template, 2, 1, "ng-template");
  }
}, dependencies: [NgClass], encapsulation: 2 });
var C3DropdownComponent = _C3DropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3DropdownComponent, [{
    type: Component,
    args: [{
      selector: "c3-dropdown",
      template: `
    <ng-template>
      <div class="c3-dropdown-panel" [ngClass]="panelClass()">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      standalone: false
    }]
  }], () => [], { panelClass: [{ type: Input, args: [{ isSignal: true, alias: "panelClass", required: false }] }], template: [{ type: ViewChild, args: [forwardRef(() => TemplateRef), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3DropdownComponent, { className: "C3DropdownComponent", filePath: "projects/c3-components/src/lib/c3-dropdown/components/c3-dropdown.component.ts", lineNumber: 23 });
})();

// projects/c3-components/src/lib/c3-dropdown/directives/c3-dropdown.trigger.ts
var MAT_DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => C3DropdownTrigger),
  multi: true
};
var _C3DropdownTrigger = class _C3DropdownTrigger {
  constructor(_element, _overlay, _viewContainerRef) {
    this._element = _element;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this._closingActionsSubscription = Subscription.EMPTY;
    this._destroyed = new Subject();
    this.dropdown = model.required(...ngDevMode ? [{ debugName: "dropdown", alias: "c3DropdownTrigger" }] : [{
      alias: "c3DropdownTrigger"
    }]);
    this.dropdownDisabled = input(false, ...ngDevMode ? [{ debugName: "dropdownDisabled" }] : []);
    this.dropdownClass = input("", ...ngDevMode ? [{ debugName: "dropdownClass" }] : []);
  }
  onClick() {
    this.show();
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._closingActionsSubscription.unsubscribe();
    this.close();
  }
  show() {
    if (!this.dropdown().template())
      return;
    this.dropdown().isOpen.set(true);
    const overlayRef = this._overlay.create(this._getOverlayConfig());
    const portal = new TemplatePortal(this.dropdown().template(), this._viewContainerRef);
    overlayRef.attach(portal);
    this.overlayRef = overlayRef;
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.close());
  }
  close() {
    if (this.overlayRef && this.overlayRef.hasAttached())
      this.overlayRef.detach();
    this.dropdown().isOpen.set(false);
  }
  _getOverlayConfig() {
    const belowPosition = {
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    };
    const abovePosition = {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      // The overlay edge connected to the trigger should have squared corners, while
      // the opposite end has rounded corners. We apply a CSS class to swap the
      // border-radius based on the overlay position.
      panelClass: "mat-autocomplete-panel-above"
    };
    const positionStrategy = this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withPositions([belowPosition, abovePosition]);
    return new OverlayConfig({
      positionStrategy,
      backdropClass: "cdk-overlay-transparent-backdrop",
      hasBackdrop: true
    });
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this.overlayRef.backdropClick();
    const detachments = this.overlayRef.detachments();
    return merge(backdrop, detachments).pipe(takeUntil(this._destroyed));
  }
};
_C3DropdownTrigger.\u0275fac = function C3DropdownTrigger_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3DropdownTrigger)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ViewContainerRef));
};
_C3DropdownTrigger.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _C3DropdownTrigger, selectors: [["", "c3DropdownTrigger", ""]], hostBindings: function C3DropdownTrigger_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function C3DropdownTrigger_click_HostBindingHandler() {
      return ctx.onClick();
    });
  }
}, inputs: { dropdown: [1, "c3DropdownTrigger", "dropdown"], dropdownDisabled: [1, "dropdownDisabled"], dropdownClass: [1, "dropdownClass"] }, outputs: { dropdown: "c3DropdownTriggerChange" }, standalone: false, features: [\u0275\u0275ProvidersFeature([MAT_DROPDOWN_VALUE_ACCESSOR])] });
var C3DropdownTrigger = _C3DropdownTrigger;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3DropdownTrigger, [{
    type: Directive,
    args: [{
      selector: "[c3DropdownTrigger]",
      providers: [MAT_DROPDOWN_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{ type: ElementRef }, { type: Overlay }, { type: ViewContainerRef }], { dropdown: [{ type: Input, args: [{ isSignal: true, alias: "c3DropdownTrigger", required: true }] }, { type: Output, args: ["c3DropdownTriggerChange"] }], dropdownDisabled: [{ type: Input, args: [{ isSignal: true, alias: "dropdownDisabled", required: false }] }], dropdownClass: [{ type: Input, args: [{ isSignal: true, alias: "dropdownClass", required: false }] }], onClick: [{
    type: HostListener,
    args: ["click"]
  }] });
})();

// projects/c3-components/src/lib/c3-dropdown/c3-dropdown.module.ts
var _C3DropdownModule = class _C3DropdownModule {
};
_C3DropdownModule.\u0275fac = function C3DropdownModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3DropdownModule)();
};
_C3DropdownModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _C3DropdownModule });
_C3DropdownModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, OverlayModule] });
var C3DropdownModule = _C3DropdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule],
      declarations: [C3DropdownComponent, C3DropdownTrigger],
      exports: [C3DropdownComponent, C3DropdownTrigger]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/dropdown/pages/examples/examples.component.ts
var _c02 = () => ({});
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 61, vars: 15, consts: [["dropdown", ""], ["dropdownTemplate", ""], ["dropdownVeryLongTemplate", ""], [1, "my-4"], [1, "mb-2", "px-4", "pb-2"], ["title", ""], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["example", ""], ["mat-raised-button", "", 3, "c3DropdownTrigger"], [1, "pa-1"]], template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "This is just a simple dropdown component with a template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "example-viewer", 4)(3, "h4", 5);
    \u0275\u0275text(4, "Basic dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "c3-example-viewer-tab", 6)(6, "div")(7, "textarea", 7);
    \u0275\u0275text(8, "import { Component } from '@angular/core';\nimport { C3DropdownModule } from 'c3-components';\nimport { MatButtonModule } from '@angular/material/button';\n\n@Component({\n  selector: 'app-dropdown-example',\n  standalone: true,\n  import: [C3DropdownModule, MatButtonModule],\n  templateUrl: './dropdown-example.component.html',\n})\nexport class DropdownExampleComponent {}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "c3-example-viewer-tab", 8)(10, "div")(11, "textarea", 9);
    \u0275\u0275text(12, '<button mat-raised-button [c3DropdownTrigger]="dropdown">Dropdown trigger</button>\n\n<c3-dropdown #dropdown>\n  Dropdown content\n</c3-dropdown>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(13, 10);
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275text(15, "Dropdown trigger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "c3-dropdown", null, 0);
    \u0275\u0275text(18, " Dropdown content ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "example-viewer", 4)(20, "h4", 5);
    \u0275\u0275text(21, "Dropdown with template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "c3-example-viewer-tab", 6)(23, "div")(24, "textarea", 7);
    \u0275\u0275text(25, "import { Component } from '@angular/core';\nimport { C3DropdownModule } from 'c3-components';\nimport { MatButtonModule } from '@angular/material/button';\n\n@Component({\n  selector: 'app-dropdown-example',\n  standalone: true,\n  import: [C3DropdownModule, MatButtonModule],\n  templateUrl: './dropdown-example.component.html',\n})\nexport class DropdownExampleComponent {}\n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "c3-example-viewer-tab", 8)(27, "div")(28, "textarea", 9);
    \u0275\u0275text(29, '<button mat-raised-button [c3DropdownTrigger]="dropdownTemplate">Dropdown trigger</button>\n\n<c3-dropdown #dropdownTemplate>\n  <div class="pa-1">\n    <h4>Dropdown template</h4>\n    <p>\n      This is a dropdown template\n    </p>\n  </div>\n</c3-dropdown>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(30, 10);
    \u0275\u0275elementStart(31, "button", 11);
    \u0275\u0275text(32, " Dropdown trigger ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "c3-dropdown", null, 1)(35, "div", 12)(36, "h4");
    \u0275\u0275text(37, "Dropdown template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "This is a dropdown template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "example-viewer", 4)(41, "h4", 5);
    \u0275\u0275text(42, "Dropdown with dropdownVeryLongTemplate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "c3-example-viewer-tab", 6)(44, "div")(45, "textarea", 7);
    \u0275\u0275text(46, "import { Component } from '@angular/core';\nimport { C3DropdownModule } from 'c3-components';\nimport { MatButtonModule } from '@angular/material/button';\n\n@Component({\n  selector: 'app-dropdown-example',\n  standalone: true,\n  import: [C3DropdownModule, MatButtonModule],\n  templateUrl: './dropdown-example.component.html',\n})\nexport class DropdownExampleComponent {}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "c3-example-viewer-tab", 8)(48, "div")(49, "textarea", 9);
    \u0275\u0275text(50, '<button mat-raised-button [c3Dropdown]="dropdownVeryLongTemplate">Dropdown trigger</button>\n\n<c3-dropdown #dropdownVeryLongTemplate>\n  <div class="pa-1">\n    <h4>Dropdown template</h4>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut pretium odio. Nullam laoreet imperdiet\n      sagittis.\n      Aliquam ac sodales augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus vehicula id at mi. Nulla\n      aliquam\n      ante sit amet mauris semper posuere. Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros\n      magna,\n      auctor at purus eget, mattis pellentesque tellus.\n\n      Cras nec mi justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla tortor velit, nec pharetra\n      leo\n      hendrerit vitae. Fusce at laoreet magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem. Praesent\n      in sapien\n      eu lectus pharetra hendrerit eu eget ligula. Fusce bibendum dui non risus aliquam, ac lacinia velit gravida.\n      Proin\n      semper tortor massa, eget lacinia turpis fermentum sed. Sed malesuada fermentum bibendum. Aenean non turpis a\n      eros\n      aliquam eleifend non in erat. Donec interdum porta quam et porttitor.\n\n      Nam rutrum est sed bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer nulla purus, lacinia\n      tempus\n      porta ut, posuere eget augue. Vivamus molestie posuere urna sit amet tempor. Suspendisse potenti. Class aptent\n      taciti\n      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id eros purus. Integer vitae\n      urna ut\n      nibh pretium facilisis.\n\n      Morbi at scelerisque arcu, eget efficitur ex. Fusce tempor libero vitae est pellentesque, eu ultrices nisl\n      facilisis.\n      Sed eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique sollicitudin eu, suscipit quis\n      ipsum.\n      Praesent sed est et libero gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet interdum ac a\n      est. Donec\n      eget vulputate nisi, in fermentum odio. Sed posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh\n      ac quam\n      pellentesque maximus quis id mauris. Donec nec turpis sed augue posuere accumsan in sed erat. Maecenas tempus,\n      sem in\n      posuere tempus, odio leo pellentesque lorem, et commodo risus risus vitae elit. Aliquam nisl enim, iaculis\n      eget sapien\n      semper, iaculis euismod massa. Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas ante dui,\n      venenatis eu\n      convallis nec, fermentum eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n      Nullam sem ligula, dictum non aliquet eget, vestibulum sit amet odio. In quam metus, malesuada et accumsan\n      eget,\n      lobortis sit amet diam. Phasellus dolor arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed\n      risus mi.\n      Quisque sagittis augue vitae justo cursus efficitur. Etiam sit amet neque sed lacus pretium feugiat eget eget\n      lorem.\n      Nunc laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id tincidunt neque mi ut eros. Curabitur\n      tellus\n      nibh, hendrerit id orci vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat, sed placerat\n      nisi mattis.\n      Pellentesque condimentum placerat turpis vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus\n      lobortis\n      feugiat. Maecenas pulvinar, mauris sit amet tempor interdum, neque lorem gravida tortor, eget vulputate leo\n      diam in\n      arcu.\n\n      In vitae magna vel quam suscipit iaculis. Donec congue consectetur finibus. Etiam porta, arcu sed tincidunt\n      dictum,\n      risus neque sodales diam, id ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl imperdiet\n      viverra sit\n      amet vitae metus. Mauris gravida ante lacus, a auctor velit varius vitae. Suspendisse in mauris eu mauris\n      fermentum\n      sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis tellus sodales in. Nullam tempor sem vitae\n      aliquam\n      dapibus. Donec vel egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut mi. Etiam sed ipsum\n      nisl.\n\n      Sed sed nunc massa. Sed nec rhoncus magna, quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim.\n      Fusce non\n      justo libero. Nullam vitae purus efficitur, finibus tortor vitae, aliquet purus. Fusce pulvinar erat neque,\n      sed ornare\n      risus finibus a. Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu a felis sagittis\n      imperdiet.\n      Integer sem lorem, sagittis et velit vitae, bibendum egestas odio. Nam interdum felis elementum lectus congue\n      luctus.\n      Nunc id accumsan erat. Maecenas eu metus eu lectus feugiat semper vel sed diam.\n\n      Sed rhoncus est neque. Sed non euismod augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non\n      pretium at,\n      elementum quis orci. Nam tempor maximus massa eu dictum. Quisque sed turpis tristique, condimentum est quis,\n      lacinia\n      lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non erat\n      ultrices,\n      facilisis lacus id, varius velit.\n\n      Aliquam felis metus, blandit eget lobortis eu, congue quis mauris. Quisque varius nibh a condimentum\n      consectetur.\n      Suspendisse potenti. Phasellus condimentum quam ac diam vulputate rutrum a rutrum odio. Sed in elit bibendum,\n      aliquam\n      leo fermentum, vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in blandit ipsum. Nulla\n      viverra gravida\n      venenatis. Aliquam blandit, felis efficitur tempus tristique, diam tellus eleifend lacus, sed commodo erat\n      arcu ut\n      neque. Duis laoreet urna sodales dictum dapibus. Nam diam est, dignissim a odio eu, mattis pellentesque\n      turpis.\n      Curabitur convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut viverra, elit quis euismod\n      consequat, orci\n      velit ultricies massa, sed vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec sodales.\n      Aenean mollis\n      nisl ut orci iaculis dictum.\n\n      Suspendisse eget orci nec libero convallis semper et a lectus. Curabitur ac ante quam. Sed sodales velit non\n      odio\n      vestibulum, sed vestibulum leo suscipit. Ut ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi\n      tristique\n      senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, tellus a vulputate tempus,\n      neque orci\n      porta enim, at semper dolor velit et libero. Nulla id laoreet dui. Pellentesque eros velit, congue et nulla\n      sit amet,\n      elementum aliquam sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet arcu sit amet\n      condimentum.\n      Pellentesque gravida, libero nec fermentum feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet\n      nunc.\n      Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a laoreet nunc, lacinia fermentum arcu. Donec ex\n      metus,\n      rhoncus sit amet velit vitae, scelerisque tempor dolor.\n\n      In volutpat ullamcorper fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas dapibus sapien a\n      sollicitudin\n      molestie. Nulla non iaculis neque. Cras malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium\n      nulla sapien\n      vel felis. Ut porta condimentum magna sed interdum. Cras eu felis risus. Proin vel dui quis nibh vulputate\n      pulvinar.\n      Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis purus id, sodales purus. Donec egestas diam\n      quis quam\n      eleifend ullamcorper.\n\n      Aliquam scelerisque commodo eleifend. Vestibulum bibendum bibendum lectus a dictum. Maecenas pulvinar id eros\n      interdum\n      eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n      Curabitur nec\n      erat lorem. In mollis tempus massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam. Suspendisse rhoncus\n      felis non\n      tellus pellentesque elementum.\n\n      Phasellus in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent vel auctor risus, hendrerit\n      ornare\n      magna. Duis sit amet justo nec nisl consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a\n      tellus.\n      Vivamus nulla diam, vulputate eu velit ultricies, ultrices imperdiet odio. Duis et rutrum elit. Duis dictum\n      finibus nisi\n      ac malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere.\n\n      Maecenas vehicula dictum blandit. Donec auctor metus a interdum congue. Nullam ipsum erat, pulvinar id nisl\n      sit amet,\n      feugiat efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut pulvinar. Phasellus quis massa\n      ut lacus\n      imperdiet imperdiet. Proin iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent auctor mollis\n      congue.\n      Curabitur pharetra, sapien in accumsan porta, risus neque feugiat elit, non sollicitudin sapien diam facilisis\n      ligula.\n      Morbi tincidunt efficitur fringilla. Aenean vitae semper urna, nec aliquet diam. Mauris vel turpis vitae orci\n      tincidunt\n      aliquam et ac turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis urna.\n\n      Etiam nec purus ut augue rhoncus tempor. Fusce efficitur eleifend imperdiet. Pellentesque vel mi sed leo\n      elementum\n      sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus convallis venenatis. Ut\n      rutrum\n      ipsum malesuada turpis ultrices sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien,\n      venenatis non\n      orci vel, convallis lobortis lorem. Quisque id scelerisque dolor, sit amet venenatis nunc. Nam lobortis\n      dapibus velit,\n      ac porta diam sollicitudin sit amet. Maecenas condimentum nibh quis purus dapibus fringilla. Curabitur a\n      consequat urna.\n\n      Nunc in massa elementum, malesuada purus et, placerat nisl. Curabitur sollicitudin purus odio, in bibendum\n      purus\n      lobortis non. Morbi sed dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum et malesuada\n      fames ac ante\n      ipsum primis in faucibus. Donec suscipit sit amet enim quis posuere. Ut convallis libero vel arcu malesuada\n      vehicula.\n      Proin scelerisque imperdiet eros. Duis et quam nunc. Donec pretium, enim quis commodo placerat, turpis dolor\n      condimentum\n      sapien, at porttitor eros urna sit amet eros. Nulla facilisis eleifend placerat.\n\n      Cras nec est nisi. Mauris vitae purus eu tortor rhoncus tincidunt. Etiam vitae libero vitae sapien sodales\n      scelerisque.\n      Mauris nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet venenatis. Etiam interdum sodales\n      efficitur.\n      Mauris ullamcorper risus nec accumsan pellentesque. Pellentesque habitant morbi tristique senectus et netus et\n      malesuada\n      fames ac turpis egestas. Phasellus a eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a\n      finibus\n      tempus, tortor mi pulvinar augue, eget finibus leo sem ac turpis. Pellentesque habitant morbi tristique\n      senectus et\n      netus et malesuada fames ac turpis egestas.\n\n      Sed lobortis ante eu magna gravida, non gravida libero tempus. Nam pellentesque varius velit, a efficitur nisi\n      egestas\n      sit amet. Sed volutpat mauris vel faucibus bibendum. Aenean viverra porttitor lacus. Donec mi nunc, eleifend\n      blandit\n      dictum eget, maximus quis felis. Proin gravida, quam in dignissim iaculis, quam odio auctor risus, in mattis\n      lorem orci\n      vel ante. In erat ligula, ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non maximus\n      fermentum.\n      Curabitur consectetur nisl at est ornare, viverra viverra purus laoreet. Proin nunc mauris, interdum eget erat\n      eget,\n      interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas dignissim turpis id leo mattis\n      tristique.\n      Vestibulum pulvinar tempus ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac habitasse\n      platea\n      dictumst.\n\n      Fusce ac efficitur arcu. Fusce id orci at ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum\n      nisl, quis\n      porta diam tincidunt sed. Duis condimentum dui dui, quis tristique tellus accumsan sit amet. Nunc semper ex\n      feugiat\n      lacinia aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis velit. Nulla ut ligula et quam\n      hendrerit\n      feugiat. Aenean ultricies maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin mattis, tellus\n      dapibus\n      dapibus lacinia, dolor dolor rhoncus magna, nec semper eros nibh sit amet justo. Nullam vulputate tortor dui,\n      id luctus\n      tellus aliquam sit amet. Vestibulum cursus massa luctus velit hendrerit hendrerit. Curabitur at faucibus\n      sapien, at\n      bibendum erat.\n\n      Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros quam, elementum sit amet erat a, placerat\n      ornare\n      libero. Phasellus auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra vestibulum tortor, non\n      congue nulla\n      mollis in. Fusce at metus tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac ipsum fermentum\n      tempus.\n      Fusce velit felis, dictum vitae interdum vitae, mattis in augue. Vestibulum enim dolor, elementum non\n      tincidunt ac,\n      ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit laoreet. Phasellus ornare, nisl sed lobortis\n      condimentum, ante dui viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus leo.\n\n      Aliquam porta mi eget ante egestas volutpat. Sed diam quam, lacinia sed scelerisque eu, ultricies in sem.\n      Aliquam in\n      porta magna, nec euismod ante. Nullam justo dolor, facilisis at vehicula vel, lacinia vitae mi. Nullam congue\n      imperdiet\n      nibh ac porta. Quisque vitae libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor tempor,\n      iaculis\n      mauris a, tincidunt ante. Nunc vestibulum dolor diam, a ultrices dui sollicitudin ut.\n\n      Praesent porttitor quam turpis, vitae venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla augue,\n      venenatis\n      vitae neque ac, ultricies pulvinar mi. Nullam neque arcu, ullamcorper vel justo ac, porttitor consequat leo.\n      Vestibulum\n      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut imperdiet aliquet dui eget\n      convallis.\n      Nunc lobortis eget diam commodo ultrices. Aenean aliquet bibendum nisl sit amet pellentesque. Nam nibh elit,\n      porta id\n      enim sit amet, porta tempor felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien, ac finibus\n      nisl.\n\n      Mauris eu pulvinar est. Pellentesque iaculis massa velit, vitae venenatis lacus ullamcorper id. In finibus\n      elit quis ex\n      consequat, scelerisque finibus ante blandit. Quisque et dolor turpis. Integer ipsum turpis, varius quis ante\n      sit amet,\n      viverra viverra mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi vel convallis.\n      Pellentesque\n      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus in lorem non\n      tempus. Nam\n      auctor accumsan varius. Aenean in magna viverra, tempor felis quis, fringilla arcu.\n\n      Etiam vel neque ipsum. In congue gravida est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est\n      interdum\n      viverra ac et nisi. Morbi egestas porttitor nulla in rutrum. Nam enim enim, fringilla nec magna a, rutrum\n      dapibus urna.\n      Donec dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in sollicitudin accumsan, odio massa\n      ultrices mi,\n      nec suscipit erat lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at diam consectetur, id\n      tincidunt\n      nunc congue. Mauris ullamcorper consectetur convallis. In vitae enim dapibus, egestas tortor sed, malesuada\n      sem. Aliquam\n      vel metus at libero varius bibendum sagittis blandit lectus. Nullam luctus dui non lacus scelerisque, quis\n      tincidunt\n      nisi egestas.\n\n      Fusce tempus fringilla velit quis placerat. Sed et vulputate erat. In commodo ante efficitur, porta ante eu,\n      egestas\n      velit. Nullam quam neque, dapibus eu interdum egestas, mollis sit amet orci. Suspendisse scelerisque diam\n      vehicula\n      ligula convallis, sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla diam. Fusce ac lacus\n      sit amet\n      quam tincidunt suscipit a ultricies nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis.\n      Aenean\n      efficitur arcu in ex faucibus convallis. Phasellus lorem nisi, ullamcorper ut mattis vitae, volutpat et erat.\n      Quisque\n      posuere elit arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex mauris, volutpat ut tempus\n      eget,\n      accumsan eu lectus. Vivamus faucibus blandit nunc tempor faucibus.\n\n      Etiam at sem ut nisl blandit venenatis. Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc,\n      ornare\n      bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed blandit velit, sit amet posuere augue. Nam\n      laoreet\n      tempus nunc at aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci eget posuere. Nulla quis\n      mattis sem,\n      eget maximus est. Quisque mattis, mi ac accumsan convallis, ante risus posuere neque, nec ornare risus purus\n      quis nulla.\n      Sed id sem id tellus pretium gravida sit amet eget eros.\n\n      Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin rhoncus. Proin egestas libero ut felis semper\n      malesuada.\n      Curabitur pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus maximus ut et lectus.\n      Praesent iaculis\n      justo nec arcu convallis fringilla et sed massa. Aliquam id dictum odio. Donec purus velit, imperdiet vel\n      consequat\n      quis, viverra sit amet leo. Ut malesuada ex ut arcu posuere, et ullamcorper mi tempus.\n\n      Integer ut lorem id ipsum vulputate viverra et non urna. Nullam commodo aliquam mi in condimentum. Nullam\n      suscipit in\n      neque a faucibus. Cras vitae eros nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus ac\n      aliquet\n      ligula. In ultrices velit vel consectetur blandit. Sed lorem dui, pretium sit amet laoreet sed, blandit at\n      lectus.\n\n      Sed congue, justo in ultrices vehicula, quam risus consequat eros, nec fringilla orci mi ac elit. Aliquam\n      feugiat, lorem\n      vitae feugiat iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio quis libero. Curabitur in\n      eleifend\n      est, nec ornare nibh. In vehicula molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit amet\n      ipsum\n      consectetur, quis imperdiet dolor pharetra. Quisque non dolor sit amet sapien mattis eleifend sit amet vel\n      massa. Fusce\n      ante ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc. Nulla et eleifend libero, sit amet\n      consectetur\n      nisi. Duis congue vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus at, commodo augue.\n      Donec ut neque\n      mattis, sagittis ligula quis, ultricies magna. In hac habitasse platea dictumst.\n\n      Phasellus dignissim arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis volutpat. Curabitur\n      magna urna,\n      euismod vel nibh non, interdum congue tortor. Suspendisse vel aliquam elit, interdum tristique lectus.\n      Maecenas porta\n      quam vel odio elementum, vel iaculis turpis faucibus. Quisque in lectus pellentesque, pretium nisl et,\n      tincidunt enim.\n      Nullam maximus ligula placerat eros dignissim maximus.\n\n      Maecenas malesuada est nec ultrices ultrices. Quisque ut elit vel ante pellentesque consequat. Morbi laoreet\n      felis mi.\n      Integer ex libero, sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit eleifend nisi vel\n      consectetur. Sed\n      et convallis nisl, quis hendrerit purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida\n      lacinia est,\n      non tempus turpis mattis quis. Curabitur ultrices arcu nec finibus sagittis. Donec fringilla tincidunt lacus\n      ac\n      pulvinar. Nunc ultricies nunc at ex lobortis ornare.\n\n      Fusce placerat dictum lacus non luctus. Proin placerat maximus feugiat. Pellentesque posuere commodo dui eget\n      rutrum.\n      Pellentesque sed nisi sapien. Sed sem magna, dictum et augue non, dignissim porttitor mi. Etiam ornare nisl\n      odio, a\n      efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum aliquam. Vestibulum vulputate elit nisl, eget\n      posuere\n      augue dictum eu. Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque. Etiam a consequat quam.\n      Duis non\n      rutrum lacus, non hendrerit sapien. Aliquam leo urna, placerat quis pellentesque eget, semper malesuada quam.\n      Curabitur\n      quis arcu sodales, tempor dolor at, faucibus enim. Fusce nec mollis quam.\n\n      Morbi sit amet nibh interdum, dapibus nisl at, venenatis tellus. Maecenas finibus tellus et risus scelerisque\n      venenatis.\n      Integer malesuada justo id quam pharetra, at feugiat dui ultricies. Nunc interdum erat orci, ut imperdiet\n      ligula dictum\n      vitae. Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce\n      vehicula sed\n      nisi sed venenatis. Donec lacinia sit amet enim nec porttitor.\n\n      Cras mollis dictum condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et malesuada fames ac ante\n      ipsum primis\n      in faucibus. Donec ipsum erat, bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales commodo\n      eleifend. Sed\n      auctor, dolor quis aliquet convallis, nisl magna interdum massa, non malesuada ex leo nec augue. Curabitur\n      efficitur\n      turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat pellentesque. Nulla at feugiat risus.\n      Integer rhoncus\n      nisl id dolor iaculis, id mollis leo pharetra.\n\n      Etiam convallis semper libero nec pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a.\n      Aliquam mauris\n      nisl, convallis at pellentesque eu, tempus nec nulla. Praesent sodales cursus erat, ac dignissim leo convallis\n      scelerisque. Mauris semper mi non neque vehicula convallis. Suspendisse dictum justo eget tortor placerat\n      malesuada.\n      Duis a gravida orci, nec maximus neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id. Sed ac\n      mauris\n      metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio pellentesque consequat nec sed libero.\n\n      Ut dignissim libero quis lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur ullamcorper\n      turpis.\n      Donec viverra purus et purus vehicula rutrum. Nam iaculis non nulla eu egestas. Donec ac quam purus. Aliquam\n      quis erat\n      eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla id, venenatis nisi. Suspendisse vehicula\n      placerat\n      augue in vestibulum. Nulla elit neque, facilisis quis urna et, auctor tincidunt erat. Suspendisse ut aliquet\n      lectus.\n      Cras in rhoncus lacus. Fusce nisi neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis nisl,\n      eget\n      gravida magna. Vivamus tempus pharetra elit sed accumsan. Cras sed gravida mi. Fusce rhoncus ac erat a\n      placerat.\n\n      Nam congue, leo vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus lorem nunc at dolor. Duis\n      cursus\n      lacinia ex, at finibus diam ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut libero. Morbi\n      venenatis at\n      ipsum ut dignissim. In in lacus eget tortor porttitor auctor eu sit amet lectus. Phasellus pharetra posuere\n      risus, id\n      tincidunt libero scelerisque ac. Praesent eleifend ante nec augue eleifend iaculis a nec urna. Proin tincidunt\n      scelerisque nulla, pharetra dictum eros tempor non. Duis eros tellus, condimentum at sapien ac, aliquet\n      ullamcorper est.\n      Fusce nec risus consectetur nisi pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus. Morbi\n      porta\n      ligula id risus scelerisque sagittis. Cras quis arcu porta, ullamcorper dolor vel, tincidunt metus.\n\n      Ut finibus sem in nibh dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae turpis nec,\n      consectetur\n      varius nisl. Quisque ut risus varius, fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor\n      commodo\n      pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi blandit dui non libero volutpat, id lacinia est\n      tincidunt.\n      Aliquam erat volutpat. Ut ante magna, pellentesque in orci sollicitudin, vestibulum tristique leo. Quisque sed\n      tincidunt\n      est.\n\n      Nam in ornare ex. Donec faucibus, lorem at facilisis finibus, purus felis commodo sapien, et commodo risus\n      magna a sem.\n      Cras ornare sapien vulputate consequat condimentum. Proin ultricies et urna non congue. Fusce sed feugiat sem.\n      Nunc ut\n      purus ac nulla tincidunt eleifend porttitor eu eros. Mauris imperdiet eu augue vel malesuada. Cras blandit,\n      augue ut\n      pretium facilisis, nulla mauris semper risus, quis mollis felis est at arcu. Nullam hendrerit feugiat tellus,\n      at luctus\n      odio porta vel. Nam bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus euismod nulla metus\n      ut nibh.\n      Mauris eleifend, elit ut vulputate semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam\n      elementum\n      tortor sed sodales sodales. Mauris posuere metus quis mi sagittis, ut varius metus euismod. Integer feugiat,\n      orci vitae\n      volutpat blandit, libero augue semper lacus, sit amet tristique lacus dolor ac purus. Vestibulum tincidunt\n      eros et\n      cursus pellentesque. Donec convallis placerat dapibus.\n\n      Nullam tortor diam, cursus vitae est quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas\n      egestas. Mauris\n      euismod lorem non risus ornare, vel consectetur felis pretium. Pellentesque habitant morbi tristique senectus\n      et netus\n      et malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis lectus at, condimentum egestas\n      ipsum. Lorem\n      ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis urna sed, imperdiet\n      lorem.\n      Vivamus cursus nulla consequat mi consequat pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna\n      elementum,\n      laoreet pellentesque ex. Fusce ac nisl id justo vehicula elementum rutrum at est. Aenean scelerisque dignissim\n      lacus ac\n      euismod.\n\n      Etiam eget est convallis, elementum nibh a, rutrum est. Suspendisse potenti. Suspendisse potenti. Quisque\n      porttitor\n      tincidunt libero. Sed vulputate nunc sed tortor fringilla maximus. Duis venenatis diam in nunc posuere, eget\n      dictum quam\n      lacinia. Cras ipsum dolor, mattis nec massa ac, aliquet fermentum elit. Integer a convallis arcu. Sed placerat\n      euismod\n      arcu, quis hendrerit diam ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula. Aliquam erat\n      volutpat. Nam\n      semper pellentesque magna, non ornare ante sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia\n      lacus.\n      Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem a elit vestibulum, et sagittis nibh\n      sollicitudin.\n\n      Quisque vulputate dignissim tellus. Aliquam eu tortor quis felis suscipit luctus. Quisque eu mattis elit,\n      venenatis\n      sollicitudin massa. Fusce convallis, mauris eu tristique consectetur, lacus risus congue urna, eu dignissim\n      est sapien\n      sed lectus. Phasellus dui magna, maximus eget augue in, ornare scelerisque sem. Curabitur porttitor tortor id\n      felis\n      vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam egestas nibh diam, vitae sollicitudin leo\n      tempor\n      vitae. Suspendisse interdum tristique bibendum. Mauris pellentesque eros sit amet hendrerit dignissim. Sed\n      auctor urna\n      vel sapien accumsan pulvinar. Aliquam a dui et metus laoreet egestas.\n\n      In hac habitasse platea dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod tellus. Phasellus\n      fringilla\n      quam vitae felis ultrices, vulputate pellentesque massa commodo. Etiam rutrum non lorem at vehicula.\n      Pellentesque non\n      pretium massa, id rutrum nunc. Aliquam nisi lectus, mollis sed rhoncus et, mollis quis sapien. Integer sit\n      amet dolor in\n      sapien consequat vehicula at id dolor. Nulla sodales eget enim eu lacinia. Maecenas accumsan libero nisl, vel\n      egestas\n      ante gravida at.\n\n      Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam sagittis non justo eu sollicitudin.\n      Cras libero\n      justo, molestie id maximus in, accumsan et augue. Quisque rhoncus tortor at dolor ullamcorper laoreet. Mauris\n      sed\n      pharetra felis, a varius lorem. Sed dictum ultricies magna non condimentum. Etiam blandit iaculis libero.\n      Quisque et\n      ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam neque sem, convallis id porta eu, congue quis ipsum.\n      Etiam ut\n      massa ac libero pretium consequat. Maecenas euismod consequat imperdiet. Praesent a diam purus. Integer sit\n      amet\n      placerat tellus.\n\n      Mauris nec ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula, sapien semper maximus ultricies,\n      nibh\n      ligula varius nisl, at laoreet lectus eros venenatis ligula. Cras tempor convallis nisl porta fringilla. Morbi\n      eget\n      elementum dolor. Curabitur nulla quam, sodales id commodo nec, pulvinar sed justo. Quisque aliquam ante quis\n      finibus\n      pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum vitae. Quisque nec viverra velit, sit amet\n      consequat\n      ligula. Etiam in bibendum massa.\n\n      Fusce ornare tristique nisl, a venenatis felis facilisis in. In eget leo ac neque suscipit aliquam. Quisque\n      enim orci,\n      interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi justo, tristique ac nisl id, pretium porta\n      libero.\n      Pellentesque ultrices, nulla a aliquet elementum, magna risus molestie ex, eu fringilla libero velit vitae\n      diam.\n      Maecenas ante lorem, aliquam a porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin in\n      rhoncus ligula.\n      Donec eget nunc magna. Maecenas nec ex dolor. Etiam sed molestie nulla. Pellentesque nec risus et ex dapibus\n      malesuada.\n      Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus egestas ex eu tellus euismod, a malesuada\n      elit\n      hendrerit. Nulla nec augue ut dolor aliquet placerat.\n\n      Vivamus nec auctor dui. Praesent euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl in dolor\n      hendrerit\n      sodales rutrum at nibh. Etiam eget sodales purus. Nunc imperdiet scelerisque libero, ac ultrices urna sagittis\n      ut.\n      Quisque vestibulum, lacus ac laoreet sagittis, sapien libero vestibulum mi, et efficitur elit tortor eu\n      libero. Cras\n      eleifend elit vitae erat tincidunt, eu posuere eros ultrices.\n\n      Integer non arcu eget felis efficitur ultrices. Pellentesque habitant morbi tristique senectus et netus et\n      malesuada\n      fames ac turpis egestas. Sed egestas leo ligula, eget placerat libero pretium quis. Nam quis euismod mi.\n      Aenean maximus\n      bibendum justo id facilisis. Cras nibh nunc, interdum vel velit nec, posuere pharetra dolor. Nam vestibulum eu\n      ante at\n      ornare.\n\n      Donec efficitur blandit nisi, eu ultrices ante euismod at. Pellentesque ornare sit amet ligula id sodales.\n      Vestibulum\n      suscipit diam sed lectus luctus molestie. Vivamus commodo est et congue fringilla. Cras eget lacus odio. Etiam\n      eget\n      egestas nulla. Integer a luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper orci fermentum\n      in. Mauris\n      ut placerat ligula, ac euismod erat. Donec lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue\n      ultricies\n      sem, et tristique odio imperdiet nec. Proin rutrum hendrerit nisl at consectetur.\n\n      Aliquam elit felis, posuere eu gravida nec, viverra a nisl. Pellentesque habitant morbi tristique senectus et\n      netus et\n      malesuada fames ac turpis egestas. Donec iaculis, orci sed iaculis commodo, augue ligula eleifend ante, in\n      pulvinar diam\n      arcu eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper est. Donec vehicula diam quis commodo\n      elementum.\n      Maecenas euismod ultrices mauris a consequat. Duis varius justo sit amet auctor luctus.\n\n    </p>\n  </div>\n</c3-dropdown>\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(51, 10);
    \u0275\u0275elementStart(52, "button", 11);
    \u0275\u0275text(53, " Dropdown trigger ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "c3-dropdown", null, 2)(56, "div", 12)(57, "h4");
    \u0275\u0275text(58, "Dropdown template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut pretium odio. Nullam laoreet imperdiet sagittis. Aliquam ac sodales augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus vehicula id at mi. Nulla aliquam ante sit amet mauris semper posuere. Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros magna, auctor at purus eget, mattis pellentesque tellus. Cras nec mi justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla tortor velit, nec pharetra leo hendrerit vitae. Fusce at laoreet magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem. Praesent in sapien eu lectus pharetra hendrerit eu eget ligula. Fusce bibendum dui non risus aliquam, ac lacinia velit gravida. Proin semper tortor massa, eget lacinia turpis fermentum sed. Sed malesuada fermentum bibendum. Aenean non turpis a eros aliquam eleifend non in erat. Donec interdum porta quam et porttitor. Nam rutrum est sed bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer nulla purus, lacinia tempus porta ut, posuere eget augue. Vivamus molestie posuere urna sit amet tempor. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id eros purus. Integer vitae urna ut nibh pretium facilisis. Morbi at scelerisque arcu, eget efficitur ex. Fusce tempor libero vitae est pellentesque, eu ultrices nisl facilisis. Sed eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique sollicitudin eu, suscipit quis ipsum. Praesent sed est et libero gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet interdum ac a est. Donec eget vulputate nisi, in fermentum odio. Sed posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh ac quam pellentesque maximus quis id mauris. Donec nec turpis sed augue posuere accumsan in sed erat. Maecenas tempus, sem in posuere tempus, odio leo pellentesque lorem, et commodo risus risus vitae elit. Aliquam nisl enim, iaculis eget sapien semper, iaculis euismod massa. Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas ante dui, venenatis eu convallis nec, fermentum eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sem ligula, dictum non aliquet eget, vestibulum sit amet odio. In quam metus, malesuada et accumsan eget, lobortis sit amet diam. Phasellus dolor arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed risus mi. Quisque sagittis augue vitae justo cursus efficitur. Etiam sit amet neque sed lacus pretium feugiat eget eget lorem. Nunc laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id tincidunt neque mi ut eros. Curabitur tellus nibh, hendrerit id orci vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat, sed placerat nisi mattis. Pellentesque condimentum placerat turpis vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus lobortis feugiat. Maecenas pulvinar, mauris sit amet tempor interdum, neque lorem gravida tortor, eget vulputate leo diam in arcu. In vitae magna vel quam suscipit iaculis. Donec congue consectetur finibus. Etiam porta, arcu sed tincidunt dictum, risus neque sodales diam, id ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl imperdiet viverra sit amet vitae metus. Mauris gravida ante lacus, a auctor velit varius vitae. Suspendisse in mauris eu mauris fermentum sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis tellus sodales in. Nullam tempor sem vitae aliquam dapibus. Donec vel egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut mi. Etiam sed ipsum nisl. Sed sed nunc massa. Sed nec rhoncus magna, quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim. Fusce non justo libero. Nullam vitae purus efficitur, finibus tortor vitae, aliquet purus. Fusce pulvinar erat neque, sed ornare risus finibus a. Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu a felis sagittis imperdiet. Integer sem lorem, sagittis et velit vitae, bibendum egestas odio. Nam interdum felis elementum lectus congue luctus. Nunc id accumsan erat. Maecenas eu metus eu lectus feugiat semper vel sed diam. Sed rhoncus est neque. Sed non euismod augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non pretium at, elementum quis orci. Nam tempor maximus massa eu dictum. Quisque sed turpis tristique, condimentum est quis, lacinia lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non erat ultrices, facilisis lacus id, varius velit. Aliquam felis metus, blandit eget lobortis eu, congue quis mauris. Quisque varius nibh a condimentum consectetur. Suspendisse potenti. Phasellus condimentum quam ac diam vulputate rutrum a rutrum odio. Sed in elit bibendum, aliquam leo fermentum, vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in blandit ipsum. Nulla viverra gravida venenatis. Aliquam blandit, felis efficitur tempus tristique, diam tellus eleifend lacus, sed commodo erat arcu ut neque. Duis laoreet urna sodales dictum dapibus. Nam diam est, dignissim a odio eu, mattis pellentesque turpis. Curabitur convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut viverra, elit quis euismod consequat, orci velit ultricies massa, sed vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec sodales. Aenean mollis nisl ut orci iaculis dictum. Suspendisse eget orci nec libero convallis semper et a lectus. Curabitur ac ante quam. Sed sodales velit non odio vestibulum, sed vestibulum leo suscipit. Ut ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, tellus a vulputate tempus, neque orci porta enim, at semper dolor velit et libero. Nulla id laoreet dui. Pellentesque eros velit, congue et nulla sit amet, elementum aliquam sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet arcu sit amet condimentum. Pellentesque gravida, libero nec fermentum feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet nunc. Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a laoreet nunc, lacinia fermentum arcu. Donec ex metus, rhoncus sit amet velit vitae, scelerisque tempor dolor. In volutpat ullamcorper fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas dapibus sapien a sollicitudin molestie. Nulla non iaculis neque. Cras malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium nulla sapien vel felis. Ut porta condimentum magna sed interdum. Cras eu felis risus. Proin vel dui quis nibh vulputate pulvinar. Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis purus id, sodales purus. Donec egestas diam quis quam eleifend ullamcorper. Aliquam scelerisque commodo eleifend. Vestibulum bibendum bibendum lectus a dictum. Maecenas pulvinar id eros interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec erat lorem. In mollis tempus massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam. Suspendisse rhoncus felis non tellus pellentesque elementum. Phasellus in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent vel auctor risus, hendrerit ornare magna. Duis sit amet justo nec nisl consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a tellus. Vivamus nulla diam, vulputate eu velit ultricies, ultrices imperdiet odio. Duis et rutrum elit. Duis dictum finibus nisi ac malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere. Maecenas vehicula dictum blandit. Donec auctor metus a interdum congue. Nullam ipsum erat, pulvinar id nisl sit amet, feugiat efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut pulvinar. Phasellus quis massa ut lacus imperdiet imperdiet. Proin iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent auctor mollis congue. Curabitur pharetra, sapien in accumsan porta, risus neque feugiat elit, non sollicitudin sapien diam facilisis ligula. Morbi tincidunt efficitur fringilla. Aenean vitae semper urna, nec aliquet diam. Mauris vel turpis vitae orci tincidunt aliquam et ac turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis urna. Etiam nec purus ut augue rhoncus tempor. Fusce efficitur eleifend imperdiet. Pellentesque vel mi sed leo elementum sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus convallis venenatis. Ut rutrum ipsum malesuada turpis ultrices sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien, venenatis non orci vel, convallis lobortis lorem. Quisque id scelerisque dolor, sit amet venenatis nunc. Nam lobortis dapibus velit, ac porta diam sollicitudin sit amet. Maecenas condimentum nibh quis purus dapibus fringilla. Curabitur a consequat urna. Nunc in massa elementum, malesuada purus et, placerat nisl. Curabitur sollicitudin purus odio, in bibendum purus lobortis non. Morbi sed dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec suscipit sit amet enim quis posuere. Ut convallis libero vel arcu malesuada vehicula. Proin scelerisque imperdiet eros. Duis et quam nunc. Donec pretium, enim quis commodo placerat, turpis dolor condimentum sapien, at porttitor eros urna sit amet eros. Nulla facilisis eleifend placerat. Cras nec est nisi. Mauris vitae purus eu tortor rhoncus tincidunt. Etiam vitae libero vitae sapien sodales scelerisque. Mauris nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet venenatis. Etiam interdum sodales efficitur. Mauris ullamcorper risus nec accumsan pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus a eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a finibus tempus, tortor mi pulvinar augue, eget finibus leo sem ac turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lobortis ante eu magna gravida, non gravida libero tempus. Nam pellentesque varius velit, a efficitur nisi egestas sit amet. Sed volutpat mauris vel faucibus bibendum. Aenean viverra porttitor lacus. Donec mi nunc, eleifend blandit dictum eget, maximus quis felis. Proin gravida, quam in dignissim iaculis, quam odio auctor risus, in mattis lorem orci vel ante. In erat ligula, ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non maximus fermentum. Curabitur consectetur nisl at est ornare, viverra viverra purus laoreet. Proin nunc mauris, interdum eget erat eget, interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas dignissim turpis id leo mattis tristique. Vestibulum pulvinar tempus ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac habitasse platea dictumst. Fusce ac efficitur arcu. Fusce id orci at ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum nisl, quis porta diam tincidunt sed. Duis condimentum dui dui, quis tristique tellus accumsan sit amet. Nunc semper ex feugiat lacinia aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis velit. Nulla ut ligula et quam hendrerit feugiat. Aenean ultricies maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin mattis, tellus dapibus dapibus lacinia, dolor dolor rhoncus magna, nec semper eros nibh sit amet justo. Nullam vulputate tortor dui, id luctus tellus aliquam sit amet. Vestibulum cursus massa luctus velit hendrerit hendrerit. Curabitur at faucibus sapien, at bibendum erat. Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros quam, elementum sit amet erat a, placerat ornare libero. Phasellus auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra vestibulum tortor, non congue nulla mollis in. Fusce at metus tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac ipsum fermentum tempus. Fusce velit felis, dictum vitae interdum vitae, mattis in augue. Vestibulum enim dolor, elementum non tincidunt ac, ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit laoreet. Phasellus ornare, nisl sed lobortis condimentum, ante dui viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus leo. Aliquam porta mi eget ante egestas volutpat. Sed diam quam, lacinia sed scelerisque eu, ultricies in sem. Aliquam in porta magna, nec euismod ante. Nullam justo dolor, facilisis at vehicula vel, lacinia vitae mi. Nullam congue imperdiet nibh ac porta. Quisque vitae libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor tempor, iaculis mauris a, tincidunt ante. Nunc vestibulum dolor diam, a ultrices dui sollicitudin ut. Praesent porttitor quam turpis, vitae venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla augue, venenatis vitae neque ac, ultricies pulvinar mi. Nullam neque arcu, ullamcorper vel justo ac, porttitor consequat leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut imperdiet aliquet dui eget convallis. Nunc lobortis eget diam commodo ultrices. Aenean aliquet bibendum nisl sit amet pellentesque. Nam nibh elit, porta id enim sit amet, porta tempor felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien, ac finibus nisl. Mauris eu pulvinar est. Pellentesque iaculis massa velit, vitae venenatis lacus ullamcorper id. In finibus elit quis ex consequat, scelerisque finibus ante blandit. Quisque et dolor turpis. Integer ipsum turpis, varius quis ante sit amet, viverra viverra mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi vel convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus in lorem non tempus. Nam auctor accumsan varius. Aenean in magna viverra, tempor felis quis, fringilla arcu. Etiam vel neque ipsum. In congue gravida est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est interdum viverra ac et nisi. Morbi egestas porttitor nulla in rutrum. Nam enim enim, fringilla nec magna a, rutrum dapibus urna. Donec dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in sollicitudin accumsan, odio massa ultrices mi, nec suscipit erat lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at diam consectetur, id tincidunt nunc congue. Mauris ullamcorper consectetur convallis. In vitae enim dapibus, egestas tortor sed, malesuada sem. Aliquam vel metus at libero varius bibendum sagittis blandit lectus. Nullam luctus dui non lacus scelerisque, quis tincidunt nisi egestas. Fusce tempus fringilla velit quis placerat. Sed et vulputate erat. In commodo ante efficitur, porta ante eu, egestas velit. Nullam quam neque, dapibus eu interdum egestas, mollis sit amet orci. Suspendisse scelerisque diam vehicula ligula convallis, sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla diam. Fusce ac lacus sit amet quam tincidunt suscipit a ultricies nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis. Aenean efficitur arcu in ex faucibus convallis. Phasellus lorem nisi, ullamcorper ut mattis vitae, volutpat et erat. Quisque posuere elit arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex mauris, volutpat ut tempus eget, accumsan eu lectus. Vivamus faucibus blandit nunc tempor faucibus. Etiam at sem ut nisl blandit venenatis. Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc, ornare bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed blandit velit, sit amet posuere augue. Nam laoreet tempus nunc at aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci eget posuere. Nulla quis mattis sem, eget maximus est. Quisque mattis, mi ac accumsan convallis, ante risus posuere neque, nec ornare risus purus quis nulla. Sed id sem id tellus pretium gravida sit amet eget eros. Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin rhoncus. Proin egestas libero ut felis semper malesuada. Curabitur pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus maximus ut et lectus. Praesent iaculis justo nec arcu convallis fringilla et sed massa. Aliquam id dictum odio. Donec purus velit, imperdiet vel consequat quis, viverra sit amet leo. Ut malesuada ex ut arcu posuere, et ullamcorper mi tempus. Integer ut lorem id ipsum vulputate viverra et non urna. Nullam commodo aliquam mi in condimentum. Nullam suscipit in neque a faucibus. Cras vitae eros nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus ac aliquet ligula. In ultrices velit vel consectetur blandit. Sed lorem dui, pretium sit amet laoreet sed, blandit at lectus. Sed congue, justo in ultrices vehicula, quam risus consequat eros, nec fringilla orci mi ac elit. Aliquam feugiat, lorem vitae feugiat iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio quis libero. Curabitur in eleifend est, nec ornare nibh. In vehicula molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit amet ipsum consectetur, quis imperdiet dolor pharetra. Quisque non dolor sit amet sapien mattis eleifend sit amet vel massa. Fusce ante ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc. Nulla et eleifend libero, sit amet consectetur nisi. Duis congue vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus at, commodo augue. Donec ut neque mattis, sagittis ligula quis, ultricies magna. In hac habitasse platea dictumst. Phasellus dignissim arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis volutpat. Curabitur magna urna, euismod vel nibh non, interdum congue tortor. Suspendisse vel aliquam elit, interdum tristique lectus. Maecenas porta quam vel odio elementum, vel iaculis turpis faucibus. Quisque in lectus pellentesque, pretium nisl et, tincidunt enim. Nullam maximus ligula placerat eros dignissim maximus. Maecenas malesuada est nec ultrices ultrices. Quisque ut elit vel ante pellentesque consequat. Morbi laoreet felis mi. Integer ex libero, sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit eleifend nisi vel consectetur. Sed et convallis nisl, quis hendrerit purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida lacinia est, non tempus turpis mattis quis. Curabitur ultrices arcu nec finibus sagittis. Donec fringilla tincidunt lacus ac pulvinar. Nunc ultricies nunc at ex lobortis ornare. Fusce placerat dictum lacus non luctus. Proin placerat maximus feugiat. Pellentesque posuere commodo dui eget rutrum. Pellentesque sed nisi sapien. Sed sem magna, dictum et augue non, dignissim porttitor mi. Etiam ornare nisl odio, a efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum aliquam. Vestibulum vulputate elit nisl, eget posuere augue dictum eu. Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque. Etiam a consequat quam. Duis non rutrum lacus, non hendrerit sapien. Aliquam leo urna, placerat quis pellentesque eget, semper malesuada quam. Curabitur quis arcu sodales, tempor dolor at, faucibus enim. Fusce nec mollis quam. Morbi sit amet nibh interdum, dapibus nisl at, venenatis tellus. Maecenas finibus tellus et risus scelerisque venenatis. Integer malesuada justo id quam pharetra, at feugiat dui ultricies. Nunc interdum erat orci, ut imperdiet ligula dictum vitae. Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula sed nisi sed venenatis. Donec lacinia sit amet enim nec porttitor. Cras mollis dictum condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ipsum erat, bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales commodo eleifend. Sed auctor, dolor quis aliquet convallis, nisl magna interdum massa, non malesuada ex leo nec augue. Curabitur efficitur turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat pellentesque. Nulla at feugiat risus. Integer rhoncus nisl id dolor iaculis, id mollis leo pharetra. Etiam convallis semper libero nec pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a. Aliquam mauris nisl, convallis at pellentesque eu, tempus nec nulla. Praesent sodales cursus erat, ac dignissim leo convallis scelerisque. Mauris semper mi non neque vehicula convallis. Suspendisse dictum justo eget tortor placerat malesuada. Duis a gravida orci, nec maximus neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id. Sed ac mauris metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio pellentesque consequat nec sed libero. Ut dignissim libero quis lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur ullamcorper turpis. Donec viverra purus et purus vehicula rutrum. Nam iaculis non nulla eu egestas. Donec ac quam purus. Aliquam quis erat eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla id, venenatis nisi. Suspendisse vehicula placerat augue in vestibulum. Nulla elit neque, facilisis quis urna et, auctor tincidunt erat. Suspendisse ut aliquet lectus. Cras in rhoncus lacus. Fusce nisi neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis nisl, eget gravida magna. Vivamus tempus pharetra elit sed accumsan. Cras sed gravida mi. Fusce rhoncus ac erat a placerat. Nam congue, leo vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus lorem nunc at dolor. Duis cursus lacinia ex, at finibus diam ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut libero. Morbi venenatis at ipsum ut dignissim. In in lacus eget tortor porttitor auctor eu sit amet lectus. Phasellus pharetra posuere risus, id tincidunt libero scelerisque ac. Praesent eleifend ante nec augue eleifend iaculis a nec urna. Proin tincidunt scelerisque nulla, pharetra dictum eros tempor non. Duis eros tellus, condimentum at sapien ac, aliquet ullamcorper est. Fusce nec risus consectetur nisi pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus. Morbi porta ligula id risus scelerisque sagittis. Cras quis arcu porta, ullamcorper dolor vel, tincidunt metus. Ut finibus sem in nibh dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae turpis nec, consectetur varius nisl. Quisque ut risus varius, fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor commodo pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi blandit dui non libero volutpat, id lacinia est tincidunt. Aliquam erat volutpat. Ut ante magna, pellentesque in orci sollicitudin, vestibulum tristique leo. Quisque sed tincidunt est. Nam in ornare ex. Donec faucibus, lorem at facilisis finibus, purus felis commodo sapien, et commodo risus magna a sem. Cras ornare sapien vulputate consequat condimentum. Proin ultricies et urna non congue. Fusce sed feugiat sem. Nunc ut purus ac nulla tincidunt eleifend porttitor eu eros. Mauris imperdiet eu augue vel malesuada. Cras blandit, augue ut pretium facilisis, nulla mauris semper risus, quis mollis felis est at arcu. Nullam hendrerit feugiat tellus, at luctus odio porta vel. Nam bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus euismod nulla metus ut nibh. Mauris eleifend, elit ut vulputate semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam elementum tortor sed sodales sodales. Mauris posuere metus quis mi sagittis, ut varius metus euismod. Integer feugiat, orci vitae volutpat blandit, libero augue semper lacus, sit amet tristique lacus dolor ac purus. Vestibulum tincidunt eros et cursus pellentesque. Donec convallis placerat dapibus. Nullam tortor diam, cursus vitae est quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas egestas. Mauris euismod lorem non risus ornare, vel consectetur felis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis lectus at, condimentum egestas ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis urna sed, imperdiet lorem. Vivamus cursus nulla consequat mi consequat pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna elementum, laoreet pellentesque ex. Fusce ac nisl id justo vehicula elementum rutrum at est. Aenean scelerisque dignissim lacus ac euismod. Etiam eget est convallis, elementum nibh a, rutrum est. Suspendisse potenti. Suspendisse potenti. Quisque porttitor tincidunt libero. Sed vulputate nunc sed tortor fringilla maximus. Duis venenatis diam in nunc posuere, eget dictum quam lacinia. Cras ipsum dolor, mattis nec massa ac, aliquet fermentum elit. Integer a convallis arcu. Sed placerat euismod arcu, quis hendrerit diam ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula. Aliquam erat volutpat. Nam semper pellentesque magna, non ornare ante sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia lacus. Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem a elit vestibulum, et sagittis nibh sollicitudin. Quisque vulputate dignissim tellus. Aliquam eu tortor quis felis suscipit luctus. Quisque eu mattis elit, venenatis sollicitudin massa. Fusce convallis, mauris eu tristique consectetur, lacus risus congue urna, eu dignissim est sapien sed lectus. Phasellus dui magna, maximus eget augue in, ornare scelerisque sem. Curabitur porttitor tortor id felis vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam egestas nibh diam, vitae sollicitudin leo tempor vitae. Suspendisse interdum tristique bibendum. Mauris pellentesque eros sit amet hendrerit dignissim. Sed auctor urna vel sapien accumsan pulvinar. Aliquam a dui et metus laoreet egestas. In hac habitasse platea dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod tellus. Phasellus fringilla quam vitae felis ultrices, vulputate pellentesque massa commodo. Etiam rutrum non lorem at vehicula. Pellentesque non pretium massa, id rutrum nunc. Aliquam nisi lectus, mollis sed rhoncus et, mollis quis sapien. Integer sit amet dolor in sapien consequat vehicula at id dolor. Nulla sodales eget enim eu lacinia. Maecenas accumsan libero nisl, vel egestas ante gravida at. Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam sagittis non justo eu sollicitudin. Cras libero justo, molestie id maximus in, accumsan et augue. Quisque rhoncus tortor at dolor ullamcorper laoreet. Mauris sed pharetra felis, a varius lorem. Sed dictum ultricies magna non condimentum. Etiam blandit iaculis libero. Quisque et ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam neque sem, convallis id porta eu, congue quis ipsum. Etiam ut massa ac libero pretium consequat. Maecenas euismod consequat imperdiet. Praesent a diam purus. Integer sit amet placerat tellus. Mauris nec ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula, sapien semper maximus ultricies, nibh ligula varius nisl, at laoreet lectus eros venenatis ligula. Cras tempor convallis nisl porta fringilla. Morbi eget elementum dolor. Curabitur nulla quam, sodales id commodo nec, pulvinar sed justo. Quisque aliquam ante quis finibus pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum vitae. Quisque nec viverra velit, sit amet consequat ligula. Etiam in bibendum massa. Fusce ornare tristique nisl, a venenatis felis facilisis in. In eget leo ac neque suscipit aliquam. Quisque enim orci, interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi justo, tristique ac nisl id, pretium porta libero. Pellentesque ultrices, nulla a aliquet elementum, magna risus molestie ex, eu fringilla libero velit vitae diam. Maecenas ante lorem, aliquam a porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin in rhoncus ligula. Donec eget nunc magna. Maecenas nec ex dolor. Etiam sed molestie nulla. Pellentesque nec risus et ex dapibus malesuada. Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus egestas ex eu tellus euismod, a malesuada elit hendrerit. Nulla nec augue ut dolor aliquet placerat. Vivamus nec auctor dui. Praesent euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl in dolor hendrerit sodales rutrum at nibh. Etiam eget sodales purus. Nunc imperdiet scelerisque libero, ac ultrices urna sagittis ut. Quisque vestibulum, lacus ac laoreet sagittis, sapien libero vestibulum mi, et efficitur elit tortor eu libero. Cras eleifend elit vitae erat tincidunt, eu posuere eros ultrices. Integer non arcu eget felis efficitur ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed egestas leo ligula, eget placerat libero pretium quis. Nam quis euismod mi. Aenean maximus bibendum justo id facilisis. Cras nibh nunc, interdum vel velit nec, posuere pharetra dolor. Nam vestibulum eu ante at ornare. Donec efficitur blandit nisi, eu ultrices ante euismod at. Pellentesque ornare sit amet ligula id sodales. Vestibulum suscipit diam sed lectus luctus molestie. Vivamus commodo est et congue fringilla. Cras eget lacus odio. Etiam eget egestas nulla. Integer a luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper orci fermentum in. Mauris ut placerat ligula, ac euismod erat. Donec lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue ultricies sem, et tristique odio imperdiet nec. Proin rutrum hendrerit nisl at consectetur. Aliquam elit felis, posuere eu gravida nec, viverra a nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis, orci sed iaculis commodo, augue ligula eleifend ante, in pulvinar diam arcu eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper est. Donec vehicula diam quis commodo elementum. Maecenas euismod ultrices mauris a consequat. Duis varius justo sit amet auctor luctus. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dropdown_r1 = \u0275\u0275reference(17);
    const dropdownTemplate_r2 = \u0275\u0275reference(34);
    const dropdownVeryLongTemplate_r3 = \u0275\u0275reference(55);
    \u0275\u0275advance(7);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(9, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(10, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275property("c3DropdownTrigger", dropdown_r1);
    \u0275\u0275advance(10);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(11, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(12, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275property("c3DropdownTrigger", dropdownTemplate_r2);
    \u0275\u0275advance(14);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(13, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(14, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275property("c3DropdownTrigger", dropdownVeryLongTemplate_r3);
  }
}, dependencies: [
  C3DropdownModule,
  C3DropdownComponent,
  C3DropdownTrigger,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  MatButtonModule,
  MatButton,
  HighlightJsDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [
      C3DropdownModule,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      MatButtonModule,
      HighlightJsDirective
    ], template: `<p class="my-4">This is just a simple dropdown component with a template</p>

<example-viewer class="mb-2 px-4 pb-2">
  <h4 title>Basic dropdown</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<button mat-raised-button [c3DropdownTrigger]="dropdown">Dropdown trigger</button>

<c3-dropdown #dropdown>
  Dropdown content
</c3-dropdown>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <button mat-raised-button [c3DropdownTrigger]="dropdown">Dropdown trigger</button>

    <c3-dropdown #dropdown> Dropdown content </c3-dropdown>
  </ng-container>
</example-viewer>

<example-viewer class="mb-2 px-4 pb-2">
  <h4 title>Dropdown with template</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
</textarea
      >
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<button mat-raised-button [c3DropdownTrigger]="dropdownTemplate">Dropdown trigger</button>

<c3-dropdown #dropdownTemplate>
  <div class="pa-1">
    <h4>Dropdown template</h4>
    <p>
      This is a dropdown template
    </p>
  </div>
</c3-dropdown>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <button mat-raised-button [c3DropdownTrigger]="dropdownTemplate">
      Dropdown trigger
    </button>

    <c3-dropdown #dropdownTemplate>
      <div class="pa-1">
        <h4>Dropdown template</h4>
        <p>This is a dropdown template</p>
      </div>
    </c3-dropdown>
  </ng-container>
</example-viewer>

<example-viewer class="mb-2 px-4 pb-2">
  <h4 title>Dropdown with dropdownVeryLongTemplate</h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<button mat-raised-button [c3Dropdown]="dropdownVeryLongTemplate">Dropdown trigger</button>

<c3-dropdown #dropdownVeryLongTemplate>
  <div class="pa-1">
    <h4>Dropdown template</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut pretium odio. Nullam laoreet imperdiet
      sagittis.
      Aliquam ac sodales augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus vehicula id at mi. Nulla
      aliquam
      ante sit amet mauris semper posuere. Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros
      magna,
      auctor at purus eget, mattis pellentesque tellus.

      Cras nec mi justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla tortor velit, nec pharetra
      leo
      hendrerit vitae. Fusce at laoreet magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem. Praesent
      in sapien
      eu lectus pharetra hendrerit eu eget ligula. Fusce bibendum dui non risus aliquam, ac lacinia velit gravida.
      Proin
      semper tortor massa, eget lacinia turpis fermentum sed. Sed malesuada fermentum bibendum. Aenean non turpis a
      eros
      aliquam eleifend non in erat. Donec interdum porta quam et porttitor.

      Nam rutrum est sed bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer nulla purus, lacinia
      tempus
      porta ut, posuere eget augue. Vivamus molestie posuere urna sit amet tempor. Suspendisse potenti. Class aptent
      taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id eros purus. Integer vitae
      urna ut
      nibh pretium facilisis.

      Morbi at scelerisque arcu, eget efficitur ex. Fusce tempor libero vitae est pellentesque, eu ultrices nisl
      facilisis.
      Sed eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique sollicitudin eu, suscipit quis
      ipsum.
      Praesent sed est et libero gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet interdum ac a
      est. Donec
      eget vulputate nisi, in fermentum odio. Sed posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh
      ac quam
      pellentesque maximus quis id mauris. Donec nec turpis sed augue posuere accumsan in sed erat. Maecenas tempus,
      sem in
      posuere tempus, odio leo pellentesque lorem, et commodo risus risus vitae elit. Aliquam nisl enim, iaculis
      eget sapien
      semper, iaculis euismod massa. Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas ante dui,
      venenatis eu
      convallis nec, fermentum eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.

      Nullam sem ligula, dictum non aliquet eget, vestibulum sit amet odio. In quam metus, malesuada et accumsan
      eget,
      lobortis sit amet diam. Phasellus dolor arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed
      risus mi.
      Quisque sagittis augue vitae justo cursus efficitur. Etiam sit amet neque sed lacus pretium feugiat eget eget
      lorem.
      Nunc laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id tincidunt neque mi ut eros. Curabitur
      tellus
      nibh, hendrerit id orci vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat, sed placerat
      nisi mattis.
      Pellentesque condimentum placerat turpis vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus
      lobortis
      feugiat. Maecenas pulvinar, mauris sit amet tempor interdum, neque lorem gravida tortor, eget vulputate leo
      diam in
      arcu.

      In vitae magna vel quam suscipit iaculis. Donec congue consectetur finibus. Etiam porta, arcu sed tincidunt
      dictum,
      risus neque sodales diam, id ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl imperdiet
      viverra sit
      amet vitae metus. Mauris gravida ante lacus, a auctor velit varius vitae. Suspendisse in mauris eu mauris
      fermentum
      sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis tellus sodales in. Nullam tempor sem vitae
      aliquam
      dapibus. Donec vel egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut mi. Etiam sed ipsum
      nisl.

      Sed sed nunc massa. Sed nec rhoncus magna, quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim.
      Fusce non
      justo libero. Nullam vitae purus efficitur, finibus tortor vitae, aliquet purus. Fusce pulvinar erat neque,
      sed ornare
      risus finibus a. Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu a felis sagittis
      imperdiet.
      Integer sem lorem, sagittis et velit vitae, bibendum egestas odio. Nam interdum felis elementum lectus congue
      luctus.
      Nunc id accumsan erat. Maecenas eu metus eu lectus feugiat semper vel sed diam.

      Sed rhoncus est neque. Sed non euismod augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non
      pretium at,
      elementum quis orci. Nam tempor maximus massa eu dictum. Quisque sed turpis tristique, condimentum est quis,
      lacinia
      lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non erat
      ultrices,
      facilisis lacus id, varius velit.

      Aliquam felis metus, blandit eget lobortis eu, congue quis mauris. Quisque varius nibh a condimentum
      consectetur.
      Suspendisse potenti. Phasellus condimentum quam ac diam vulputate rutrum a rutrum odio. Sed in elit bibendum,
      aliquam
      leo fermentum, vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in blandit ipsum. Nulla
      viverra gravida
      venenatis. Aliquam blandit, felis efficitur tempus tristique, diam tellus eleifend lacus, sed commodo erat
      arcu ut
      neque. Duis laoreet urna sodales dictum dapibus. Nam diam est, dignissim a odio eu, mattis pellentesque
      turpis.
      Curabitur convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut viverra, elit quis euismod
      consequat, orci
      velit ultricies massa, sed vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec sodales.
      Aenean mollis
      nisl ut orci iaculis dictum.

      Suspendisse eget orci nec libero convallis semper et a lectus. Curabitur ac ante quam. Sed sodales velit non
      odio
      vestibulum, sed vestibulum leo suscipit. Ut ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi
      tristique
      senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, tellus a vulputate tempus,
      neque orci
      porta enim, at semper dolor velit et libero. Nulla id laoreet dui. Pellentesque eros velit, congue et nulla
      sit amet,
      elementum aliquam sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet arcu sit amet
      condimentum.
      Pellentesque gravida, libero nec fermentum feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet
      nunc.
      Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a laoreet nunc, lacinia fermentum arcu. Donec ex
      metus,
      rhoncus sit amet velit vitae, scelerisque tempor dolor.

      In volutpat ullamcorper fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas dapibus sapien a
      sollicitudin
      molestie. Nulla non iaculis neque. Cras malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium
      nulla sapien
      vel felis. Ut porta condimentum magna sed interdum. Cras eu felis risus. Proin vel dui quis nibh vulputate
      pulvinar.
      Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis purus id, sodales purus. Donec egestas diam
      quis quam
      eleifend ullamcorper.

      Aliquam scelerisque commodo eleifend. Vestibulum bibendum bibendum lectus a dictum. Maecenas pulvinar id eros
      interdum
      eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Curabitur nec
      erat lorem. In mollis tempus massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam. Suspendisse rhoncus
      felis non
      tellus pellentesque elementum.

      Phasellus in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent vel auctor risus, hendrerit
      ornare
      magna. Duis sit amet justo nec nisl consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a
      tellus.
      Vivamus nulla diam, vulputate eu velit ultricies, ultrices imperdiet odio. Duis et rutrum elit. Duis dictum
      finibus nisi
      ac malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere.

      Maecenas vehicula dictum blandit. Donec auctor metus a interdum congue. Nullam ipsum erat, pulvinar id nisl
      sit amet,
      feugiat efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut pulvinar. Phasellus quis massa
      ut lacus
      imperdiet imperdiet. Proin iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent auctor mollis
      congue.
      Curabitur pharetra, sapien in accumsan porta, risus neque feugiat elit, non sollicitudin sapien diam facilisis
      ligula.
      Morbi tincidunt efficitur fringilla. Aenean vitae semper urna, nec aliquet diam. Mauris vel turpis vitae orci
      tincidunt
      aliquam et ac turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis urna.

      Etiam nec purus ut augue rhoncus tempor. Fusce efficitur eleifend imperdiet. Pellentesque vel mi sed leo
      elementum
      sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus convallis venenatis. Ut
      rutrum
      ipsum malesuada turpis ultrices sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien,
      venenatis non
      orci vel, convallis lobortis lorem. Quisque id scelerisque dolor, sit amet venenatis nunc. Nam lobortis
      dapibus velit,
      ac porta diam sollicitudin sit amet. Maecenas condimentum nibh quis purus dapibus fringilla. Curabitur a
      consequat urna.

      Nunc in massa elementum, malesuada purus et, placerat nisl. Curabitur sollicitudin purus odio, in bibendum
      purus
      lobortis non. Morbi sed dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum et malesuada
      fames ac ante
      ipsum primis in faucibus. Donec suscipit sit amet enim quis posuere. Ut convallis libero vel arcu malesuada
      vehicula.
      Proin scelerisque imperdiet eros. Duis et quam nunc. Donec pretium, enim quis commodo placerat, turpis dolor
      condimentum
      sapien, at porttitor eros urna sit amet eros. Nulla facilisis eleifend placerat.

      Cras nec est nisi. Mauris vitae purus eu tortor rhoncus tincidunt. Etiam vitae libero vitae sapien sodales
      scelerisque.
      Mauris nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet venenatis. Etiam interdum sodales
      efficitur.
      Mauris ullamcorper risus nec accumsan pellentesque. Pellentesque habitant morbi tristique senectus et netus et
      malesuada
      fames ac turpis egestas. Phasellus a eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a
      finibus
      tempus, tortor mi pulvinar augue, eget finibus leo sem ac turpis. Pellentesque habitant morbi tristique
      senectus et
      netus et malesuada fames ac turpis egestas.

      Sed lobortis ante eu magna gravida, non gravida libero tempus. Nam pellentesque varius velit, a efficitur nisi
      egestas
      sit amet. Sed volutpat mauris vel faucibus bibendum. Aenean viverra porttitor lacus. Donec mi nunc, eleifend
      blandit
      dictum eget, maximus quis felis. Proin gravida, quam in dignissim iaculis, quam odio auctor risus, in mattis
      lorem orci
      vel ante. In erat ligula, ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non maximus
      fermentum.
      Curabitur consectetur nisl at est ornare, viverra viverra purus laoreet. Proin nunc mauris, interdum eget erat
      eget,
      interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas dignissim turpis id leo mattis
      tristique.
      Vestibulum pulvinar tempus ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac habitasse
      platea
      dictumst.

      Fusce ac efficitur arcu. Fusce id orci at ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum
      nisl, quis
      porta diam tincidunt sed. Duis condimentum dui dui, quis tristique tellus accumsan sit amet. Nunc semper ex
      feugiat
      lacinia aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis velit. Nulla ut ligula et quam
      hendrerit
      feugiat. Aenean ultricies maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin mattis, tellus
      dapibus
      dapibus lacinia, dolor dolor rhoncus magna, nec semper eros nibh sit amet justo. Nullam vulputate tortor dui,
      id luctus
      tellus aliquam sit amet. Vestibulum cursus massa luctus velit hendrerit hendrerit. Curabitur at faucibus
      sapien, at
      bibendum erat.

      Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros quam, elementum sit amet erat a, placerat
      ornare
      libero. Phasellus auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra vestibulum tortor, non
      congue nulla
      mollis in. Fusce at metus tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac ipsum fermentum
      tempus.
      Fusce velit felis, dictum vitae interdum vitae, mattis in augue. Vestibulum enim dolor, elementum non
      tincidunt ac,
      ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit laoreet. Phasellus ornare, nisl sed lobortis
      condimentum, ante dui viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus leo.

      Aliquam porta mi eget ante egestas volutpat. Sed diam quam, lacinia sed scelerisque eu, ultricies in sem.
      Aliquam in
      porta magna, nec euismod ante. Nullam justo dolor, facilisis at vehicula vel, lacinia vitae mi. Nullam congue
      imperdiet
      nibh ac porta. Quisque vitae libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor tempor,
      iaculis
      mauris a, tincidunt ante. Nunc vestibulum dolor diam, a ultrices dui sollicitudin ut.

      Praesent porttitor quam turpis, vitae venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla augue,
      venenatis
      vitae neque ac, ultricies pulvinar mi. Nullam neque arcu, ullamcorper vel justo ac, porttitor consequat leo.
      Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut imperdiet aliquet dui eget
      convallis.
      Nunc lobortis eget diam commodo ultrices. Aenean aliquet bibendum nisl sit amet pellentesque. Nam nibh elit,
      porta id
      enim sit amet, porta tempor felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien, ac finibus
      nisl.

      Mauris eu pulvinar est. Pellentesque iaculis massa velit, vitae venenatis lacus ullamcorper id. In finibus
      elit quis ex
      consequat, scelerisque finibus ante blandit. Quisque et dolor turpis. Integer ipsum turpis, varius quis ante
      sit amet,
      viverra viverra mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi vel convallis.
      Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus in lorem non
      tempus. Nam
      auctor accumsan varius. Aenean in magna viverra, tempor felis quis, fringilla arcu.

      Etiam vel neque ipsum. In congue gravida est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est
      interdum
      viverra ac et nisi. Morbi egestas porttitor nulla in rutrum. Nam enim enim, fringilla nec magna a, rutrum
      dapibus urna.
      Donec dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in sollicitudin accumsan, odio massa
      ultrices mi,
      nec suscipit erat lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at diam consectetur, id
      tincidunt
      nunc congue. Mauris ullamcorper consectetur convallis. In vitae enim dapibus, egestas tortor sed, malesuada
      sem. Aliquam
      vel metus at libero varius bibendum sagittis blandit lectus. Nullam luctus dui non lacus scelerisque, quis
      tincidunt
      nisi egestas.

      Fusce tempus fringilla velit quis placerat. Sed et vulputate erat. In commodo ante efficitur, porta ante eu,
      egestas
      velit. Nullam quam neque, dapibus eu interdum egestas, mollis sit amet orci. Suspendisse scelerisque diam
      vehicula
      ligula convallis, sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla diam. Fusce ac lacus
      sit amet
      quam tincidunt suscipit a ultricies nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis.
      Aenean
      efficitur arcu in ex faucibus convallis. Phasellus lorem nisi, ullamcorper ut mattis vitae, volutpat et erat.
      Quisque
      posuere elit arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex mauris, volutpat ut tempus
      eget,
      accumsan eu lectus. Vivamus faucibus blandit nunc tempor faucibus.

      Etiam at sem ut nisl blandit venenatis. Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc,
      ornare
      bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed blandit velit, sit amet posuere augue. Nam
      laoreet
      tempus nunc at aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci eget posuere. Nulla quis
      mattis sem,
      eget maximus est. Quisque mattis, mi ac accumsan convallis, ante risus posuere neque, nec ornare risus purus
      quis nulla.
      Sed id sem id tellus pretium gravida sit amet eget eros.

      Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin rhoncus. Proin egestas libero ut felis semper
      malesuada.
      Curabitur pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus maximus ut et lectus.
      Praesent iaculis
      justo nec arcu convallis fringilla et sed massa. Aliquam id dictum odio. Donec purus velit, imperdiet vel
      consequat
      quis, viverra sit amet leo. Ut malesuada ex ut arcu posuere, et ullamcorper mi tempus.

      Integer ut lorem id ipsum vulputate viverra et non urna. Nullam commodo aliquam mi in condimentum. Nullam
      suscipit in
      neque a faucibus. Cras vitae eros nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus ac
      aliquet
      ligula. In ultrices velit vel consectetur blandit. Sed lorem dui, pretium sit amet laoreet sed, blandit at
      lectus.

      Sed congue, justo in ultrices vehicula, quam risus consequat eros, nec fringilla orci mi ac elit. Aliquam
      feugiat, lorem
      vitae feugiat iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio quis libero. Curabitur in
      eleifend
      est, nec ornare nibh. In vehicula molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit amet
      ipsum
      consectetur, quis imperdiet dolor pharetra. Quisque non dolor sit amet sapien mattis eleifend sit amet vel
      massa. Fusce
      ante ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc. Nulla et eleifend libero, sit amet
      consectetur
      nisi. Duis congue vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus at, commodo augue.
      Donec ut neque
      mattis, sagittis ligula quis, ultricies magna. In hac habitasse platea dictumst.

      Phasellus dignissim arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis volutpat. Curabitur
      magna urna,
      euismod vel nibh non, interdum congue tortor. Suspendisse vel aliquam elit, interdum tristique lectus.
      Maecenas porta
      quam vel odio elementum, vel iaculis turpis faucibus. Quisque in lectus pellentesque, pretium nisl et,
      tincidunt enim.
      Nullam maximus ligula placerat eros dignissim maximus.

      Maecenas malesuada est nec ultrices ultrices. Quisque ut elit vel ante pellentesque consequat. Morbi laoreet
      felis mi.
      Integer ex libero, sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit eleifend nisi vel
      consectetur. Sed
      et convallis nisl, quis hendrerit purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida
      lacinia est,
      non tempus turpis mattis quis. Curabitur ultrices arcu nec finibus sagittis. Donec fringilla tincidunt lacus
      ac
      pulvinar. Nunc ultricies nunc at ex lobortis ornare.

      Fusce placerat dictum lacus non luctus. Proin placerat maximus feugiat. Pellentesque posuere commodo dui eget
      rutrum.
      Pellentesque sed nisi sapien. Sed sem magna, dictum et augue non, dignissim porttitor mi. Etiam ornare nisl
      odio, a
      efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum aliquam. Vestibulum vulputate elit nisl, eget
      posuere
      augue dictum eu. Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque. Etiam a consequat quam.
      Duis non
      rutrum lacus, non hendrerit sapien. Aliquam leo urna, placerat quis pellentesque eget, semper malesuada quam.
      Curabitur
      quis arcu sodales, tempor dolor at, faucibus enim. Fusce nec mollis quam.

      Morbi sit amet nibh interdum, dapibus nisl at, venenatis tellus. Maecenas finibus tellus et risus scelerisque
      venenatis.
      Integer malesuada justo id quam pharetra, at feugiat dui ultricies. Nunc interdum erat orci, ut imperdiet
      ligula dictum
      vitae. Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      vehicula sed
      nisi sed venenatis. Donec lacinia sit amet enim nec porttitor.

      Cras mollis dictum condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et malesuada fames ac ante
      ipsum primis
      in faucibus. Donec ipsum erat, bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales commodo
      eleifend. Sed
      auctor, dolor quis aliquet convallis, nisl magna interdum massa, non malesuada ex leo nec augue. Curabitur
      efficitur
      turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat pellentesque. Nulla at feugiat risus.
      Integer rhoncus
      nisl id dolor iaculis, id mollis leo pharetra.

      Etiam convallis semper libero nec pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a.
      Aliquam mauris
      nisl, convallis at pellentesque eu, tempus nec nulla. Praesent sodales cursus erat, ac dignissim leo convallis
      scelerisque. Mauris semper mi non neque vehicula convallis. Suspendisse dictum justo eget tortor placerat
      malesuada.
      Duis a gravida orci, nec maximus neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id. Sed ac
      mauris
      metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio pellentesque consequat nec sed libero.

      Ut dignissim libero quis lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur ullamcorper
      turpis.
      Donec viverra purus et purus vehicula rutrum. Nam iaculis non nulla eu egestas. Donec ac quam purus. Aliquam
      quis erat
      eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla id, venenatis nisi. Suspendisse vehicula
      placerat
      augue in vestibulum. Nulla elit neque, facilisis quis urna et, auctor tincidunt erat. Suspendisse ut aliquet
      lectus.
      Cras in rhoncus lacus. Fusce nisi neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis nisl,
      eget
      gravida magna. Vivamus tempus pharetra elit sed accumsan. Cras sed gravida mi. Fusce rhoncus ac erat a
      placerat.

      Nam congue, leo vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus lorem nunc at dolor. Duis
      cursus
      lacinia ex, at finibus diam ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut libero. Morbi
      venenatis at
      ipsum ut dignissim. In in lacus eget tortor porttitor auctor eu sit amet lectus. Phasellus pharetra posuere
      risus, id
      tincidunt libero scelerisque ac. Praesent eleifend ante nec augue eleifend iaculis a nec urna. Proin tincidunt
      scelerisque nulla, pharetra dictum eros tempor non. Duis eros tellus, condimentum at sapien ac, aliquet
      ullamcorper est.
      Fusce nec risus consectetur nisi pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus. Morbi
      porta
      ligula id risus scelerisque sagittis. Cras quis arcu porta, ullamcorper dolor vel, tincidunt metus.

      Ut finibus sem in nibh dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae turpis nec,
      consectetur
      varius nisl. Quisque ut risus varius, fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor
      commodo
      pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi blandit dui non libero volutpat, id lacinia est
      tincidunt.
      Aliquam erat volutpat. Ut ante magna, pellentesque in orci sollicitudin, vestibulum tristique leo. Quisque sed
      tincidunt
      est.

      Nam in ornare ex. Donec faucibus, lorem at facilisis finibus, purus felis commodo sapien, et commodo risus
      magna a sem.
      Cras ornare sapien vulputate consequat condimentum. Proin ultricies et urna non congue. Fusce sed feugiat sem.
      Nunc ut
      purus ac nulla tincidunt eleifend porttitor eu eros. Mauris imperdiet eu augue vel malesuada. Cras blandit,
      augue ut
      pretium facilisis, nulla mauris semper risus, quis mollis felis est at arcu. Nullam hendrerit feugiat tellus,
      at luctus
      odio porta vel. Nam bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus euismod nulla metus
      ut nibh.
      Mauris eleifend, elit ut vulputate semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam
      elementum
      tortor sed sodales sodales. Mauris posuere metus quis mi sagittis, ut varius metus euismod. Integer feugiat,
      orci vitae
      volutpat blandit, libero augue semper lacus, sit amet tristique lacus dolor ac purus. Vestibulum tincidunt
      eros et
      cursus pellentesque. Donec convallis placerat dapibus.

      Nullam tortor diam, cursus vitae est quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas
      egestas. Mauris
      euismod lorem non risus ornare, vel consectetur felis pretium. Pellentesque habitant morbi tristique senectus
      et netus
      et malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis lectus at, condimentum egestas
      ipsum. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis urna sed, imperdiet
      lorem.
      Vivamus cursus nulla consequat mi consequat pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna
      elementum,
      laoreet pellentesque ex. Fusce ac nisl id justo vehicula elementum rutrum at est. Aenean scelerisque dignissim
      lacus ac
      euismod.

      Etiam eget est convallis, elementum nibh a, rutrum est. Suspendisse potenti. Suspendisse potenti. Quisque
      porttitor
      tincidunt libero. Sed vulputate nunc sed tortor fringilla maximus. Duis venenatis diam in nunc posuere, eget
      dictum quam
      lacinia. Cras ipsum dolor, mattis nec massa ac, aliquet fermentum elit. Integer a convallis arcu. Sed placerat
      euismod
      arcu, quis hendrerit diam ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula. Aliquam erat
      volutpat. Nam
      semper pellentesque magna, non ornare ante sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia
      lacus.
      Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem a elit vestibulum, et sagittis nibh
      sollicitudin.

      Quisque vulputate dignissim tellus. Aliquam eu tortor quis felis suscipit luctus. Quisque eu mattis elit,
      venenatis
      sollicitudin massa. Fusce convallis, mauris eu tristique consectetur, lacus risus congue urna, eu dignissim
      est sapien
      sed lectus. Phasellus dui magna, maximus eget augue in, ornare scelerisque sem. Curabitur porttitor tortor id
      felis
      vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam egestas nibh diam, vitae sollicitudin leo
      tempor
      vitae. Suspendisse interdum tristique bibendum. Mauris pellentesque eros sit amet hendrerit dignissim. Sed
      auctor urna
      vel sapien accumsan pulvinar. Aliquam a dui et metus laoreet egestas.

      In hac habitasse platea dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod tellus. Phasellus
      fringilla
      quam vitae felis ultrices, vulputate pellentesque massa commodo. Etiam rutrum non lorem at vehicula.
      Pellentesque non
      pretium massa, id rutrum nunc. Aliquam nisi lectus, mollis sed rhoncus et, mollis quis sapien. Integer sit
      amet dolor in
      sapien consequat vehicula at id dolor. Nulla sodales eget enim eu lacinia. Maecenas accumsan libero nisl, vel
      egestas
      ante gravida at.

      Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam sagittis non justo eu sollicitudin.
      Cras libero
      justo, molestie id maximus in, accumsan et augue. Quisque rhoncus tortor at dolor ullamcorper laoreet. Mauris
      sed
      pharetra felis, a varius lorem. Sed dictum ultricies magna non condimentum. Etiam blandit iaculis libero.
      Quisque et
      ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam neque sem, convallis id porta eu, congue quis ipsum.
      Etiam ut
      massa ac libero pretium consequat. Maecenas euismod consequat imperdiet. Praesent a diam purus. Integer sit
      amet
      placerat tellus.

      Mauris nec ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula, sapien semper maximus ultricies,
      nibh
      ligula varius nisl, at laoreet lectus eros venenatis ligula. Cras tempor convallis nisl porta fringilla. Morbi
      eget
      elementum dolor. Curabitur nulla quam, sodales id commodo nec, pulvinar sed justo. Quisque aliquam ante quis
      finibus
      pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum vitae. Quisque nec viverra velit, sit amet
      consequat
      ligula. Etiam in bibendum massa.

      Fusce ornare tristique nisl, a venenatis felis facilisis in. In eget leo ac neque suscipit aliquam. Quisque
      enim orci,
      interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi justo, tristique ac nisl id, pretium porta
      libero.
      Pellentesque ultrices, nulla a aliquet elementum, magna risus molestie ex, eu fringilla libero velit vitae
      diam.
      Maecenas ante lorem, aliquam a porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin in
      rhoncus ligula.
      Donec eget nunc magna. Maecenas nec ex dolor. Etiam sed molestie nulla. Pellentesque nec risus et ex dapibus
      malesuada.
      Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus egestas ex eu tellus euismod, a malesuada
      elit
      hendrerit. Nulla nec augue ut dolor aliquet placerat.

      Vivamus nec auctor dui. Praesent euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl in dolor
      hendrerit
      sodales rutrum at nibh. Etiam eget sodales purus. Nunc imperdiet scelerisque libero, ac ultrices urna sagittis
      ut.
      Quisque vestibulum, lacus ac laoreet sagittis, sapien libero vestibulum mi, et efficitur elit tortor eu
      libero. Cras
      eleifend elit vitae erat tincidunt, eu posuere eros ultrices.

      Integer non arcu eget felis efficitur ultrices. Pellentesque habitant morbi tristique senectus et netus et
      malesuada
      fames ac turpis egestas. Sed egestas leo ligula, eget placerat libero pretium quis. Nam quis euismod mi.
      Aenean maximus
      bibendum justo id facilisis. Cras nibh nunc, interdum vel velit nec, posuere pharetra dolor. Nam vestibulum eu
      ante at
      ornare.

      Donec efficitur blandit nisi, eu ultrices ante euismod at. Pellentesque ornare sit amet ligula id sodales.
      Vestibulum
      suscipit diam sed lectus luctus molestie. Vivamus commodo est et congue fringilla. Cras eget lacus odio. Etiam
      eget
      egestas nulla. Integer a luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper orci fermentum
      in. Mauris
      ut placerat ligula, ac euismod erat. Donec lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue
      ultricies
      sem, et tristique odio imperdiet nec. Proin rutrum hendrerit nisl at consectetur.

      Aliquam elit felis, posuere eu gravida nec, viverra a nisl. Pellentesque habitant morbi tristique senectus et
      netus et
      malesuada fames ac turpis egestas. Donec iaculis, orci sed iaculis commodo, augue ligula eleifend ante, in
      pulvinar diam
      arcu eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper est. Donec vehicula diam quis commodo
      elementum.
      Maecenas euismod ultrices mauris a consequat. Duis varius justo sit amet auctor luctus.

    </p>
  </div>
</c3-dropdown>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <button mat-raised-button [c3DropdownTrigger]="dropdownVeryLongTemplate">
      Dropdown trigger
    </button>

    <c3-dropdown #dropdownVeryLongTemplate>
      <div class="pa-1">
        <h4>Dropdown template</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          pretium odio. Nullam laoreet imperdiet sagittis. Aliquam ac sodales
          augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus
          vehicula id at mi. Nulla aliquam ante sit amet mauris semper posuere.
          Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros
          magna, auctor at purus eget, mattis pellentesque tellus. Cras nec mi
          justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla
          tortor velit, nec pharetra leo hendrerit vitae. Fusce at laoreet
          magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem.
          Praesent in sapien eu lectus pharetra hendrerit eu eget ligula. Fusce
          bibendum dui non risus aliquam, ac lacinia velit gravida. Proin semper
          tortor massa, eget lacinia turpis fermentum sed. Sed malesuada
          fermentum bibendum. Aenean non turpis a eros aliquam eleifend non in
          erat. Donec interdum porta quam et porttitor. Nam rutrum est sed
          bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer
          nulla purus, lacinia tempus porta ut, posuere eget augue. Vivamus
          molestie posuere urna sit amet tempor. Suspendisse potenti. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam id eros purus. Integer vitae urna ut nibh
          pretium facilisis. Morbi at scelerisque arcu, eget efficitur ex. Fusce
          tempor libero vitae est pellentesque, eu ultrices nisl facilisis. Sed
          eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique
          sollicitudin eu, suscipit quis ipsum. Praesent sed est et libero
          gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet
          interdum ac a est. Donec eget vulputate nisi, in fermentum odio. Sed
          posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh ac
          quam pellentesque maximus quis id mauris. Donec nec turpis sed augue
          posuere accumsan in sed erat. Maecenas tempus, sem in posuere tempus,
          odio leo pellentesque lorem, et commodo risus risus vitae elit.
          Aliquam nisl enim, iaculis eget sapien semper, iaculis euismod massa.
          Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas
          ante dui, venenatis eu convallis nec, fermentum eget nunc. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nullam sem ligula,
          dictum non aliquet eget, vestibulum sit amet odio. In quam metus,
          malesuada et accumsan eget, lobortis sit amet diam. Phasellus dolor
          arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed
          risus mi. Quisque sagittis augue vitae justo cursus efficitur. Etiam
          sit amet neque sed lacus pretium feugiat eget eget lorem. Nunc
          laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id
          tincidunt neque mi ut eros. Curabitur tellus nibh, hendrerit id orci
          vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat,
          sed placerat nisi mattis. Pellentesque condimentum placerat turpis
          vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus
          lobortis feugiat. Maecenas pulvinar, mauris sit amet tempor interdum,
          neque lorem gravida tortor, eget vulputate leo diam in arcu. In vitae
          magna vel quam suscipit iaculis. Donec congue consectetur finibus.
          Etiam porta, arcu sed tincidunt dictum, risus neque sodales diam, id
          ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl
          imperdiet viverra sit amet vitae metus. Mauris gravida ante lacus, a
          auctor velit varius vitae. Suspendisse in mauris eu mauris fermentum
          sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis
          tellus sodales in. Nullam tempor sem vitae aliquam dapibus. Donec vel
          egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut
          mi. Etiam sed ipsum nisl. Sed sed nunc massa. Sed nec rhoncus magna,
          quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim. Fusce
          non justo libero. Nullam vitae purus efficitur, finibus tortor vitae,
          aliquet purus. Fusce pulvinar erat neque, sed ornare risus finibus a.
          Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu
          a felis sagittis imperdiet. Integer sem lorem, sagittis et velit
          vitae, bibendum egestas odio. Nam interdum felis elementum lectus
          congue luctus. Nunc id accumsan erat. Maecenas eu metus eu lectus
          feugiat semper vel sed diam. Sed rhoncus est neque. Sed non euismod
          augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non
          pretium at, elementum quis orci. Nam tempor maximus massa eu dictum.
          Quisque sed turpis tristique, condimentum est quis, lacinia lectus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Fusce non erat ultrices, facilisis lacus id,
          varius velit. Aliquam felis metus, blandit eget lobortis eu, congue
          quis mauris. Quisque varius nibh a condimentum consectetur.
          Suspendisse potenti. Phasellus condimentum quam ac diam vulputate
          rutrum a rutrum odio. Sed in elit bibendum, aliquam leo fermentum,
          vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in
          blandit ipsum. Nulla viverra gravida venenatis. Aliquam blandit, felis
          efficitur tempus tristique, diam tellus eleifend lacus, sed commodo
          erat arcu ut neque. Duis laoreet urna sodales dictum dapibus. Nam diam
          est, dignissim a odio eu, mattis pellentesque turpis. Curabitur
          convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut
          viverra, elit quis euismod consequat, orci velit ultricies massa, sed
          vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec
          sodales. Aenean mollis nisl ut orci iaculis dictum. Suspendisse eget
          orci nec libero convallis semper et a lectus. Curabitur ac ante quam.
          Sed sodales velit non odio vestibulum, sed vestibulum leo suscipit. Ut
          ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus sollicitudin, tellus a vulputate tempus, neque orci porta
          enim, at semper dolor velit et libero. Nulla id laoreet dui.
          Pellentesque eros velit, congue et nulla sit amet, elementum aliquam
          sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet
          arcu sit amet condimentum. Pellentesque gravida, libero nec fermentum
          feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet
          nunc. Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a
          laoreet nunc, lacinia fermentum arcu. Donec ex metus, rhoncus sit amet
          velit vitae, scelerisque tempor dolor. In volutpat ullamcorper
          fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas
          dapibus sapien a sollicitudin molestie. Nulla non iaculis neque. Cras
          malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium
          nulla sapien vel felis. Ut porta condimentum magna sed interdum. Cras
          eu felis risus. Proin vel dui quis nibh vulputate pulvinar.
          Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis
          purus id, sodales purus. Donec egestas diam quis quam eleifend
          ullamcorper. Aliquam scelerisque commodo eleifend. Vestibulum bibendum
          bibendum lectus a dictum. Maecenas pulvinar id eros interdum eleifend.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur nec erat lorem. In mollis tempus
          massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam.
          Suspendisse rhoncus felis non tellus pellentesque elementum. Phasellus
          in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent
          vel auctor risus, hendrerit ornare magna. Duis sit amet justo nec nisl
          consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a
          tellus. Vivamus nulla diam, vulputate eu velit ultricies, ultrices
          imperdiet odio. Duis et rutrum elit. Duis dictum finibus nisi ac
          malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere.
          Maecenas vehicula dictum blandit. Donec auctor metus a interdum
          congue. Nullam ipsum erat, pulvinar id nisl sit amet, feugiat
          efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut
          pulvinar. Phasellus quis massa ut lacus imperdiet imperdiet. Proin
          iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent
          auctor mollis congue. Curabitur pharetra, sapien in accumsan porta,
          risus neque feugiat elit, non sollicitudin sapien diam facilisis
          ligula. Morbi tincidunt efficitur fringilla. Aenean vitae semper urna,
          nec aliquet diam. Mauris vel turpis vitae orci tincidunt aliquam et ac
          turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis
          urna. Etiam nec purus ut augue rhoncus tempor. Fusce efficitur
          eleifend imperdiet. Pellentesque vel mi sed leo elementum sodales.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque
          rhoncus convallis venenatis. Ut rutrum ipsum malesuada turpis ultrices
          sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien,
          venenatis non orci vel, convallis lobortis lorem. Quisque id
          scelerisque dolor, sit amet venenatis nunc. Nam lobortis dapibus
          velit, ac porta diam sollicitudin sit amet. Maecenas condimentum nibh
          quis purus dapibus fringilla. Curabitur a consequat urna. Nunc in
          massa elementum, malesuada purus et, placerat nisl. Curabitur
          sollicitudin purus odio, in bibendum purus lobortis non. Morbi sed
          dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Donec suscipit
          sit amet enim quis posuere. Ut convallis libero vel arcu malesuada
          vehicula. Proin scelerisque imperdiet eros. Duis et quam nunc. Donec
          pretium, enim quis commodo placerat, turpis dolor condimentum sapien,
          at porttitor eros urna sit amet eros. Nulla facilisis eleifend
          placerat. Cras nec est nisi. Mauris vitae purus eu tortor rhoncus
          tincidunt. Etiam vitae libero vitae sapien sodales scelerisque. Mauris
          nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet
          venenatis. Etiam interdum sodales efficitur. Mauris ullamcorper risus
          nec accumsan pellentesque. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Phasellus a
          eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a
          finibus tempus, tortor mi pulvinar augue, eget finibus leo sem ac
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Sed lobortis ante eu magna gravida,
          non gravida libero tempus. Nam pellentesque varius velit, a efficitur
          nisi egestas sit amet. Sed volutpat mauris vel faucibus bibendum.
          Aenean viverra porttitor lacus. Donec mi nunc, eleifend blandit dictum
          eget, maximus quis felis. Proin gravida, quam in dignissim iaculis,
          quam odio auctor risus, in mattis lorem orci vel ante. In erat ligula,
          ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non
          maximus fermentum. Curabitur consectetur nisl at est ornare, viverra
          viverra purus laoreet. Proin nunc mauris, interdum eget erat eget,
          interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas
          dignissim turpis id leo mattis tristique. Vestibulum pulvinar tempus
          ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac
          habitasse platea dictumst. Fusce ac efficitur arcu. Fusce id orci at
          ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum nisl,
          quis porta diam tincidunt sed. Duis condimentum dui dui, quis
          tristique tellus accumsan sit amet. Nunc semper ex feugiat lacinia
          aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis
          velit. Nulla ut ligula et quam hendrerit feugiat. Aenean ultricies
          maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin
          mattis, tellus dapibus dapibus lacinia, dolor dolor rhoncus magna, nec
          semper eros nibh sit amet justo. Nullam vulputate tortor dui, id
          luctus tellus aliquam sit amet. Vestibulum cursus massa luctus velit
          hendrerit hendrerit. Curabitur at faucibus sapien, at bibendum erat.
          Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros
          quam, elementum sit amet erat a, placerat ornare libero. Phasellus
          auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra
          vestibulum tortor, non congue nulla mollis in. Fusce at metus
          tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac
          ipsum fermentum tempus. Fusce velit felis, dictum vitae interdum
          vitae, mattis in augue. Vestibulum enim dolor, elementum non tincidunt
          ac, ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit
          laoreet. Phasellus ornare, nisl sed lobortis condimentum, ante dui
          viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus
          leo. Aliquam porta mi eget ante egestas volutpat. Sed diam quam,
          lacinia sed scelerisque eu, ultricies in sem. Aliquam in porta magna,
          nec euismod ante. Nullam justo dolor, facilisis at vehicula vel,
          lacinia vitae mi. Nullam congue imperdiet nibh ac porta. Quisque vitae
          libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor
          tempor, iaculis mauris a, tincidunt ante. Nunc vestibulum dolor diam,
          a ultrices dui sollicitudin ut. Praesent porttitor quam turpis, vitae
          venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla
          augue, venenatis vitae neque ac, ultricies pulvinar mi. Nullam neque
          arcu, ullamcorper vel justo ac, porttitor consequat leo. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Ut imperdiet aliquet dui eget convallis. Nunc lobortis eget
          diam commodo ultrices. Aenean aliquet bibendum nisl sit amet
          pellentesque. Nam nibh elit, porta id enim sit amet, porta tempor
          felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien,
          ac finibus nisl. Mauris eu pulvinar est. Pellentesque iaculis massa
          velit, vitae venenatis lacus ullamcorper id. In finibus elit quis ex
          consequat, scelerisque finibus ante blandit. Quisque et dolor turpis.
          Integer ipsum turpis, varius quis ante sit amet, viverra viverra
          mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi
          vel convallis. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Nulla faucibus in lorem non
          tempus. Nam auctor accumsan varius. Aenean in magna viverra, tempor
          felis quis, fringilla arcu. Etiam vel neque ipsum. In congue gravida
          est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est
          interdum viverra ac et nisi. Morbi egestas porttitor nulla in rutrum.
          Nam enim enim, fringilla nec magna a, rutrum dapibus urna. Donec
          dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in
          sollicitudin accumsan, odio massa ultrices mi, nec suscipit erat
          lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at
          diam consectetur, id tincidunt nunc congue. Mauris ullamcorper
          consectetur convallis. In vitae enim dapibus, egestas tortor sed,
          malesuada sem. Aliquam vel metus at libero varius bibendum sagittis
          blandit lectus. Nullam luctus dui non lacus scelerisque, quis
          tincidunt nisi egestas. Fusce tempus fringilla velit quis placerat.
          Sed et vulputate erat. In commodo ante efficitur, porta ante eu,
          egestas velit. Nullam quam neque, dapibus eu interdum egestas, mollis
          sit amet orci. Suspendisse scelerisque diam vehicula ligula convallis,
          sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla
          diam. Fusce ac lacus sit amet quam tincidunt suscipit a ultricies
          nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis.
          Aenean efficitur arcu in ex faucibus convallis. Phasellus lorem nisi,
          ullamcorper ut mattis vitae, volutpat et erat. Quisque posuere elit
          arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex
          mauris, volutpat ut tempus eget, accumsan eu lectus. Vivamus faucibus
          blandit nunc tempor faucibus. Etiam at sem ut nisl blandit venenatis.
          Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc,
          ornare bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed
          blandit velit, sit amet posuere augue. Nam laoreet tempus nunc at
          aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci
          eget posuere. Nulla quis mattis sem, eget maximus est. Quisque mattis,
          mi ac accumsan convallis, ante risus posuere neque, nec ornare risus
          purus quis nulla. Sed id sem id tellus pretium gravida sit amet eget
          eros. Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin
          rhoncus. Proin egestas libero ut felis semper malesuada. Curabitur
          pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus
          maximus ut et lectus. Praesent iaculis justo nec arcu convallis
          fringilla et sed massa. Aliquam id dictum odio. Donec purus velit,
          imperdiet vel consequat quis, viverra sit amet leo. Ut malesuada ex ut
          arcu posuere, et ullamcorper mi tempus. Integer ut lorem id ipsum
          vulputate viverra et non urna. Nullam commodo aliquam mi in
          condimentum. Nullam suscipit in neque a faucibus. Cras vitae eros
          nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus
          ac aliquet ligula. In ultrices velit vel consectetur blandit. Sed
          lorem dui, pretium sit amet laoreet sed, blandit at lectus. Sed
          congue, justo in ultrices vehicula, quam risus consequat eros, nec
          fringilla orci mi ac elit. Aliquam feugiat, lorem vitae feugiat
          iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio
          quis libero. Curabitur in eleifend est, nec ornare nibh. In vehicula
          molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit
          amet ipsum consectetur, quis imperdiet dolor pharetra. Quisque non
          dolor sit amet sapien mattis eleifend sit amet vel massa. Fusce ante
          ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc.
          Nulla et eleifend libero, sit amet consectetur nisi. Duis congue
          vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus
          at, commodo augue. Donec ut neque mattis, sagittis ligula quis,
          ultricies magna. In hac habitasse platea dictumst. Phasellus dignissim
          arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis
          volutpat. Curabitur magna urna, euismod vel nibh non, interdum congue
          tortor. Suspendisse vel aliquam elit, interdum tristique lectus.
          Maecenas porta quam vel odio elementum, vel iaculis turpis faucibus.
          Quisque in lectus pellentesque, pretium nisl et, tincidunt enim.
          Nullam maximus ligula placerat eros dignissim maximus. Maecenas
          malesuada est nec ultrices ultrices. Quisque ut elit vel ante
          pellentesque consequat. Morbi laoreet felis mi. Integer ex libero,
          sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit
          eleifend nisi vel consectetur. Sed et convallis nisl, quis hendrerit
          purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida
          lacinia est, non tempus turpis mattis quis. Curabitur ultrices arcu
          nec finibus sagittis. Donec fringilla tincidunt lacus ac pulvinar.
          Nunc ultricies nunc at ex lobortis ornare. Fusce placerat dictum lacus
          non luctus. Proin placerat maximus feugiat. Pellentesque posuere
          commodo dui eget rutrum. Pellentesque sed nisi sapien. Sed sem magna,
          dictum et augue non, dignissim porttitor mi. Etiam ornare nisl odio, a
          efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum
          aliquam. Vestibulum vulputate elit nisl, eget posuere augue dictum eu.
          Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque.
          Etiam a consequat quam. Duis non rutrum lacus, non hendrerit sapien.
          Aliquam leo urna, placerat quis pellentesque eget, semper malesuada
          quam. Curabitur quis arcu sodales, tempor dolor at, faucibus enim.
          Fusce nec mollis quam. Morbi sit amet nibh interdum, dapibus nisl at,
          venenatis tellus. Maecenas finibus tellus et risus scelerisque
          venenatis. Integer malesuada justo id quam pharetra, at feugiat dui
          ultricies. Nunc interdum erat orci, ut imperdiet ligula dictum vitae.
          Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce vehicula sed nisi sed venenatis.
          Donec lacinia sit amet enim nec porttitor. Cras mollis dictum
          condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec ipsum erat,
          bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales
          commodo eleifend. Sed auctor, dolor quis aliquet convallis, nisl magna
          interdum massa, non malesuada ex leo nec augue. Curabitur efficitur
          turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat
          pellentesque. Nulla at feugiat risus. Integer rhoncus nisl id dolor
          iaculis, id mollis leo pharetra. Etiam convallis semper libero nec
          pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a.
          Aliquam mauris nisl, convallis at pellentesque eu, tempus nec nulla.
          Praesent sodales cursus erat, ac dignissim leo convallis scelerisque.
          Mauris semper mi non neque vehicula convallis. Suspendisse dictum
          justo eget tortor placerat malesuada. Duis a gravida orci, nec maximus
          neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id.
          Sed ac mauris metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio
          pellentesque consequat nec sed libero. Ut dignissim libero quis
          lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur
          ullamcorper turpis. Donec viverra purus et purus vehicula rutrum. Nam
          iaculis non nulla eu egestas. Donec ac quam purus. Aliquam quis erat
          eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla
          id, venenatis nisi. Suspendisse vehicula placerat augue in vestibulum.
          Nulla elit neque, facilisis quis urna et, auctor tincidunt erat.
          Suspendisse ut aliquet lectus. Cras in rhoncus lacus. Fusce nisi
          neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis
          nisl, eget gravida magna. Vivamus tempus pharetra elit sed accumsan.
          Cras sed gravida mi. Fusce rhoncus ac erat a placerat. Nam congue, leo
          vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus
          lorem nunc at dolor. Duis cursus lacinia ex, at finibus diam
          ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut
          libero. Morbi venenatis at ipsum ut dignissim. In in lacus eget tortor
          porttitor auctor eu sit amet lectus. Phasellus pharetra posuere risus,
          id tincidunt libero scelerisque ac. Praesent eleifend ante nec augue
          eleifend iaculis a nec urna. Proin tincidunt scelerisque nulla,
          pharetra dictum eros tempor non. Duis eros tellus, condimentum at
          sapien ac, aliquet ullamcorper est. Fusce nec risus consectetur nisi
          pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus.
          Morbi porta ligula id risus scelerisque sagittis. Cras quis arcu
          porta, ullamcorper dolor vel, tincidunt metus. Ut finibus sem in nibh
          dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae
          turpis nec, consectetur varius nisl. Quisque ut risus varius,
          fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor
          commodo pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi
          blandit dui non libero volutpat, id lacinia est tincidunt. Aliquam
          erat volutpat. Ut ante magna, pellentesque in orci sollicitudin,
          vestibulum tristique leo. Quisque sed tincidunt est. Nam in ornare ex.
          Donec faucibus, lorem at facilisis finibus, purus felis commodo
          sapien, et commodo risus magna a sem. Cras ornare sapien vulputate
          consequat condimentum. Proin ultricies et urna non congue. Fusce sed
          feugiat sem. Nunc ut purus ac nulla tincidunt eleifend porttitor eu
          eros. Mauris imperdiet eu augue vel malesuada. Cras blandit, augue ut
          pretium facilisis, nulla mauris semper risus, quis mollis felis est at
          arcu. Nullam hendrerit feugiat tellus, at luctus odio porta vel. Nam
          bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus
          euismod nulla metus ut nibh. Mauris eleifend, elit ut vulputate
          semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam
          elementum tortor sed sodales sodales. Mauris posuere metus quis mi
          sagittis, ut varius metus euismod. Integer feugiat, orci vitae
          volutpat blandit, libero augue semper lacus, sit amet tristique lacus
          dolor ac purus. Vestibulum tincidunt eros et cursus pellentesque.
          Donec convallis placerat dapibus. Nullam tortor diam, cursus vitae est
          quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas
          egestas. Mauris euismod lorem non risus ornare, vel consectetur felis
          pretium. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis
          lectus at, condimentum egestas ipsum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis
          urna sed, imperdiet lorem. Vivamus cursus nulla consequat mi consequat
          pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna
          elementum, laoreet pellentesque ex. Fusce ac nisl id justo vehicula
          elementum rutrum at est. Aenean scelerisque dignissim lacus ac
          euismod. Etiam eget est convallis, elementum nibh a, rutrum est.
          Suspendisse potenti. Suspendisse potenti. Quisque porttitor tincidunt
          libero. Sed vulputate nunc sed tortor fringilla maximus. Duis
          venenatis diam in nunc posuere, eget dictum quam lacinia. Cras ipsum
          dolor, mattis nec massa ac, aliquet fermentum elit. Integer a
          convallis arcu. Sed placerat euismod arcu, quis hendrerit diam
          ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula.
          Aliquam erat volutpat. Nam semper pellentesque magna, non ornare ante
          sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia
          lacus. Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem
          a elit vestibulum, et sagittis nibh sollicitudin. Quisque vulputate
          dignissim tellus. Aliquam eu tortor quis felis suscipit luctus.
          Quisque eu mattis elit, venenatis sollicitudin massa. Fusce convallis,
          mauris eu tristique consectetur, lacus risus congue urna, eu dignissim
          est sapien sed lectus. Phasellus dui magna, maximus eget augue in,
          ornare scelerisque sem. Curabitur porttitor tortor id felis
          vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam
          egestas nibh diam, vitae sollicitudin leo tempor vitae. Suspendisse
          interdum tristique bibendum. Mauris pellentesque eros sit amet
          hendrerit dignissim. Sed auctor urna vel sapien accumsan pulvinar.
          Aliquam a dui et metus laoreet egestas. In hac habitasse platea
          dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod
          tellus. Phasellus fringilla quam vitae felis ultrices, vulputate
          pellentesque massa commodo. Etiam rutrum non lorem at vehicula.
          Pellentesque non pretium massa, id rutrum nunc. Aliquam nisi lectus,
          mollis sed rhoncus et, mollis quis sapien. Integer sit amet dolor in
          sapien consequat vehicula at id dolor. Nulla sodales eget enim eu
          lacinia. Maecenas accumsan libero nisl, vel egestas ante gravida at.
          Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam
          sagittis non justo eu sollicitudin. Cras libero justo, molestie id
          maximus in, accumsan et augue. Quisque rhoncus tortor at dolor
          ullamcorper laoreet. Mauris sed pharetra felis, a varius lorem. Sed
          dictum ultricies magna non condimentum. Etiam blandit iaculis libero.
          Quisque et ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam
          neque sem, convallis id porta eu, congue quis ipsum. Etiam ut massa ac
          libero pretium consequat. Maecenas euismod consequat imperdiet.
          Praesent a diam purus. Integer sit amet placerat tellus. Mauris nec
          ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula,
          sapien semper maximus ultricies, nibh ligula varius nisl, at laoreet
          lectus eros venenatis ligula. Cras tempor convallis nisl porta
          fringilla. Morbi eget elementum dolor. Curabitur nulla quam, sodales
          id commodo nec, pulvinar sed justo. Quisque aliquam ante quis finibus
          pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum
          vitae. Quisque nec viverra velit, sit amet consequat ligula. Etiam in
          bibendum massa. Fusce ornare tristique nisl, a venenatis felis
          facilisis in. In eget leo ac neque suscipit aliquam. Quisque enim
          orci, interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi
          justo, tristique ac nisl id, pretium porta libero. Pellentesque
          ultrices, nulla a aliquet elementum, magna risus molestie ex, eu
          fringilla libero velit vitae diam. Maecenas ante lorem, aliquam a
          porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin
          in rhoncus ligula. Donec eget nunc magna. Maecenas nec ex dolor. Etiam
          sed molestie nulla. Pellentesque nec risus et ex dapibus malesuada.
          Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus
          egestas ex eu tellus euismod, a malesuada elit hendrerit. Nulla nec
          augue ut dolor aliquet placerat. Vivamus nec auctor dui. Praesent
          euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl
          in dolor hendrerit sodales rutrum at nibh. Etiam eget sodales purus.
          Nunc imperdiet scelerisque libero, ac ultrices urna sagittis ut.
          Quisque vestibulum, lacus ac laoreet sagittis, sapien libero
          vestibulum mi, et efficitur elit tortor eu libero. Cras eleifend elit
          vitae erat tincidunt, eu posuere eros ultrices. Integer non arcu eget
          felis efficitur ultrices. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Sed egestas
          leo ligula, eget placerat libero pretium quis. Nam quis euismod mi.
          Aenean maximus bibendum justo id facilisis. Cras nibh nunc, interdum
          vel velit nec, posuere pharetra dolor. Nam vestibulum eu ante at
          ornare. Donec efficitur blandit nisi, eu ultrices ante euismod at.
          Pellentesque ornare sit amet ligula id sodales. Vestibulum suscipit
          diam sed lectus luctus molestie. Vivamus commodo est et congue
          fringilla. Cras eget lacus odio. Etiam eget egestas nulla. Integer a
          luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper
          orci fermentum in. Mauris ut placerat ligula, ac euismod erat. Donec
          lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue
          ultricies sem, et tristique odio imperdiet nec. Proin rutrum hendrerit
          nisl at consectetur. Aliquam elit felis, posuere eu gravida nec,
          viverra a nisl. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Donec iaculis, orci sed
          iaculis commodo, augue ligula eleifend ante, in pulvinar diam arcu
          eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper
          est. Donec vehicula diam quis commodo elementum. Maecenas euismod
          ultrices mauris a consequat. Duis varius justo sit amet auctor luctus.
        </p>
      </div>
    </c3-dropdown>
  </ng-container>
</example-viewer>
`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/dropdown/pages/examples/examples.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/dropdown/pages/examples/examples.component.ts", lineNumber: 21 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/dropdown/dropdown-routing.module.ts
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
var _DropdownRoutingModule = class _DropdownRoutingModule {
};
_DropdownRoutingModule.\u0275fac = function DropdownRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownRoutingModule)();
};
_DropdownRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DropdownRoutingModule });
_DropdownRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var DropdownRoutingModule = _DropdownRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/dropdown/dropdown.module.ts
var _DropdownModule = class _DropdownModule {
};
_DropdownModule.\u0275fac = function DropdownModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownModule)();
};
_DropdownModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DropdownModule });
_DropdownModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DropdownRoutingModule] });
var DropdownModule = _DropdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, DropdownRoutingModule]
    }]
  }], null, null);
})();
export {
  DropdownModule
};
//# sourceMappingURL=chunk-OSOJK227.js.map

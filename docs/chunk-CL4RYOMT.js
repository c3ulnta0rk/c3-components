import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule
} from "./chunk-TN6VVLRN.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-CKAG3KXZ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-2ZSYRDPT.js";
import {
  DomSanitizer,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi
} from "./chunk-L4M3OWUD.js";
import {
  AsyncPipe,
  CommonModule,
  NgStyle
} from "./chunk-HVHU2I45.js";
import {
  BehaviorSubject,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  NgModule,
  Optional,
  Output,
  Pipe,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  debounceTime,
  effect,
  filter,
  input,
  map,
  mergeMap,
  of,
  output,
  setClassMetadata,
  skip,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MBD4SKAO.js";

// projects/c3-components/src/lib/c3-file-viewer/directives/full-screen.directive.ts
var _FullScreenDirective = class _FullScreenDirective {
  constructor(el) {
    this.el = el;
    this.fullscreenState = input(null, ...ngDevMode ? [{ debugName: "fullscreenState", alias: "c3Screenfull" }] : [{ alias: "c3Screenfull" }]);
    this.fullscreenStateSetter = input(null, ...ngDevMode ? [{ debugName: "fullscreenStateSetter", alias: "c3-full-screen" }] : [{ alias: "c3-full-screen" }]);
    this._fullscreenState = new BehaviorSubject(false);
    effect(() => {
      const state = this.fullscreenState();
      if (state !== null) {
        this._fullscreenState.next(state.valueOf() || false);
      }
    });
    effect(() => {
      const state = this.fullscreenStateSetter();
      if (state !== null) {
        this._fullscreenState.next(state.valueOf() || false);
      }
    });
    this._fullscreenState.pipe(filter((value) => value !== null), skip(2), debounceTime(100)).subscribe(() => {
      this.defineState();
    });
  }
  defineState() {
    if (this._fullscreenState.getValue()) {
      const element = this.el.nativeElement;
      const requestMethod = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
      if (requestMethod) {
        requestMethod.call(element);
      } else {
        console.log("FullScreen Request Method Not Supported on this browser.");
      }
    } else {
      const element = document;
      const requestMethod = element.cancelFullscreen || element.webkitExitFullscreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullScreen;
      if (requestMethod) {
        requestMethod.call(element);
      } else {
        console.log("FullScreen Cancel Request Method Not Supported on this browser.");
      }
    }
  }
};
_FullScreenDirective.\u0275fac = function FullScreenDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FullScreenDirective)(\u0275\u0275directiveInject(ElementRef));
};
_FullScreenDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FullScreenDirective, selectors: [["", "C3FullScreen", ""], ["", "c3-full-screen", ""]], inputs: { fullscreenState: [1, "c3Screenfull", "fullscreenState"], fullscreenStateSetter: [1, "c3-full-screen", "fullscreenStateSetter"] }, standalone: false });
var FullScreenDirective = _FullScreenDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullScreenDirective, [{
    type: Directive,
    args: [{
      selector: "[C3FullScreen], [c3-full-screen]",
      standalone: false
    }]
  }], () => [{ type: ElementRef }], { fullscreenState: [{ type: Input, args: [{ isSignal: true, alias: "c3Screenfull", required: false }] }], fullscreenStateSetter: [{ type: Input, args: [{ isSignal: true, alias: "c3-full-screen", required: false }] }] });
})();

// projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-actions/c3-file-viewer-actions.component.ts
var _forTrack0 = ($index, $item) => $item.icon.text;
function C3FileViewerActionsComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.prev == null ? null : ctx_r1.config.btnIcons.prev.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_1_Conditional_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fileViewer().previousImage($event));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.prev == null ? null : ctx_r1.config.btnIcons.prev.text);
  }
}
function C3FileViewerActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fileViewer().previousImage($event));
    });
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_1_Conditional_1_Template, 1, 2, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, C3FileViewerActionsComponent_Conditional_1_Conditional_2_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275property("disabled", ctx_r1.fileViewer().currentIndex === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.prev == null ? null : ctx_r1.config.btnIcons.prev.classes) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.prev == null ? null : ctx_r1.config.btnIcons.prev.text) ? 2 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fileViewer().nextImage($event));
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275property("disabled", ctx_r1.fileViewer().currentIndex === ctx_r1.fileViewer().files.length - 1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.next == null ? null : ctx_r1.config.btnIcons.next.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fileViewer().nextImage($event));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.next == null ? null : ctx_r1.config.btnIcons.next.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().rotateCounterClockwise());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_1_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().rotateCounterClockwise());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_1_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_1_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise.classes) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise == null ? null : ctx_r1.config.btnIcons.rotateCounterClockwise.text) ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().rotateClockwise());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateClockwise == null ? null : ctx_r1.config.btnIcons.rotateClockwise.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_2_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().rotateClockwise());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateClockwise == null ? null : ctx_r1.config.btnIcons.rotateClockwise.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_2_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_2_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateClockwise == null ? null : ctx_r1.config.btnIcons.rotateClockwise.classes) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.rotateClockwise == null ? null : ctx_r1.config.btnIcons.rotateClockwise.text) ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_3_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().zoomOut());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_3_Conditional_0_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().zoomOut());
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomOut == null ? null : ctx_r1.config.btnIcons.zoomOut.classes);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomOut == null ? null : ctx_r1.config.btnIcons.zoomOut.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_3_Conditional_0_Template, 5, 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomOut == null ? null : ctx_r1.config.btnIcons.zoomOut.classes) ? 0 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_4_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().zoomIn());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomIn == null ? null : ctx_r1.config.btnIcons.zoomIn.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_4_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().zoomIn());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomIn == null ? null : ctx_r1.config.btnIcons.zoomIn.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_4_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_4_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomIn == null ? null : ctx_r1.config.btnIcons.zoomIn.classes) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.zoomIn == null ? null : ctx_r1.config.btnIcons.zoomIn.text) ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_5_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().toggleFullscreen());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.fullscreen == null ? null : ctx_r1.config.btnIcons.fullscreen.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_5_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().toggleFullscreen());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.fullscreen == null ? null : ctx_r1.config.btnIcons.fullscreen.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_5_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_5_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.fullscreen == null ? null : ctx_r1.config.btnIcons.fullscreen.classes) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.fullscreen == null ? null : ctx_r1.config.btnIcons.fullscreen.text) ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_6_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().reset());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.reset == null ? null : ctx_r1.config.btnIcons.reset.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_6_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().reset());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.reset == null ? null : ctx_r1.config.btnIcons.reset.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_6_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_6_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.reset == null ? null : ctx_r1.config.btnIcons.reset.classes) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.reset == null ? null : ctx_r1.config.btnIcons.reset.text) ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_7_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().download());
    });
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.download == null ? null : ctx_r1.config.btnIcons.download.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function C3FileViewerActionsComponent_Conditional_4_Conditional_7_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fileViewer().download());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.download == null ? null : ctx_r1.config.btnIcons.download.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_Conditional_7_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_7_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.download == null ? null : ctx_r1.config.btnIcons.download.classes) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnIcons == null ? null : ctx_r1.config.btnIcons.download == null ? null : ctx_r1.config.btnIcons.download.text) ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cBtn_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(cBtn_r19.icon.classes);
  }
}
function C3FileViewerActionsComponent_Conditional_4_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cBtn_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.config.btnClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.config.btnSubClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cBtn_r19.icon.text);
  }
}
function C3FileViewerActionsComponent_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerActionsComponent_Conditional_4_For_9_Conditional_0_Template, 2, 4, "button", 7);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_For_9_Conditional_1_Template, 3, 5, "a", 2);
  }
  if (rf & 2) {
    const cBtn_r19 = ctx.$implicit;
    \u0275\u0275conditional(cBtn_r19.icon.classes ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cBtn_r19.icon.text ? 1 : -1);
  }
}
function C3FileViewerActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_4_Conditional_1_Template, 2, 2);
    \u0275\u0275conditionalCreate(2, C3FileViewerActionsComponent_Conditional_4_Conditional_2_Template, 2, 2);
    \u0275\u0275conditionalCreate(3, C3FileViewerActionsComponent_Conditional_4_Conditional_3_Template, 1, 1);
    \u0275\u0275conditionalCreate(4, C3FileViewerActionsComponent_Conditional_4_Conditional_4_Template, 2, 2);
    \u0275\u0275conditionalCreate(5, C3FileViewerActionsComponent_Conditional_4_Conditional_5_Template, 2, 2);
    \u0275\u0275conditionalCreate(6, C3FileViewerActionsComponent_Conditional_4_Conditional_6_Template, 2, 2);
    \u0275\u0275conditionalCreate(7, C3FileViewerActionsComponent_Conditional_4_Conditional_7_Template, 2, 2);
    \u0275\u0275repeaterCreate(8, C3FileViewerActionsComponent_Conditional_4_For_9_Template, 2, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.config.btnContainerClass);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnShow == null ? null : ctx_r1.config.btnShow.rotateCounterClockwise) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnShow == null ? null : ctx_r1.config.btnShow.rotateClockwise) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnShow == null ? null : ctx_r1.config.btnShow.zoomOut) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnShow == null ? null : ctx_r1.config.btnShow.zoomIn) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.config.allowFullscreen ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnShow == null ? null : ctx_r1.config.btnShow.reset) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.config.btnShow == null ? null : ctx_r1.config.btnShow.download) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.config.customBtns);
  }
}
var _C3FileViewerActionsComponent = class _C3FileViewerActionsComponent {
  constructor() {
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
  }
  get config() {
    return this.fileViewer().config;
  }
};
_C3FileViewerActionsComponent.\u0275fac = function C3FileViewerActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerActionsComponent)();
};
_C3FileViewerActionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerActionsComponent, selectors: [["c3-file-viewer-actions"]], inputs: { fileViewer: [1, "fileViewer"] }, standalone: false, decls: 5, vars: 4, consts: [[1, "nav-button-container"], ["type", "button", 3, "class", "disabled"], [3, "class"], [1, "btn-container", 3, "class"], ["type", "button", 3, "click", "disabled"], [3, "click"], [1, "btn-container"], ["type", "button", 3, "class"], ["type", "button", 3, "click"], ["type", "button"]], template: function C3FileViewerActionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, C3FileViewerActionsComponent_Conditional_1_Template, 3, 5);
    \u0275\u0275conditionalCreate(2, C3FileViewerActionsComponent_Conditional_2_Template, 2, 5, "button", 1);
    \u0275\u0275conditionalCreate(3, C3FileViewerActionsComponent_Conditional_3_Template, 3, 5, "a", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, C3FileViewerActionsComponent_Conditional_4_Template, 10, 9, "div", 3);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.config.btnShow == null ? null : ctx.config.btnShow.prev) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.config.btnShow == null ? null : ctx.config.btnShow.next) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.config.btnIcons == null ? null : ctx.config.btnIcons.next == null ? null : ctx.config.btnIcons.next.text) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.fileViewer().currentFile.type.startsWith("image") ? 4 : -1);
  }
}, encapsulation: 2 });
var C3FileViewerActionsComponent = _C3FileViewerActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerActionsComponent, [{
    type: Component,
    args: [{ selector: "c3-file-viewer-actions", standalone: false, template: `<div class="nav-button-container">
  @if (config.btnShow?.prev) {
    <button
      type="button"
      [class]="config.btnClass"
      (click)="fileViewer().previousImage($event)"
      [disabled]="fileViewer().currentIndex === 0"
      >
      @if (config.btnIcons?.prev?.classes) {
        <span [class]="config.btnIcons?.prev?.classes"></span>
      }
    </button>
    @if (config.btnIcons?.prev?.text) {
      <a
        [class]="config.btnClass"
        (click)="fileViewer().previousImage($event)"
        >
        <span [class]="config.btnSubClass">{{ config.btnIcons?.prev?.text }}</span>
      </a>
    }
  }
  @if (config.btnShow?.next) {
    <button
      type="button"
      [class]="config.btnClass"
      (click)="fileViewer().nextImage($event)"
      [disabled]="fileViewer().currentIndex === fileViewer().files.length - 1"
      >
      <span [class]="config.btnIcons?.next?.classes"></span>
    </button>
  }

  @if (config.btnIcons?.next?.text) {
    <a
      [class]="config.btnClass"
      (click)="fileViewer().nextImage($event)"
      >
      <span [class]="config.btnSubClass">{{ config.btnIcons?.next?.text }}</span>
    </a>
  }
</div>

@if (fileViewer().currentFile.type.startsWith('image')) {
  <!-- Button Container -->
  <div
    class="btn-container"
    [class]="config.btnContainerClass"
    >
    <!-- Rotate Counter Clockwise -->
    @if (config.btnShow?.rotateCounterClockwise) {
      @if (config.btnIcons?.rotateCounterClockwise?.classes) {
        <button
          type="button"
          [class]="config.btnClass"
          (click)="fileViewer().rotateCounterClockwise()"
          >
          <span [class]="config.btnIcons?.rotateCounterClockwise?.classes"></span>
        </button>
      }
      @if (config.btnIcons?.rotateCounterClockwise?.text) {
        <a
          [class]="config.btnClass"
          (click)="fileViewer().rotateCounterClockwise()"
          >
          <span [class]="config.btnSubClass">{{
            config.btnIcons?.rotateCounterClockwise?.text
          }}</span>
        </a>
      }
    }

    <!-- Rotate Clockwise -->
    @if (config.btnShow?.rotateClockwise) {
      @if (config.btnIcons?.rotateClockwise?.classes) {
        <button
          type="button"
          [class]="config.btnClass"
          (click)="fileViewer().rotateClockwise()"
          >
          <span [class]="config.btnIcons?.rotateClockwise?.classes"></span>
        </button>
      }
      @if (config.btnIcons?.rotateClockwise?.text) {
        <a
          [class]="config.btnClass"
          (click)="fileViewer().rotateClockwise()"
          >
          <span [class]="config.btnSubClass">{{
            config.btnIcons?.rotateClockwise?.text
          }}</span>
        </a>
      }
    }

    <!-- Zoom Out -->
    @if (config.btnShow?.zoomOut) {
      @if (config.btnIcons?.zoomOut?.classes) {
        <button
          type="button"
          [class]="config.btnClass"
          (click)="fileViewer().zoomOut()"
          >
          <span [class]="config.btnIcons?.zoomOut?.classes"></span>
        </button>
        <a
          [class]="config.btnClass"
          (click)="fileViewer().zoomOut()"
          >
          <span [class]="config.btnSubClass">{{
            config.btnIcons?.zoomOut?.text
          }}</span>
        </a>
      }
    }

    <!-- Zoom In -->
    @if (config.btnShow?.zoomIn) {
      @if (config.btnIcons?.zoomIn?.classes) {
        <button
          type="button"
          [class]="config.btnClass"
          (click)="fileViewer().zoomIn()"
          >
          <span [class]="config.btnIcons?.zoomIn?.classes"></span>
        </button>
      }
      @if (config.btnIcons?.zoomIn?.text) {
        <a
          [class]="config.btnClass"
          (click)="fileViewer().zoomIn()"
          >
          <span [class]="config.btnSubClass">{{
            config.btnIcons?.zoomIn?.text
          }}</span>
        </a>
      }
    }

    <!-- Fullscreen -->
    @if (config.allowFullscreen) {
      @if (config.btnIcons?.fullscreen?.classes) {
        <button
          type="button"
          [class]="config.btnClass"
          (click)="fileViewer().toggleFullscreen()"
          >
          <span [class]="config.btnIcons?.fullscreen?.classes"></span>
        </button>
      }
      @if (config.btnIcons?.fullscreen?.text) {
        <a
          [class]="config.btnClass"
          (click)="fileViewer().toggleFullscreen()"
          >
          <span [class]="config.btnSubClass">{{
            config.btnIcons?.fullscreen?.text
          }}</span>
        </a>
      }
    }

    <!-- Reset -->
    @if (config.btnShow?.reset) {
      @if (config.btnIcons?.reset?.classes) {
        <button
          type="button"
          [class]="config.btnClass"
          (click)="fileViewer().reset()"
          >
          <span [class]="config.btnIcons?.reset?.classes"></span>
        </button>
      }
      @if (config.btnIcons?.reset?.text) {
        <a
          [class]="config.btnClass"
          (click)="fileViewer().reset()"
          >
          <span [class]="config.btnSubClass">{{
            config.btnIcons?.reset?.text
          }}</span>
        </a>
      }
    }

    <!-- Download -->
    @if (config.btnShow?.download) {
      @if (config.btnIcons?.download?.classes) {
        <button type="button" [class]="config.btnClass" (click)="fileViewer().download()">
          <span [class]="config.btnIcons?.download?.classes"></span>
        </button>
      }
      @if (config.btnIcons?.download?.text) {
        <a [class]="config.btnClass" (click)="fileViewer().download()">
          <span [class]="config.btnSubClass">{{ config.btnIcons?.download?.text }}</span>
        </a>
      }
    }

    <!-- Custom Buttons -->
    @for (cBtn of config.customBtns; track cBtn.icon.text) {
      @if (cBtn.icon.classes) {
        <button type="button" [class]="config.btnClass">
          <span [class]="cBtn.icon.classes"></span>
        </button>
      }
      @if (cBtn.icon.text) {
        <a [class]="config.btnClass">
          <span [class]="config.btnSubClass">{{ cBtn.icon.text }}</span>
        </a>
      }
    }
  </div>
}
` }]
  }], null, { fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerActionsComponent, { className: "C3FileViewerActionsComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-actions/c3-file-viewer-actions.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-safe-url/pipes/c3-safe-url.pipe.ts
var _C3SafeUrlPipe = class _C3SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : "";
  }
};
_C3SafeUrlPipe.\u0275fac = function C3SafeUrlPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3SafeUrlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
};
_C3SafeUrlPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "c3SafeUrl", type: _C3SafeUrlPipe, pure: true });
var C3SafeUrlPipe = _C3SafeUrlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3SafeUrlPipe, [{
    type: Pipe,
    args: [{
      name: "c3SafeUrl",
      standalone: true
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

// projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-image/c3-file-viewer-image.component.ts
function C3FileViewerImageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "c3SafeUrl");
    \u0275\u0275listener("dragstart", function C3FileViewerImageComponent_Conditional_0_Template_img_dragstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragstart.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, ctx_r1.fileViewer().currentFile.objectUrl)), \u0275\u0275sanitizeUrl)("ngStyle", ctx_r1.fileViewer().style);
  }
}
var _C3FileViewerImageComponent = class _C3FileViewerImageComponent {
  constructor() {
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
    this.dragstart = output();
  }
};
_C3FileViewerImageComponent.\u0275fac = function C3FileViewerImageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerImageComponent)();
};
_C3FileViewerImageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerImageComponent, selectors: [["c3-file-viewer-image"], ["", "c3-file-viewer-image", ""]], inputs: { fileViewer: [1, "fileViewer"] }, outputs: { dragstart: "dragstart" }, standalone: false, decls: 1, vars: 1, consts: [["alt", "Image not found...", 3, "src", "ngStyle"], ["alt", "Image not found...", 3, "dragstart", "src", "ngStyle"]], template: function C3FileViewerImageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerImageComponent_Conditional_0_Template, 3, 6, "img", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.fileViewer().currentFile.objectUrl ? 0 : -1);
  }
}, dependencies: [NgStyle, AsyncPipe, C3SafeUrlPipe], encapsulation: 2 });
var C3FileViewerImageComponent = _C3FileViewerImageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerImageComponent, [{
    type: Component,
    args: [{ selector: "c3-file-viewer-image, [c3-file-viewer-image]", standalone: false, template: '@if (fileViewer().currentFile.objectUrl) {\n  <img\n    [src]="fileViewer().currentFile.objectUrl | async | c3SafeUrl"\n    [ngStyle]="fileViewer().style"\n    alt="Image not found..."\n    (dragstart)="dragstart.emit($event)"\n    />\n}\n' }]
  }], null, { fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }], dragstart: [{ type: Output, args: ["dragstart"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerImageComponent, { className: "C3FileViewerImageComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-image/c3-file-viewer-image.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-pdf/c3-file-viewer-pdf.component.ts
var _C3FileViewerPdfComponent = class _C3FileViewerPdfComponent {
  constructor() {
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
    this.dragstart = output();
  }
};
_C3FileViewerPdfComponent.\u0275fac = function C3FileViewerPdfComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerPdfComponent)();
};
_C3FileViewerPdfComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerPdfComponent, selectors: [["c3-file-viewer-pdf"]], hostAttrs: [1, "c3-file-viewer-pdf", 2, "display", "block"], inputs: { fileViewer: [1, "fileViewer"] }, outputs: { dragstart: "dragstart" }, standalone: false, decls: 6, vars: 9, consts: [["type", "application/pdf", 3, "src"], ["mat-icon-button", "", 1, "download-button", 3, "click"]], template: function C3FileViewerPdfComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "embed", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "c3SafeUrl");
    \u0275\u0275elementStart(3, "button", 1);
    \u0275\u0275listener("click", function C3FileViewerPdfComponent_Template_button_click_3_listener() {
      return ctx.fileViewer().download();
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", "100%")("width", "100%");
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, \u0275\u0275pipeBind1(1, 5, ctx.fileViewer().currentFile.objectUrl)), \u0275\u0275sanitizeResourceUrl);
  }
}, dependencies: [MatIcon, MatIconButton, AsyncPipe, C3SafeUrlPipe], encapsulation: 2 });
var C3FileViewerPdfComponent = _C3FileViewerPdfComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerPdfComponent, [{
    type: Component,
    args: [{ selector: "c3-file-viewer-pdf", encapsulation: ViewEncapsulation.None, host: {
      style: "display: block",
      class: "c3-file-viewer-pdf"
    }, standalone: false, template: `<!-- pdf viewer -->
<embed
  type="application/pdf"
  [src]="fileViewer().currentFile.objectUrl | async | c3SafeUrl"
  [style.height]="'100%'"
  [style.width]="'100%'"
/>
<!-- floating download button -->
<button mat-icon-button class="download-button" (click)="fileViewer().download()">
  <mat-icon>download</mat-icon>
</button>
` }]
  }], null, { fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }], dragstart: [{ type: Output, args: ["dragstart"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerPdfComponent, { className: "C3FileViewerPdfComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-pdf/c3-file-viewer-pdf.component.ts", lineNumber: 19 });
})();

// projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-video/c3-file-viewer-video.component.ts
var _C3FileViewerVideoComponent = class _C3FileViewerVideoComponent {
  constructor() {
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
  }
};
_C3FileViewerVideoComponent.\u0275fac = function C3FileViewerVideoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerVideoComponent)();
};
_C3FileViewerVideoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerVideoComponent, selectors: [["c3-file-viewer-video"]], inputs: { fileViewer: [1, "fileViewer"] }, standalone: false, decls: 3, vars: 5, consts: [["controls", "", "crossorigin", "*", 3, "src"]], template: function C3FileViewerVideoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "c3SafeUrl");
  }
  if (rf & 2) {
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx.fileViewer().currentFile.objectUrl)), \u0275\u0275sanitizeUrl);
  }
}, dependencies: [AsyncPipe, C3SafeUrlPipe], encapsulation: 2 });
var C3FileViewerVideoComponent = _C3FileViewerVideoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerVideoComponent, [{
    type: Component,
    args: [{ selector: "c3-file-viewer-video", standalone: false, template: '<video controls [src]="fileViewer().currentFile.objectUrl | async | c3SafeUrl" crossorigin="*"></video>\n' }]
  }], null, { fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerVideoComponent, { className: "C3FileViewerVideoComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-video/c3-file-viewer-video.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-default/c3-file-viewer-default.component.ts
var _C3FileViewerDefaultComponent = class _C3FileViewerDefaultComponent {
  constructor() {
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
  }
};
_C3FileViewerDefaultComponent.\u0275fac = function C3FileViewerDefaultComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerDefaultComponent)();
};
_C3FileViewerDefaultComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerDefaultComponent, selectors: [["c3-file-viewer-default"]], inputs: { fileViewer: [1, "fileViewer"] }, standalone: false, decls: 3, vars: 1, consts: [[3, "click"]], template: function C3FileViewerDefaultComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 0);
    \u0275\u0275listener("click", function C3FileViewerDefaultComponent_Template_button_click_1_listener() {
      return ctx.fileViewer().download();
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Download ", ctx.fileViewer().getOriginalName());
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=c3-file-viewer-default.component.css.map */"] });
var C3FileViewerDefaultComponent = _C3FileViewerDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerDefaultComponent, [{
    type: Component,
    args: [{ selector: "c3-file-viewer-default", standalone: false, template: '<ng-container>\n  <button (click)="fileViewer().download()">Download {{ fileViewer().getOriginalName() }}</button>\n</ng-container>\n', styles: ["/* projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-default/c3-file-viewer-default.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=c3-file-viewer-default.component.css.map */\n"] }]
  }], null, { fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerDefaultComponent, { className: "C3FileViewerDefaultComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/c3-file-viewer-default/c3-file-viewer-default.component.ts", lineNumber: 10 });
})();

// projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer/c3-file-viewer.component.ts
function C3FileViewerComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c3-file-viewer-image", 5);
    \u0275\u0275listener("dragstart", function C3FileViewerComponent_Conditional_0_Conditional_2_Template_c3_file_viewer_image_dragstart_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const viewer_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(viewer_r2.onDragStart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const viewer_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(viewer_r2.style);
    \u0275\u0275property("fileViewer", viewer_r2);
  }
}
function C3FileViewerComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c3-file-viewer-video", 3);
  }
  if (rf & 2) {
    const viewer_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("fileViewer", viewer_r2);
  }
}
function C3FileViewerComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c3-file-viewer-pdf", 3);
  }
  if (rf & 2) {
    const viewer_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("fileViewer", viewer_r2);
  }
}
function C3FileViewerComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c3-file-viewer-default", 3);
  }
  if (rf & 2) {
    const viewer_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("fileViewer", viewer_r2);
  }
}
function C3FileViewerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function C3FileViewerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("wheel", function C3FileViewerComponent_Conditional_0_Template_div_wheel_0_listener($event) {
      const viewer_r2 = \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(viewer_r2.scrollZoom($event));
    })("dragover", function C3FileViewerComponent_Conditional_0_Template_div_dragover_0_listener($event) {
      const viewer_r2 = \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(viewer_r2.onDragOver($event));
    });
    \u0275\u0275conditionalCreate(2, C3FileViewerComponent_Conditional_0_Conditional_2_Template, 1, 3, "c3-file-viewer-image", 2)(3, C3FileViewerComponent_Conditional_0_Conditional_3_Template, 1, 1, "c3-file-viewer-video", 3)(4, C3FileViewerComponent_Conditional_0_Conditional_4_Template, 1, 1, "c3-file-viewer-pdf", 3)(5, C3FileViewerComponent_Conditional_0_Conditional_5_Template, 1, 1, "c3-file-viewer-default", 3);
    \u0275\u0275element(6, "div");
    \u0275\u0275conditionalCreate(7, C3FileViewerComponent_Conditional_0_Conditional_7_Template, 2, 0, "div", 4);
    \u0275\u0275element(8, "c3-file-viewer-actions", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const viewer_r2 = ctx;
    \u0275\u0275styleProp("height", viewer_r2.styleHeight)("background-color", viewer_r2.config.containerBackgroundColor);
    \u0275\u0275property("c3-full-screen", \u0275\u0275pipeBind1(1, 8, viewer_r2.fullscreen$));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(viewer_r2.currentFile.type.startsWith("image") ? 2 : viewer_r2.currentFile.type.startsWith("video") ? 3 : viewer_r2.currentFile.type.startsWith("application/pdf") ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(viewer_r2.loading ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("fileViewer", viewer_r2);
  }
}
var _C3FileViewerComponent = class _C3FileViewerComponent {
  constructor(moduleConfig, _http) {
    this.moduleConfig = moduleConfig;
    this._http = _http;
    this.screenHeightOccupied = input(0, ...ngDevMode ? [{ debugName: "screenHeightOccupied" }] : []);
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
    this.indexChange = output();
    this.configChange = output();
    this.customFileEvent = output();
    effect(() => {
      const viewer = this.fileViewer();
      viewer.customFile$.subscribe((event) => {
        this.customFileEvent.emit(event);
      });
      viewer.index$.subscribe((index) => {
        this.indexChange.emit(index);
      });
      viewer.config$.subscribe((config) => {
        this.configChange.emit(config);
      });
    });
  }
  ngOnInit() {
    this.defineStyleHeight();
  }
  onMouseOver() {
    const viewer = this.fileViewer();
    if (viewer)
      viewer.hovered = true;
  }
  onMouseLeave() {
    const viewer = this.fileViewer();
    if (viewer)
      viewer.hovered = false;
  }
  ngOnChanges(changes) {
    if (changes["screenHeightOccupied"] && this.fileViewer())
      this.defineStyleHeight();
  }
  next(event) {
    this.fileViewer().nextImage(event);
  }
  previous(event) {
    this.fileViewer().previousImage(event);
  }
  defineStyleHeight() {
    this.fileViewer().styleHeight = "calc(100% - " + this.screenHeightOccupied() + "px)";
  }
};
_C3FileViewerComponent.\u0275fac = function C3FileViewerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerComponent)(\u0275\u0275directiveInject("config", 8), \u0275\u0275directiveInject(HttpClient));
};
_C3FileViewerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerComponent, selectors: [["c3-file-viewer"]], hostAttrs: [1, "c3-file-viewer"], hostBindings: function C3FileViewerComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mouseover", function C3FileViewerComponent_mouseover_HostBindingHandler() {
      return ctx.onMouseOver();
    })("mouseleave", function C3FileViewerComponent_mouseleave_HostBindingHandler() {
      return ctx.onMouseLeave();
    })("keyup.ArrowRight", function C3FileViewerComponent_keyup_ArrowRight_HostBindingHandler($event) {
      return ctx.next($event);
    }, \u0275\u0275resolveWindow)("keyup.ArrowLeft", function C3FileViewerComponent_keyup_ArrowLeft_HostBindingHandler($event) {
      return ctx.previous($event);
    }, \u0275\u0275resolveWindow);
  }
}, inputs: { screenHeightOccupied: [1, "screenHeightOccupied"], fileViewer: [1, "fileViewer"] }, outputs: { indexChange: "indexChange", configChange: "configChange", customFileEvent: "customFileEvent" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "c3-file-container", 3, "c3-full-screen", "height", "backgroundColor"], [1, "c3-file-container", 3, "wheel", "dragover", "c3-full-screen"], [3, "fileViewer", "style"], [3, "fileViewer"], [1, "spinner-container"], [3, "dragstart", "fileViewer"], [1, "spinner"]], template: function C3FileViewerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, C3FileViewerComponent_Conditional_0_Template, 9, 10, "div", 0);
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.fileViewer()) ? 0 : -1, tmp_0_0);
  }
}, dependencies: [FullScreenDirective, C3FileViewerActionsComponent, C3FileViewerImageComponent, C3FileViewerPdfComponent, C3FileViewerVideoComponent, C3FileViewerDefaultComponent, AsyncPipe], styles: ["/* projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer/c3-file-viewer.component.scss */\n.c3-file-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n/*# sourceMappingURL=c3-file-viewer.component.css.map */\n"], encapsulation: 2 });
var C3FileViewerComponent = _C3FileViewerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerComponent, [{
    type: Component,
    args: [{ selector: "c3-file-viewer", encapsulation: ViewEncapsulation.None, host: {
      class: "c3-file-viewer"
    }, standalone: false, template: `@if (fileViewer(); as viewer) {
<div
  class="c3-file-container"
  [c3-full-screen]="viewer.fullscreen$ | async"
  [style.height]="viewer.styleHeight"
  [style.backgroundColor]="viewer.config.containerBackgroundColor"
  (wheel)="viewer.scrollZoom($event)"
  (dragover)="viewer.onDragOver($event)"
>
  @if (viewer.currentFile.type.startsWith('image')) {
    <c3-file-viewer-image
      [fileViewer]="viewer"
      [style]="viewer.style"
      (dragstart)="viewer.onDragStart($event)"
    />
  } @else if (viewer.currentFile.type.startsWith('video')) {
    <c3-file-viewer-video
      [fileViewer]="viewer"
    />
  } @else if (viewer.currentFile.type.startsWith('application/pdf')) {
    <c3-file-viewer-pdf
      [fileViewer]="viewer"
    />
  } @else {
    <c3-file-viewer-default
      [fileViewer]="viewer"
    />
  }

  <!-- Div below will be used to hide the 'ghost' image when dragging -->
  <div></div>
  @if (viewer.loading) {
    <div class="spinner-container">
      <div class="spinner"></div>
    </div>
  }

    <c3-file-viewer-actions [fileViewer]="viewer" />
  </div>
}
`, styles: ["/* projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer/c3-file-viewer.component.scss */\n.c3-file-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n/*# sourceMappingURL=c3-file-viewer.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: ["config"]
  }] }, { type: HttpClient }], { screenHeightOccupied: [{ type: Input, args: [{ isSignal: true, alias: "screenHeightOccupied", required: false }] }], fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }], indexChange: [{ type: Output, args: ["indexChange"] }], configChange: [{ type: Output, args: ["configChange"] }], customFileEvent: [{ type: Output, args: ["customFileEvent"] }], onMouseOver: [{
    type: HostListener,
    args: ["mouseover"]
  }], onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }], next: [{
    type: HostListener,
    args: ["window:keyup.ArrowRight", ["$event"]]
  }], previous: [{
    type: HostListener,
    args: ["window:keyup.ArrowLeft", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerComponent, { className: "C3FileViewerComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer/c3-file-viewer.component.ts", lineNumber: 28 });
})();

// projects/c3-components/src/lib/c3-file-viewer/consts/default.config.ts
var DEFAULT_CONFIG = {
  btnContainerClass: "btn-container",
  btnClass: "default",
  btnSubClass: "material-icons",
  zoomFactor: 0.1,
  containerBackgroundColor: "#00000000",
  wheelZoom: false,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: true,
    prev: true,
    reset: true,
    download: true
  },
  btnIcons: {
    zoomIn: {
      text: "zoom_in"
    },
    zoomOut: {
      text: "zoom_out"
    },
    rotateClockwise: {
      text: "rotate_right"
    },
    rotateCounterClockwise: {
      text: "rotate_left"
    },
    fullscreen: {
      text: "fullscreen"
    },
    reset: {
      text: "restore"
    },
    download: {
      text: "download"
    }
  }
};

// projects/c3-components/src/lib/c3-file-viewer/models/custom-file-event.model.ts
var CustomFileEvent = class {
  constructor(name, fileUrl) {
    this.name = name;
    this.fileUrl = fileUrl;
  }
};

// projects/c3-components/src/lib/c3-file-viewer/consts/supported-type.ts
var SUPPORTED_MIME_TYPES = [
  // Documents et Applications
  // 'text/html',
  // 'text/css',
  // 'text/plain',
  // 'application/javascript',
  // 'application/json',
  // 'application/xml',
  "application/pdf",
  // Images
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg+xml",
  "image/webp",
  "image/avif",
  "image/bmp",
  "image/x-icon",
  // Audio et Vidéo
  // 'audio/mpeg',
  // 'audio/ogg',
  // 'audio/wav',
  // 'audio/webm',
  "video/mp4",
  "video/webm",
  "video/ogg"
  // Polices de Caractères
  // 'font/woff',
  // 'font/woff2',
  // 'font/ttf',
  // 'font/otf',
];
function isMimeTypeSupported(mimeType) {
  return SUPPORTED_MIME_TYPES.includes(mimeType);
}

// projects/c3-components/src/lib/c3-file-viewer/models/file-viewer.ts
var C3FileViewer = class {
  get config() {
    return this._config;
  }
  set config(value) {
    this._config = this.mergeConfig(DEFAULT_CONFIG, value);
    this.config$.next(this._config);
  }
  get currentFile() {
    return this.filesObjectUrl[this.currentIndex];
  }
  set files(newFiles) {
    this._files = newFiles;
    this.currentIndex = 0;
    this.index$.next(this.currentIndex);
    for (const file of newFiles) {
      this.filesObjectUrl.push(__spreadProps(__spreadValues({}, file), {
        objectUrl: file.objectUrl || this.createObjectURL(file)
      }));
      if (file.alternativeVersions)
        for (const alternativeVersion of file.alternativeVersions) {
          this.filesObjectUrl.push(__spreadProps(__spreadValues(__spreadValues({}, file), alternativeVersion), {
            objectUrl: this.createObjectURL(alternativeVersion)
          }));
        }
    }
  }
  get files() {
    return this._files;
  }
  constructor({ config, files, client }) {
    this._config = DEFAULT_CONFIG;
    this.config$ = new BehaviorSubject(DEFAULT_CONFIG);
    this.fullscreen$ = new BehaviorSubject(false);
    this.customFile$ = new BehaviorSubject(null);
    this.index$ = new BehaviorSubject(0);
    this.loading = true;
    this.currentIndex = 0;
    this.style = {
      transform: "",
      msTransform: "",
      oTransform: "",
      webkitTransform: "",
      minHeight: "auto",
      maxHeight: "auto",
      height: "auto",
      minWidth: "auto",
      maxWidth: "auto",
      width: "auto"
    };
    this.styleHeight = "100%";
    this.hovered = false;
    this._files = [];
    this.filesObjectUrl = [];
    this.locationBlobMap = /* @__PURE__ */ new Map();
    this.scale = 1;
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.prevX = 0;
    this.prevY = 0;
    if (config)
      this.config = config;
    if (client)
      this.client = client.get.bind(client);
    if (files)
      this.files = files;
    this.config$.subscribe((config2) => {
      const { minHeight, maxHeight, minWidth, maxWidth, height, width } = config2;
      this.style.minHeight = this.valueToCss(minHeight);
      this.style.height = this.valueToCss(height);
      this.style.width = this.valueToCss(width);
      this.style.maxHeight = this.valueToCss(maxHeight);
      this.style.minWidth = this.valueToCss(minWidth);
      this.style.maxWidth = this.valueToCss(maxWidth);
      this.styleHeight = this.valueToCss(height);
      this.updateStyle();
    });
  }
  createObjectURL(file) {
    this.onLoadStart();
    const fileType = isFileMetadata(file) ? file.type : file.contentType;
    if (!isMimeTypeSupported(fileType)) {
      this.onLoaded();
      return;
    }
    return of(file.location).pipe(mergeMap((location) => this.locationBlobMap.has(location) ? of(this.locationBlobMap.get(location)) : this.getFile(location).pipe(map((response) => URL.createObjectURL(response)), tap((url) => this.locationBlobMap.set(location, url)))), tap(() => this.onLoaded()));
  }
  /**
   * Encode une URL de manière sûre pour éviter les problèmes avec les caractères spéciaux
   * comme +, espaces, etc.
   * Cette fonction encode correctement les segments du chemin et les paramètres de requête.
   */
  encodeUrl(url) {
    try {
      if (!url.includes("://")) {
        const [path, query] = url.split("?");
        const encodedPath2 = path.split("/").map((segment) => segment ? encodeURIComponent(segment) : "").join("/");
        if (query) {
          const params = query.split("&");
          const encodedParams = params.map((param) => {
            const [key, ...valueParts] = param.split("=");
            const value = valueParts.join("=");
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          });
          return `${encodedPath2}?${encodedParams.join("&")}`;
        }
        return encodedPath2;
      }
      const urlObj = new URL(url);
      const encodedPath = urlObj.pathname.split("/").map((segment) => segment ? encodeURIComponent(segment) : "").join("/");
      const searchParams = new URLSearchParams();
      urlObj.searchParams.forEach((value, key) => {
        searchParams.append(key, value);
      });
      const encodedSearch = searchParams.toString() ? `?${searchParams.toString()}` : "";
      return `${urlObj.protocol}//${urlObj.host}${encodedPath}${encodedSearch}${urlObj.hash}`;
    } catch (e) {
      return encodeURI(url);
    }
  }
  getFile(location) {
    const client = this.config.customClient || this.client;
    if (!client) {
      throw new Error("No http client provided. Please provide a custom client or import HttpClientModule");
    }
    const encodedLocation = this.encodeUrl(location);
    return client(encodedLocation, {
      responseType: "blob"
    });
  }
  previousImage(event) {
    if (this.canNavigate(event)) {
      this.loading = true;
      if (this.currentIndex > 0)
        this.currentIndex--;
      else
        this.currentIndex = this.files.length - 1;
      this.index$.next(this.currentIndex);
      this.reset();
    }
  }
  nextImage(event) {
    if (this.canNavigate(event)) {
      this.loading = true;
      if (this.currentIndex < this.files.length - 1)
        this.currentIndex++;
      else
        this.currentIndex = 0;
      this.index$.next(this.currentIndex);
      this.reset();
    }
  }
  zoomIn() {
    this.scale *= 1 + (this.config.zoomFactor || 0);
    this.updateStyle();
  }
  zoomOut() {
    if (this.scale > (this.config.zoomFactor || 0)) {
      this.scale /= 1 + (this.config.zoomFactor || 0);
    }
    this.updateStyle();
  }
  scrollZoom(evt) {
    if (this.config.wheelZoom) {
      evt.deltaY > 0 ? this.zoomOut() : this.zoomIn();
      return false;
    } else {
      return true;
    }
  }
  rotateClockwise() {
    this.rotation += 90;
    this.updateStyle();
  }
  rotateCounterClockwise() {
    this.rotation -= 90;
    this.updateStyle();
  }
  onLoaded() {
    this.loading = false;
  }
  onLoadStart() {
    this.loading = true;
  }
  imageNotFound(file) {
    this.loading = false;
    this.customFile$.next(new CustomFileEvent("imageNotFound", file.location));
  }
  onDragOver(evt) {
    this.translateX += evt.clientX - this.prevX;
    this.translateY += evt.clientY - this.prevY;
    this.prevX = evt.clientX;
    this.prevY = evt.clientY;
    this.updateStyle();
  }
  onDragStart(evt) {
    if (evt.target && evt.dataTransfer && evt.dataTransfer.setDragImage) {
      const target = evt.target;
      const nextElementSibling = target.nextElementSibling;
      if (nextElementSibling)
        evt.dataTransfer.setDragImage(nextElementSibling, 0, 0);
    }
    this.prevX = evt.clientX;
    this.prevY = evt.clientY;
  }
  toggleFullscreen() {
    const fullScreenValue = this.fullscreen$.getValue();
    this.fullscreen$.next(!fullScreenValue);
    if (fullScreenValue)
      this.reset();
  }
  reset() {
    this.scale = 1;
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.updateStyle();
  }
  getOriginalName(file = this.currentFile) {
    return file.metadata?.["originalName"] || file.name;
  }
  canNavigate(event) {
    return event == null || this.config.allowKeyboardNavigation && this.hovered;
  }
  updateStyle() {
    this.style.transform = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`;
    this.style.msTransform = this.style.transform;
    this.style.webkitTransform = this.style.transform;
    this.style.oTransform = this.style.transform;
  }
  valueToCss(value) {
    return value ? typeof value === "string" ? value : value + "px" : "auto";
  }
  mergeConfig(defaultValues, overrideValues) {
    let result = __spreadValues({}, defaultValues);
    if (overrideValues) {
      result = __spreadValues(__spreadValues({}, defaultValues), overrideValues);
      if (overrideValues.btnIcons) {
        result.btnIcons = __spreadValues(__spreadValues({}, defaultValues.btnIcons), overrideValues.btnIcons);
      }
    }
    return result;
  }
  download(file = this.currentFile) {
    const client = this.config.customClient || this.client;
    const originalName = this.getOriginalName(file);
    if (file.objectUrl && this.locationBlobMap.has(file.location)) {
      const url = this.locationBlobMap.get(file.location);
      this.downloadFromUrl(url, originalName);
    } else if (client) {
      this.downloadWithClient(file, client, originalName);
    } else {
      console.error("No http client available for download");
    }
  }
  downloadFromUrl(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  downloadWithClient(file, client, originalName) {
    const encodedLocation = this.encodeUrl(file.location);
    client(encodedLocation, {
      responseType: "blob"
    }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        this.downloadFromUrl(url, originalName);
        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 1e3);
      },
      error: (error) => {
        console.error("Download failed:", error);
        const a = document.createElement("a");
        a.href = file.location;
        a.download = originalName;
        a.target = "_blank";
        a.click();
      }
    });
  }
};
function isFileMetadata(file) {
  return "type" in file;
}

// projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.ts
var _C3FileViewerDialog = class _C3FileViewerDialog {
  constructor(fileViewer) {
    this.fileViewer = fileViewer;
  }
};
_C3FileViewerDialog.\u0275fac = function C3FileViewerDialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_C3FileViewerDialog.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerDialog, selectors: [["ng-component"]], standalone: false, decls: 1, vars: 2, consts: [[3, "fileViewer", "screenHeightOccupied"]], template: function C3FileViewerDialog_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c3-file-viewer", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("fileViewer", ctx.fileViewer)("screenHeightOccupied", 0);
  }
}, dependencies: [C3FileViewerComponent], encapsulation: 2 });
var C3FileViewerDialog = _C3FileViewerDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerDialog, [{
    type: Component,
    args: [{
      template: `
    <c3-file-viewer [fileViewer]="fileViewer" [screenHeightOccupied]="0" />
  `,
      standalone: false
    }]
  }], () => [{ type: C3FileViewer, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerDialog, { className: "C3FileViewerDialog", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.ts", lineNumber: 11 });
})();

// projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.component.ts
var _c0 = ["*"];
var _C3FileViewerDialogComponent = class _C3FileViewerDialogComponent {
  constructor(_dialog) {
    this._dialog = _dialog;
    this.fileViewer = input.required(...ngDevMode ? [{ debugName: "fileViewer" }] : []);
    this.dialogConfig = input({
      panelClass: "c3-file-viewer-dialog",
      width: "80%",
      height: "80%"
    }, ...ngDevMode ? [{ debugName: "dialogConfig" }] : []);
  }
  openDialog() {
    this._dialog.open(C3FileViewerDialog, __spreadValues({
      data: this.fileViewer()
    }, this.dialogConfig()));
  }
};
_C3FileViewerDialogComponent.\u0275fac = function C3FileViewerDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerDialogComponent)(\u0275\u0275directiveInject(MatDialog));
};
_C3FileViewerDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3FileViewerDialogComponent, selectors: [["c3-file-viewer-dialog"]], hostAttrs: [1, "c3-file-viewer-dialog"], hostBindings: function C3FileViewerDialogComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function C3FileViewerDialogComponent_click_HostBindingHandler() {
      return ctx.openDialog();
    });
  }
}, inputs: { fileViewer: [1, "fileViewer"], dialogConfig: [1, "dialogConfig"] }, standalone: false, ngContentSelectors: _c0, decls: 1, vars: 0, template: function C3FileViewerDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
  }
}, encapsulation: 2 });
var C3FileViewerDialogComponent = _C3FileViewerDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerDialogComponent, [{
    type: Component,
    args: [{
      selector: "c3-file-viewer-dialog",
      template: ` <ng-content /> `,
      host: {
        class: "c3-file-viewer-dialog"
      },
      standalone: false
    }]
  }], () => [{ type: MatDialog }], { fileViewer: [{ type: Input, args: [{ isSignal: true, alias: "fileViewer", required: true }] }], dialogConfig: [{ type: Input, args: [{ isSignal: true, alias: "dialogConfig", required: false }] }], openDialog: [{
    type: HostListener,
    args: ["click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3FileViewerDialogComponent, { className: "C3FileViewerDialogComponent", filePath: "projects/c3-components/src/lib/c3-file-viewer/components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.component.ts", lineNumber: 14 });
})();

// projects/c3-components/src/lib/c3-file-viewer/c3-file-viewer.module.ts
var _C3FileViewerModule = class _C3FileViewerModule {
};
_C3FileViewerModule.\u0275fac = function C3FileViewerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3FileViewerModule)();
};
_C3FileViewerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _C3FileViewerModule });
_C3FileViewerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [provideHttpClient(withInterceptorsFromDi())], imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule] });
var C3FileViewerModule = _C3FileViewerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3FileViewerModule, [{
    type: NgModule,
    args: [{
      declarations: [
        FullScreenDirective,
        C3FileViewerComponent,
        C3FileViewerActionsComponent,
        C3FileViewerImageComponent,
        C3FileViewerPdfComponent,
        C3FileViewerVideoComponent,
        C3FileViewerDialogComponent,
        C3FileViewerDialog,
        C3FileViewerDefaultComponent
      ],
      exports: [FullScreenDirective, C3FileViewerComponent, C3FileViewerDialogComponent],
      imports: [CommonModule, C3SafeUrlPipe, MatDialogModule, MatIconModule, MatButtonModule],
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/files-demo.ts
var crabbyImgs = [
  {
    name: "123645-Crabby - 1",
    metadata: {
      originalName: "Crabby - 1"
    },
    type: "image/png",
    location: "img/crabby-1.png",
    lastModified: /* @__PURE__ */ new Date()
  },
  {
    name: "123645-Crabby - 2",
    metadata: {
      originalName: "Crabby - 2"
    },
    type: "image/jpeg",
    location: "img/crabby+2.jpeg",
    lastModified: /* @__PURE__ */ new Date()
  },
  {
    name: "123645-Crabby - 3",
    metadata: {
      originalName: "Crabby - 3"
    },
    type: "image/png",
    location: "img/crabby-3.png",
    lastModified: /* @__PURE__ */ new Date()
  },
  {
    name: "123645-Crabby - 4",
    metadata: {
      originalName: "Crabby - 4"
    },
    type: "image/png",
    location: "img/crabby-4.png",
    lastModified: /* @__PURE__ */ new Date()
  },
  {
    name: "123645-Crabby - 5",
    metadata: {
      originalName: "Crabby - 5"
    },
    type: "image/png",
    location: "img/crabby-5.png"
  },
  {
    name: "123645-Crabby - 6",
    metadata: {
      originalName: "Crabby - 6"
    },
    type: "image/png",
    location: "img/crabby-6.png"
  },
  {
    name: "123645-PDF",
    metadata: {
      originalName: "PDF.pdf"
    },
    type: "application/pdf",
    location: "img/r.pdf"
  },
  {
    location: "zip/test.zip",
    type: "application/zip",
    name: "chelou-test.zip",
    metadata: {
      originalName: "test.zip"
    }
  },
  {
    location: "video/Crabe_ZZ_Top.mp4",
    type: "video/mp4",
    name: "Crabe_ZZ_Top.mp4",
    metadata: {
      originalName: "Crabe_ZZ_Top.mp4"
    }
  },
  {
    location: "https://upload.wikimedia.org/wikipedia/commons/7/79/Terminator_in_Madame_Tussaud_London_%2833465711484%29.jpg",
    type: "image/jpeg",
    name: "Terminator_in_Madame_Tussaud_London.jpg",
    metadata: {
      originalName: "Terminator_in_Madame_Tussaud_London.jpg"
    }
  }
];
var configDemo = {
  btnContainerClass: "other",
  btnClass: "btn btn-hover-primary px-1",
  btnSubClass: "material-icons font-size-xl",
  zoomFactor: 0.1,
  wheelZoom: true,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  height: "640px",
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: false,
    prev: false,
    reset: true,
    download: true
  },
  btnIcons: {
    next: {
      text: "navigate_next"
    },
    prev: {
      text: "navigate_before"
    }
  },
  customBtns: []
};

export {
  C3FileViewerComponent,
  C3FileViewer,
  C3FileViewerDialogComponent,
  C3FileViewerModule,
  crabbyImgs,
  configDemo
};
//# sourceMappingURL=chunk-CL4RYOMT.js.map

import {
  FormsModule,
  NgModel
} from "./chunk-PSEOTE3Z.js";
import {
  DOCUMENT,
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵstyleProp
} from "./chunk-MBD4SKAO.js";

// node_modules/ngx-highlight-js/fesm2022/ngx-highlight-js.mjs
var HIGHLIGHTJS_CONFIG = new InjectionToken("HighlightJs-Config");
var _HighlightJsDirective = class _HighlightJsDirective {
  constructor(el, ngModel, doc, cog, ngZone) {
    this.el = el;
    this.ngModel = ngModel;
    this.doc = doc;
    this.ngZone = ngZone;
    this.lang = "html";
    this.mode = "simple";
    Object.assign(this, cog);
  }
  escapeHTML(str) {
    return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  init() {
    this.ngZone.runOutsideAngular(() => {
      this.destroy();
      const el = this.el.nativeElement;
      const code = this.code || "" + el.innerHTML.trim();
      const doc = this.doc;
      this.codeEl = doc.createElement(this.mode === "default" ? "div" : "pre");
      if (this.codeEl == null) return;
      const isSimple = this.mode === "simple";
      if (isSimple) {
        if (this.lang) {
          this.codeEl.className = this.lang;
        }
        this.parentEl = el.parentNode;
        this.parentEl.insertBefore(this.codeEl, el.nextSibling);
      } else {
        this.parentEl = el;
        this.parentEl.innerHTML = ``;
        this.parentEl.appendChild(this.codeEl);
      }
      this.codeEl.innerHTML = code;
      const hljs = doc.defaultView.hljs;
      if (hljs == null) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(`Can't find hljs under window`);
        }
        return;
      }
      hljs.configure(__spreadValues({}, this.options));
      if (isSimple) {
        hljs.highlightElement(this.codeEl);
      } else {
        this.codeEl.querySelectorAll("pre code").forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    });
  }
  destroy() {
    if (this.codeEl && this.parentEl) {
      this.parentEl.removeChild(this.codeEl);
      this.codeEl = void 0;
    }
  }
  ngAfterViewInit() {
    this.init();
    if (this.ngModel) {
      this.modelValue$ = this.ngModel.valueChanges?.subscribe((res) => {
        this.code = this.escapeHTML(res);
        this.init();
      });
    } else {
      this.initMutation();
    }
  }
  ngOnDestroy() {
    this.destroy();
    this.observer?.disconnect();
    this.modelValue$?.unsubscribe();
  }
  initMutation() {
    if (typeof MutationObserver === "undefined") {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.observer = new MutationObserver(this.init.bind(this));
      this.observer.observe(this.el.nativeElement, {
        characterData: true,
        childList: true,
        subtree: true
      });
    });
  }
};
_HighlightJsDirective.\u0275fac = function HighlightJsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightJsDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgModel, 8), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(HIGHLIGHTJS_CONFIG, 8), \u0275\u0275directiveInject(NgZone));
};
_HighlightJsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HighlightJsDirective,
  selectors: [["", "highlight-js", ""]],
  hostVars: 2,
  hostBindings: function HighlightJsDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.mode === "simple" ? "none" : null);
    }
  },
  inputs: {
    options: "options",
    lang: "lang",
    code: "code",
    mode: "mode"
  },
  exportAs: ["highlightJs"]
});
var HighlightJsDirective = _HighlightJsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightJsDirective, [{
    type: Directive,
    args: [{
      selector: "[highlight-js]",
      host: {
        "[style.display]": `mode === 'simple' ? 'none' : null`
      },
      exportAs: "highlightJs",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HIGHLIGHTJS_CONFIG]
    }]
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    lang: [{
      type: Input
    }],
    code: [{
      type: Input
    }],
    mode: [{
      type: Input
    }]
  });
})();
var DIRECTIVES = [HighlightJsDirective];
var _HighlightJsModule = class _HighlightJsModule {
};
_HighlightJsModule.\u0275fac = function HighlightJsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightJsModule)();
};
_HighlightJsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _HighlightJsModule,
  imports: [FormsModule, HighlightJsDirective],
  exports: [HighlightJsDirective]
});
_HighlightJsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [FormsModule]
});
var HighlightJsModule = _HighlightJsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightJsModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ...DIRECTIVES],
      exports: DIRECTIVES
    }]
  }], null, null);
})();

export {
  HighlightJsDirective,
  HighlightJsModule
};
//# sourceMappingURL=chunk-CP5TLJ4H.js.map

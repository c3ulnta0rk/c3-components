import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-M3WS2NE6.js";
import {
  MatButtonModule,
  MatIconButton,
  MatTooltip,
  MatTooltipModule
} from "./chunk-HJOU2AGX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-XOJCRGWO.js";
import {
  CommonModule,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-DXGZR3PZ.js";
import {
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __async,
  __spreadValues,
  contentChildren,
  forwardRef,
  inject,
  input,
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
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵdomTemplate,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-PMKCWKFR.js";

// node_modules/@formkit/auto-animate/index.mjs
var parents = /* @__PURE__ */ new Set();
var coords = /* @__PURE__ */ new WeakMap();
var siblings = /* @__PURE__ */ new WeakMap();
var animations = /* @__PURE__ */ new WeakMap();
var intersections = /* @__PURE__ */ new WeakMap();
var intervals = /* @__PURE__ */ new WeakMap();
var options = /* @__PURE__ */ new WeakMap();
var debounces = /* @__PURE__ */ new WeakMap();
var enabled = /* @__PURE__ */ new WeakSet();
var root;
var scrollX = 0;
var scrollY = 0;
var TGT = "__aa_tgt";
var DEL = "__aa_del";
var NEW = "__aa_new";
var handleMutations = (mutations2) => {
  const elements = getElements(mutations2);
  if (elements) {
    elements.forEach((el) => animate(el));
  }
};
var handleResizes = (entries) => {
  entries.forEach((entry) => {
    if (entry.target === root)
      updateAllPos();
    if (coords.has(entry.target))
      updatePos(entry.target);
  });
};
function observePosition(el) {
  const oldObserver = intersections.get(el);
  oldObserver === null || oldObserver === void 0 ? void 0 : oldObserver.disconnect();
  let rect = coords.get(el);
  let invocations = 0;
  const buffer = 5;
  if (!rect) {
    rect = getCoords(el);
    coords.set(el, rect);
  }
  const { offsetWidth, offsetHeight } = root;
  const rootMargins = [
    rect.top - buffer,
    offsetWidth - (rect.left + buffer + rect.width),
    offsetHeight - (rect.top + buffer + rect.height),
    rect.left - buffer
  ];
  const rootMargin = rootMargins.map((px) => `${-1 * Math.floor(px)}px`).join(" ");
  const observer = new IntersectionObserver(() => {
    ++invocations > 1 && updatePos(el);
  }, {
    root,
    threshold: 1,
    rootMargin
  });
  observer.observe(el);
  intersections.set(el, observer);
}
function updatePos(el) {
  clearTimeout(debounces.get(el));
  const optionsOrPlugin = getOptions(el);
  const delay = isPlugin(optionsOrPlugin) ? 500 : optionsOrPlugin.duration;
  debounces.set(el, setTimeout(() => __async(null, null, function* () {
    const currentAnimation = animations.get(el);
    try {
      yield currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.finished;
      coords.set(el, getCoords(el));
      observePosition(el);
    } catch {
    }
  }), delay));
}
function updateAllPos() {
  clearTimeout(debounces.get(root));
  debounces.set(root, setTimeout(() => {
    parents.forEach((parent) => forEach(parent, (el) => lowPriority(() => updatePos(el))));
  }, 100));
}
function poll(el) {
  setTimeout(() => {
    intervals.set(el, setInterval(() => lowPriority(updatePos.bind(null, el)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function lowPriority(callback) {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(() => callback());
  } else {
    requestAnimationFrame(() => callback());
  }
}
var mutations;
var resize;
var supportedBrowser = typeof window !== "undefined" && "ResizeObserver" in window;
if (supportedBrowser) {
  root = document.documentElement;
  mutations = new MutationObserver(handleMutations);
  resize = new ResizeObserver(handleResizes);
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    scrollX = window.scrollX;
  });
  resize.observe(root);
}
function getElements(mutations2) {
  const observedNodes = mutations2.reduce((nodes, mutation) => {
    return [
      ...nodes,
      ...Array.from(mutation.addedNodes),
      ...Array.from(mutation.removedNodes)
    ];
  }, []);
  const onlyCommentNodesObserved = observedNodes.every((node) => node.nodeName === "#comment");
  if (onlyCommentNodesObserved)
    return false;
  return mutations2.reduce((elements, mutation) => {
    if (elements === false)
      return false;
    if (mutation.target instanceof Element) {
      target(mutation.target);
      if (!elements.has(mutation.target)) {
        elements.add(mutation.target);
        for (let i = 0; i < mutation.target.children.length; i++) {
          const child = mutation.target.children.item(i);
          if (!child)
            continue;
          if (DEL in child) {
            return false;
          }
          target(mutation.target, child);
          elements.add(child);
        }
      }
      if (mutation.removedNodes.length) {
        for (let i = 0; i < mutation.removedNodes.length; i++) {
          const child = mutation.removedNodes[i];
          if (DEL in child) {
            return false;
          }
          if (child instanceof Element) {
            elements.add(child);
            target(mutation.target, child);
            siblings.set(child, [
              mutation.previousSibling,
              mutation.nextSibling
            ]);
          }
        }
      }
    }
    return elements;
  }, /* @__PURE__ */ new Set());
}
function target(el, child) {
  if (!child && !(TGT in el))
    Object.defineProperty(el, TGT, { value: el });
  else if (child && !(TGT in child))
    Object.defineProperty(child, TGT, { value: el });
}
function animate(el) {
  var _a;
  const isMounted = el.isConnected;
  const preExisting = coords.has(el);
  if (isMounted && siblings.has(el))
    siblings.delete(el);
  if (animations.has(el)) {
    (_a = animations.get(el)) === null || _a === void 0 ? void 0 : _a.cancel();
  }
  if (NEW in el) {
    add(el);
  } else if (preExisting && isMounted) {
    remain(el);
  } else if (preExisting && !isMounted) {
    remove(el);
  } else {
    add(el);
  }
}
function raw(str) {
  return Number(str.replace(/[^0-9.\-]/g, ""));
}
function getScrollOffset(el) {
  let p = el.parentElement;
  while (p) {
    if (p.scrollLeft || p.scrollTop) {
      return { x: p.scrollLeft, y: p.scrollTop };
    }
    p = p.parentElement;
  }
  return { x: 0, y: 0 };
}
function getCoords(el) {
  const rect = el.getBoundingClientRect();
  const { x, y } = getScrollOffset(el);
  return {
    top: rect.top + y,
    left: rect.left + x,
    width: rect.width,
    height: rect.height
  };
}
function getTransitionSizes(el, oldCoords, newCoords) {
  let widthFrom = oldCoords.width;
  let heightFrom = oldCoords.height;
  let widthTo = newCoords.width;
  let heightTo = newCoords.height;
  const styles = getComputedStyle(el);
  const sizing = styles.getPropertyValue("box-sizing");
  if (sizing === "content-box") {
    const paddingY = raw(styles.paddingTop) + raw(styles.paddingBottom) + raw(styles.borderTopWidth) + raw(styles.borderBottomWidth);
    const paddingX = raw(styles.paddingLeft) + raw(styles.paddingRight) + raw(styles.borderRightWidth) + raw(styles.borderLeftWidth);
    widthFrom -= paddingX;
    widthTo -= paddingX;
    heightFrom -= paddingY;
    heightTo -= paddingY;
  }
  return [widthFrom, widthTo, heightFrom, heightTo].map(Math.round);
}
function getOptions(el) {
  return TGT in el && options.has(el[TGT]) ? options.get(el[TGT]) : { duration: 250, easing: "ease-in-out" };
}
function getTarget(el) {
  if (TGT in el)
    return el[TGT];
  return void 0;
}
function isEnabled(el) {
  const target2 = getTarget(el);
  return target2 ? enabled.has(target2) : false;
}
function forEach(parent, ...callbacks) {
  callbacks.forEach((callback) => callback(parent, options.has(parent)));
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children.item(i);
    if (child) {
      callbacks.forEach((callback) => callback(child, options.has(child)));
    }
  }
}
function getPluginTuple(pluginReturn) {
  if (Array.isArray(pluginReturn))
    return pluginReturn;
  return [pluginReturn];
}
function isPlugin(config) {
  return typeof config === "function";
}
function remain(el) {
  const oldCoords = coords.get(el);
  const newCoords = getCoords(el);
  if (!isEnabled(el))
    return coords.set(el, newCoords);
  let animation;
  if (!oldCoords)
    return;
  const pluginOrOptions = getOptions(el);
  if (typeof pluginOrOptions !== "function") {
    const deltaX = oldCoords.left - newCoords.left;
    const deltaY = oldCoords.top - newCoords.top;
    const [widthFrom, widthTo, heightFrom, heightTo] = getTransitionSizes(el, oldCoords, newCoords);
    const start = {
      transform: `translate(${deltaX}px, ${deltaY}px)`
    };
    const end = {
      transform: `translate(0, 0)`
    };
    if (widthFrom !== widthTo) {
      start.width = `${widthFrom}px`;
      end.width = `${widthTo}px`;
    }
    if (heightFrom !== heightTo) {
      start.height = `${heightFrom}px`;
      end.height = `${heightTo}px`;
    }
    animation = el.animate([start, end], {
      duration: pluginOrOptions.duration,
      easing: pluginOrOptions.easing
    });
  } else {
    const [keyframes] = getPluginTuple(pluginOrOptions(el, "remain", oldCoords, newCoords));
    animation = new Animation(keyframes);
    animation.play();
  }
  animations.set(el, animation);
  coords.set(el, newCoords);
  animation.addEventListener("finish", updatePos.bind(null, el));
}
function add(el) {
  if (NEW in el)
    delete el[NEW];
  const newCoords = getCoords(el);
  coords.set(el, newCoords);
  const pluginOrOptions = getOptions(el);
  if (!isEnabled(el))
    return;
  let animation;
  if (typeof pluginOrOptions !== "function") {
    animation = el.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: pluginOrOptions.duration * 1.5,
      easing: "ease-in"
    });
  } else {
    const [keyframes] = getPluginTuple(pluginOrOptions(el, "add", newCoords));
    animation = new Animation(keyframes);
    animation.play();
  }
  animations.set(el, animation);
  animation.addEventListener("finish", updatePos.bind(null, el));
}
function cleanUp(el, styles) {
  var _a;
  el.remove();
  coords.delete(el);
  siblings.delete(el);
  animations.delete(el);
  (_a = intersections.get(el)) === null || _a === void 0 ? void 0 : _a.disconnect();
  setTimeout(() => {
    if (DEL in el)
      delete el[DEL];
    Object.defineProperty(el, NEW, { value: true, configurable: true });
    if (styles && el instanceof HTMLElement) {
      for (const style in styles) {
        el.style[style] = "";
      }
    }
  }, 0);
}
function remove(el) {
  var _a;
  if (!siblings.has(el) || !coords.has(el))
    return;
  const [prev, next] = siblings.get(el);
  Object.defineProperty(el, DEL, { value: true, configurable: true });
  const finalX = window.scrollX;
  const finalY = window.scrollY;
  if (next && next.parentNode && next.parentNode instanceof Element) {
    next.parentNode.insertBefore(el, next);
  } else if (prev && prev.parentNode) {
    prev.parentNode.appendChild(el);
  } else {
    (_a = getTarget(el)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
  }
  if (!isEnabled(el))
    return cleanUp(el);
  const [top, left, width, height] = deletePosition(el);
  const optionsOrPlugin = getOptions(el);
  const oldCoords = coords.get(el);
  if (finalX !== scrollX || finalY !== scrollY) {
    adjustScroll(el, finalX, finalY, optionsOrPlugin);
  }
  let animation;
  let styleReset = {
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!isPlugin(optionsOrPlugin)) {
    Object.assign(el.style, styleReset);
    animation = el.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], { duration: optionsOrPlugin.duration, easing: "ease-out" });
  } else {
    const [keyframes, options2] = getPluginTuple(optionsOrPlugin(el, "remove", oldCoords));
    if ((options2 === null || options2 === void 0 ? void 0 : options2.styleReset) !== false) {
      styleReset = (options2 === null || options2 === void 0 ? void 0 : options2.styleReset) || styleReset;
      Object.assign(el.style, styleReset);
    }
    animation = new Animation(keyframes);
    animation.play();
  }
  animations.set(el, animation);
  animation.addEventListener("finish", cleanUp.bind(null, el, styleReset));
}
function adjustScroll(el, finalX, finalY, optionsOrPlugin) {
  const scrollDeltaX = scrollX - finalX;
  const scrollDeltaY = scrollY - finalY;
  const scrollBefore = document.documentElement.style.scrollBehavior;
  const scrollBehavior = getComputedStyle(root).scrollBehavior;
  if (scrollBehavior === "smooth") {
    document.documentElement.style.scrollBehavior = "auto";
  }
  window.scrollTo(window.scrollX + scrollDeltaX, window.scrollY + scrollDeltaY);
  if (!el.parentElement)
    return;
  const parent = el.parentElement;
  let lastHeight = parent.clientHeight;
  let lastWidth = parent.clientWidth;
  const startScroll = performance.now();
  function smoothScroll() {
    requestAnimationFrame(() => {
      if (!isPlugin(optionsOrPlugin)) {
        const deltaY = lastHeight - parent.clientHeight;
        const deltaX = lastWidth - parent.clientWidth;
        if (startScroll + optionsOrPlugin.duration > performance.now()) {
          window.scrollTo({
            left: window.scrollX - deltaX,
            top: window.scrollY - deltaY
          });
          lastHeight = parent.clientHeight;
          lastWidth = parent.clientWidth;
          smoothScroll();
        } else {
          document.documentElement.style.scrollBehavior = scrollBefore;
        }
      }
    });
  }
  smoothScroll();
}
function deletePosition(el) {
  const oldCoords = coords.get(el);
  const [width, , height] = getTransitionSizes(el, oldCoords, getCoords(el));
  let offsetParent = el.parentElement;
  while (offsetParent && (getComputedStyle(offsetParent).position === "static" || offsetParent instanceof HTMLBodyElement)) {
    offsetParent = offsetParent.parentElement;
  }
  if (!offsetParent)
    offsetParent = document.body;
  const parentStyles = getComputedStyle(offsetParent);
  const parentCoords = coords.get(offsetParent) || getCoords(offsetParent);
  const top = Math.round(oldCoords.top - parentCoords.top) - raw(parentStyles.borderTopWidth);
  const left = Math.round(oldCoords.left - parentCoords.left) - raw(parentStyles.borderLeftWidth);
  return [top, left, width, height];
}
function autoAnimate(el, config = {}) {
  if (mutations && resize) {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isDisabledDueToReduceMotion = mediaQuery.matches && !isPlugin(config) && !config.disrespectUserMotionPreference;
    if (!isDisabledDueToReduceMotion) {
      enabled.add(el);
      if (getComputedStyle(el).position === "static") {
        Object.assign(el.style, { position: "relative" });
      }
      forEach(el, updatePos, poll, (element) => resize === null || resize === void 0 ? void 0 : resize.observe(element));
      if (isPlugin(config)) {
        options.set(el, config);
      } else {
        options.set(el, __spreadValues({ duration: 250, easing: "ease-in-out" }, config));
      }
      mutations.observe(el, { childList: true });
      parents.add(el);
    }
  }
  return Object.freeze({
    parent: el,
    enable: () => {
      enabled.add(el);
    },
    disable: () => {
      enabled.delete(el);
    },
    isEnabled: () => enabled.has(el)
  });
}

// projects/c3-components/src/lib/c3-auto-animate/c3-auto-animate.directive.ts
var _C3AutoAnimateDirective = class _C3AutoAnimateDirective {
  constructor(el) {
    this.el = el;
    this.options = input(void 0, ...ngDevMode ? [{ debugName: "options" }] : []);
  }
  ngAfterViewInit() {
    autoAnimate(this.el.nativeElement, this.options());
  }
};
_C3AutoAnimateDirective.\u0275fac = function C3AutoAnimateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3AutoAnimateDirective)(\u0275\u0275directiveInject(ElementRef));
};
_C3AutoAnimateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _C3AutoAnimateDirective, selectors: [["", "c3AutoAnimate", ""]], inputs: { options: [1, "options"] } });
var C3AutoAnimateDirective = _C3AutoAnimateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3AutoAnimateDirective, [{
    type: Directive,
    args: [{
      selector: "[c3AutoAnimate]",
      standalone: true
    }]
  }], () => [{ type: ElementRef }], { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }] });
})();

// projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component.ts
var _c0 = ["c3ExampleViewerTab", ""];
var _c1 = ["*"];
function ExampleViewerTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _ExampleViewerTabComponent = class _ExampleViewerTabComponent {
  constructor() {
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
    this.template = viewChild(TemplateRef, ...ngDevMode ? [{ debugName: "template" }] : []);
  }
};
_ExampleViewerTabComponent.\u0275fac = function ExampleViewerTabComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleViewerTabComponent)();
};
_ExampleViewerTabComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleViewerTabComponent, selectors: [["", "c3ExampleViewerTab", ""], ["c3-example-viewer-tab"]], viewQuery: function ExampleViewerTabComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.template, TemplateRef, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { label: [1, "label"] }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ExampleViewerTabComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275domTemplate(0, ExampleViewerTabComponent_ng_template_0_Template, 1, 0, "ng-template");
  }
}, encapsulation: 2 });
var ExampleViewerTabComponent = _ExampleViewerTabComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleViewerTabComponent, [{
    type: Component,
    args: [{
      selector: "[c3ExampleViewerTab], c3-example-viewer-tab",
      standalone: true,
      imports: [],
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], template: [{ type: ViewChild, args: [forwardRef(() => TemplateRef), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleViewerTabComponent, { className: "ExampleViewerTabComponent", filePath: "projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component.ts", lineNumber: 20 });
})();

// projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component.ts
var _c02 = [[["", "title", ""]], [["", "example", ""]]];
var _c12 = ["[title]", "[example]"];
function ExampleViewerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ExampleViewerComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyCode());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.copied() ? "Copied!" : "Copy code");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.copied() ? "check" : "content_copy");
  }
}
function ExampleViewerComponent_Conditional_11_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 9)(1, "div", 10);
    \u0275\u0275elementContainer(2, 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("label", tab_r4.label());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", tab_r4.template());
  }
}
function ExampleViewerComponent_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExampleViewerComponent_Conditional_11_For_3_Conditional_0_Template, 3, 2, "mat-tab", 9);
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275conditional(tab_r4.template() ? 0 : -1);
  }
}
function ExampleViewerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-tab-group", 8);
    \u0275\u0275listener("selectedIndexChange", function ExampleViewerComponent_Conditional_11_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275repeaterCreate(2, ExampleViewerComponent_Conditional_11_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tabs());
  }
}
var _ExampleViewerComponent = class _ExampleViewerComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.tabs = contentChildren(ExampleViewerTabComponent, ...ngDevMode ? [{ debugName: "tabs" }] : []);
    this.sourceView = signal(false, ...ngDevMode ? [{ debugName: "sourceView" }] : []);
    this.copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : []);
    this.selectedTabIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedTabIndex" }] : []);
  }
  toggleSourceView() {
    this.sourceView.update((v) => !v);
  }
  copyCode() {
    return __async(this, null, function* () {
      if (!isPlatformBrowser(this.platformId))
        return;
      const tabs = this.tabs();
      const selectedTab = tabs[this.selectedTabIndex()];
      if (selectedTab) {
        const templateElement = selectedTab.template();
        if (templateElement) {
          const tempContainer = document.createElement("div");
          const embeddedView = templateElement.createEmbeddedView({});
          embeddedView.detectChanges();
          let codeContent = "";
          embeddedView.rootNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const textarea = node.querySelector("textarea");
              const code = node.querySelector("code, pre");
              if (textarea) {
                codeContent = textarea.value || textarea.textContent || "";
              } else if (code) {
                codeContent = code.textContent || "";
              } else {
                codeContent = node.textContent || "";
              }
            }
          });
          embeddedView.destroy();
          if (codeContent.trim()) {
            try {
              yield navigator.clipboard.writeText(codeContent.trim());
              this.copied.set(true);
              setTimeout(() => this.copied.set(false), 2e3);
            } catch (err) {
              console.error("Failed to copy:", err);
            }
          }
        }
      }
    });
  }
  onTabChange(index) {
    this.selectedTabIndex.set(index);
  }
};
_ExampleViewerComponent.\u0275fac = function ExampleViewerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleViewerComponent)();
};
_ExampleViewerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleViewerComponent, selectors: [["example-viewer"]], contentQueries: function ExampleViewerComponent_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuerySignal(dirIndex, ctx.tabs, ExampleViewerTabComponent, 4);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostAttrs: [1, "example-viewer"], ngContentSelectors: _c12, decls: 12, vars: 5, consts: [[1, "example-viewer-card"], [1, "example-header"], [1, "example-title"], [1, "example-actions"], ["mat-icon-button", "", 1, "action-btn", 3, "matTooltip"], ["mat-icon-button", "", 1, "action-btn", 3, "click", "matTooltip"], ["c3AutoAnimate", "", 1, "example-preview"], [1, "example-source", "animate-fadeInUp"], ["dynamicHeight", "", "animationDuration", "200ms", 3, "selectedIndexChange"], [3, "label"], [1, "code-container"], [3, "ngTemplateOutlet"]], template: function ExampleViewerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c02);
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, ExampleViewerComponent_Conditional_5_Template, 3, 2, "button", 4);
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ExampleViewerComponent_Template_button_click_6_listener() {
      return ctx.toggleSourceView();
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "code");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275projection(10, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ExampleViewerComponent_Conditional_11_Template, 4, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.sourceView() && ctx.tabs().length > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.sourceView());
    \u0275\u0275property("matTooltip", ctx.sourceView() ? "Hide code" : "View code");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.sourceView() && ctx.tabs().length > 0 ? 11 : -1);
  }
}, dependencies: [
  CommonModule,
  NgTemplateOutlet,
  C3AutoAnimateDirective,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  MatButtonModule,
  MatIconButton,
  MatIconModule,
  MatIcon,
  MatTooltipModule,
  MatTooltip
], styles: ["/* projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component.scss */\n.example-viewer {\n  display: block;\n  margin-bottom: 2rem;\n}\n.example-viewer-card {\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.example-viewer-card:hover {\n  border-color: var(--border-color-hover);\n}\n.example-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--surface-elevated);\n  border-bottom: 1px solid var(--border-color);\n}\n.example-title {\n  font-family: var(--font-heading);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.example-title h1,\n.example-title h2,\n.example-title h3,\n.example-title h4,\n.example-title h5,\n.example-title h6 {\n  margin: 0;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.example-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.action-btn {\n  color: var(--text-muted);\n  transition: all var(--transition-fast);\n}\n.action-btn:hover {\n  color: var(--text-primary);\n  background: var(--sidebar-link-hover);\n}\n.action-btn.active {\n  color: var(--c3-primary);\n  background: var(--sidebar-link-active);\n}\n.action-btn .mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.example-preview {\n  padding: 1.5rem;\n  background: var(--surface-page);\n}\n.example-preview > *:last-child {\n  margin-bottom: 0;\n}\n.example-source {\n  border-top: 1px solid var(--border-color);\n  background: var(--code-bg);\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab-header {\n  background: rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab {\n  color: var(--code-text) !important;\n  opacity: 0.7;\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab.mdc-tab--active {\n  opacity: 1;\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab-body-wrapper {\n  background: var(--code-bg);\n}\n.example-source .mat-mdc-tab-group .mdc-tab-indicator__content--underline {\n  border-color: var(--c3-primary) !important;\n}\n.code-container {\n  padding: 0;\n}\n.code-container pre,\n.code-container textarea {\n  margin: 0;\n  padding: 1rem;\n  background: transparent !important;\n  color: var(--code-text);\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  line-height: 1.6;\n  white-space: pre;\n  overflow-x: auto;\n  border: none;\n  resize: none;\n  width: 100%;\n}\n.code-container pre:focus,\n.code-container textarea:focus {\n  outline: none;\n}\n.code-container .hljs {\n  background: transparent !important;\n  padding: 1rem;\n}\n.animate-fadeInUp {\n  animation: fadeInUp 0.2s ease-out;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 640px) {\n  .example-preview {\n    padding: 1rem;\n  }\n  .code-container pre,\n  .code-container textarea {\n    font-size: var(--text-xs);\n  }\n}\n/*# sourceMappingURL=example-viewer.component.css.map */\n"], encapsulation: 2 });
var ExampleViewerComponent = _ExampleViewerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleViewerComponent, [{
    type: Component,
    args: [{ selector: "example-viewer", standalone: true, imports: [
      CommonModule,
      C3AutoAnimateDirective,
      MatTabsModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule
    ], encapsulation: ViewEncapsulation.None, host: {
      class: "example-viewer"
    }, template: `<div class="example-viewer-card">
  <!-- Header -->
  <div class="example-header">
    <div class="example-title">
      <ng-content select="[title]"></ng-content>
    </div>
    <div class="example-actions">
      @if (sourceView() && tabs().length > 0) {
        <button
          mat-icon-button
          class="action-btn"
          (click)="copyCode()"
          [matTooltip]="copied() ? 'Copied!' : 'Copy code'"
        >
          <mat-icon>{{ copied() ? 'check' : 'content_copy' }}</mat-icon>
        </button>
      }
      <button
        mat-icon-button
        class="action-btn"
        (click)="toggleSourceView()"
        [matTooltip]="sourceView() ? 'Hide code' : 'View code'"
        [class.active]="sourceView()"
      >
        <mat-icon>code</mat-icon>
      </button>
    </div>
  </div>

  <!-- Example Preview -->
  <div class="example-preview" c3AutoAnimate>
    <ng-content select="[example]"></ng-content>
  </div>

  <!-- Source Code -->
  @if (sourceView() && tabs().length > 0) {
    <div class="example-source animate-fadeInUp">
      <mat-tab-group
        dynamicHeight
        animationDuration="200ms"
        (selectedIndexChange)="onTabChange($event)"
      >
        @for (tab of tabs(); track $index) {
          @if (tab.template()) {
            <mat-tab [label]="tab.label()">
              <div class="code-container">
                <ng-container [ngTemplateOutlet]="tab.template()!"></ng-container>
              </div>
            </mat-tab>
          }
        }
      </mat-tab-group>
    </div>
  }
</div>
`, styles: ["/* projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component.scss */\n.example-viewer {\n  display: block;\n  margin-bottom: 2rem;\n}\n.example-viewer-card {\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.example-viewer-card:hover {\n  border-color: var(--border-color-hover);\n}\n.example-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--surface-elevated);\n  border-bottom: 1px solid var(--border-color);\n}\n.example-title {\n  font-family: var(--font-heading);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.example-title h1,\n.example-title h2,\n.example-title h3,\n.example-title h4,\n.example-title h5,\n.example-title h6 {\n  margin: 0;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.example-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.action-btn {\n  color: var(--text-muted);\n  transition: all var(--transition-fast);\n}\n.action-btn:hover {\n  color: var(--text-primary);\n  background: var(--sidebar-link-hover);\n}\n.action-btn.active {\n  color: var(--c3-primary);\n  background: var(--sidebar-link-active);\n}\n.action-btn .mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.example-preview {\n  padding: 1.5rem;\n  background: var(--surface-page);\n}\n.example-preview > *:last-child {\n  margin-bottom: 0;\n}\n.example-source {\n  border-top: 1px solid var(--border-color);\n  background: var(--code-bg);\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab-header {\n  background: rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab {\n  color: var(--code-text) !important;\n  opacity: 0.7;\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab.mdc-tab--active {\n  opacity: 1;\n}\n.example-source .mat-mdc-tab-group .mat-mdc-tab-body-wrapper {\n  background: var(--code-bg);\n}\n.example-source .mat-mdc-tab-group .mdc-tab-indicator__content--underline {\n  border-color: var(--c3-primary) !important;\n}\n.code-container {\n  padding: 0;\n}\n.code-container pre,\n.code-container textarea {\n  margin: 0;\n  padding: 1rem;\n  background: transparent !important;\n  color: var(--code-text);\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  line-height: 1.6;\n  white-space: pre;\n  overflow-x: auto;\n  border: none;\n  resize: none;\n  width: 100%;\n}\n.code-container pre:focus,\n.code-container textarea:focus {\n  outline: none;\n}\n.code-container .hljs {\n  background: transparent !important;\n  padding: 1rem;\n}\n.animate-fadeInUp {\n  animation: fadeInUp 0.2s ease-out;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 640px) {\n  .example-preview {\n    padding: 1rem;\n  }\n  .code-container pre,\n  .code-container textarea {\n    font-size: var(--text-xs);\n  }\n}\n/*# sourceMappingURL=example-viewer.component.css.map */\n"] }]
  }], null, { tabs: [{ type: ContentChildren, args: [forwardRef(() => ExampleViewerTabComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleViewerComponent, { className: "ExampleViewerComponent", filePath: "projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component.ts", lineNumber: 29 });
})();

export {
  C3AutoAnimateDirective,
  ExampleViewerTabComponent,
  ExampleViewerComponent
};
//# sourceMappingURL=chunk-LALM5A6J.js.map

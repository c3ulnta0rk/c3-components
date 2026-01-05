import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/pages/api/api.component.ts
var _PreventEventApiComponent = class _PreventEventApiComponent {
};
_PreventEventApiComponent.\u0275fac = function PreventEventApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PreventEventApiComponent)();
};
_PreventEventApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreventEventApiComponent, selectors: [["c3-prevent-event-api"]], decls: 104, vars: 0, consts: [[1, "api-section"], [1, "api-table"], [1, "use-cases"]], template: function PreventEventApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "Prevent Event API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import {\n  C3PreventClickDirective,\n  C3StopPropagationDirective,\n  C3PreventKeyboardEventDirective\n} from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "C3PreventClickDirective");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12, "Selector: ");
    \u0275\u0275domElementStart(13, "code");
    \u0275\u0275text(14, "[c3-prevent-click]");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "p");
    \u0275\u0275text(16, " Prevents the default action and stops event propagation on click events. Useful for links or buttons that should not trigger their default behavior. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "h3");
    \u0275\u0275text(18, "Behavior");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "table", 1)(20, "thead")(21, "tr")(22, "th");
    \u0275\u0275text(23, "Event");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "th");
    \u0275\u0275text(25, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(26, "tbody")(27, "tr")(28, "td")(29, "code");
    \u0275\u0275text(30, "click");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "td")(32, "code");
    \u0275\u0275text(33, "preventDefault()");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(34, " + ");
    \u0275\u0275domElementStart(35, "code");
    \u0275\u0275text(36, "stopPropagation()");
    \u0275\u0275domElementEnd()()()()()();
    \u0275\u0275domElementStart(37, "section", 0)(38, "h2");
    \u0275\u0275text(39, "C3StopPropagationDirective");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "p");
    \u0275\u0275text(41, "Selector: ");
    \u0275\u0275domElementStart(42, "code");
    \u0275\u0275text(43, "[c3-stop-click-propagation]");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "p");
    \u0275\u0275text(45, " Only stops immediate propagation of click events, without preventing the default action. Allows the element to perform its default action while not bubbling to parents. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(46, "h3");
    \u0275\u0275text(47, "Behavior");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "table", 1)(49, "thead")(50, "tr")(51, "th");
    \u0275\u0275text(52, "Event");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "th");
    \u0275\u0275text(54, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(55, "tbody")(56, "tr")(57, "td")(58, "code");
    \u0275\u0275text(59, "click");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(60, "td")(61, "code");
    \u0275\u0275text(62, "stopImmediatePropagation()");
    \u0275\u0275domElementEnd()()()()()();
    \u0275\u0275domElementStart(63, "section", 0)(64, "h2");
    \u0275\u0275text(65, "C3PreventKeyboardEventDirective");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(66, "p");
    \u0275\u0275text(67, "Selector: ");
    \u0275\u0275domElementStart(68, "code");
    \u0275\u0275text(69, "[c3-prevent-keyboard]");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(70, "p");
    \u0275\u0275text(71, " Prevents default action and stops propagation for keyboard events. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(72, "h3");
    \u0275\u0275text(73, "Behavior");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "table", 1)(75, "thead")(76, "tr")(77, "th");
    \u0275\u0275text(78, "Event");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(79, "th");
    \u0275\u0275text(80, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(81, "tbody")(82, "tr")(83, "td")(84, "code");
    \u0275\u0275text(85, "keydown");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(86, "td")(87, "code");
    \u0275\u0275text(88, "preventDefault()");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(89, " + ");
    \u0275\u0275domElementStart(90, "code");
    \u0275\u0275text(91, "stopPropagation()");
    \u0275\u0275domElementEnd()()()()()();
    \u0275\u0275domElementStart(92, "section", 0)(93, "h2");
    \u0275\u0275text(94, "Use Cases");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "ul", 2)(96, "li");
    \u0275\u0275text(97, "Preventing navigation on anchor elements used as buttons");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(98, "li");
    \u0275\u0275text(99, "Stopping click events from bubbling to parent containers");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(100, "li");
    \u0275\u0275text(101, "Creating overlay close buttons that don't trigger underlying elements");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(102, "li");
    \u0275\u0275text(103, "Preventing keyboard shortcuts from triggering default browser behavior");
    \u0275\u0275domElementEnd()()();
  }
}, dependencies: [CommonModule], styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  margin: 1rem 0 0.5rem;\n  color: var(--text-secondary);\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\n.api-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n  font-weight: 600;\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.use-cases[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  color: var(--text-secondary);\n}\n.use-cases[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var PreventEventApiComponent = _PreventEventApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventApiComponent, [{
    type: Component,
    args: [{ selector: "c3-prevent-event-api", standalone: true, imports: [CommonModule], template: `<h1>Prevent Event API</h1>

<section class="api-section">
  <h2>Import</h2>
  <pre><code>import &#123;
  C3PreventClickDirective,
  C3StopPropagationDirective,
  C3PreventKeyboardEventDirective
&#125; from 'c3-components';</code></pre>
</section>

<section class="api-section">
  <h2>C3PreventClickDirective</h2>
  <p>Selector: <code>[c3-prevent-click]</code></p>
  <p>
    Prevents the default action and stops event propagation on click events.
    Useful for links or buttons that should not trigger their default behavior.
  </p>

  <h3>Behavior</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>click</code></td>
        <td><code>preventDefault()</code> + <code>stopPropagation()</code></td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>C3StopPropagationDirective</h2>
  <p>Selector: <code>[c3-stop-click-propagation]</code></p>
  <p>
    Only stops immediate propagation of click events, without preventing the default action.
    Allows the element to perform its default action while not bubbling to parents.
  </p>

  <h3>Behavior</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>click</code></td>
        <td><code>stopImmediatePropagation()</code></td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>C3PreventKeyboardEventDirective</h2>
  <p>Selector: <code>[c3-prevent-keyboard]</code></p>
  <p>
    Prevents default action and stops propagation for keyboard events.
  </p>

  <h3>Behavior</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>keydown</code></td>
        <td><code>preventDefault()</code> + <code>stopPropagation()</code></td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>Use Cases</h2>
  <ul class="use-cases">
    <li>Preventing navigation on anchor elements used as buttons</li>
    <li>Stopping click events from bubbling to parent containers</li>
    <li>Creating overlay close buttons that don't trigger underlying elements</li>
    <li>Preventing keyboard shortcuts from triggering default browser behavior</li>
  </ul>
</section>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/pages/api/api.component.scss */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section h3 {\n  font-size: var(--text-base);\n  margin: 1rem 0 0.5rem;\n  color: var(--text-secondary);\n}\n.api-section pre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section pre code {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section > p {\n  margin: 0 0 1rem;\n}\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table th,\n.api-table td {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table th {\n  background: var(--surface-elevated);\n  font-weight: 600;\n}\n.api-table td {\n  color: var(--text-secondary);\n}\n.api-table td code {\n  font-size: var(--text-xs);\n}\n.use-cases {\n  padding-left: 1.5rem;\n  color: var(--text-secondary);\n}\n.use-cases li {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreventEventApiComponent, { className: "PreventEventApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/pages/api/api.component.ts", lineNumber: 11 });
})();
export {
  PreventEventApiComponent
};
//# sourceMappingURL=chunk-JMTUGXZM.js.map

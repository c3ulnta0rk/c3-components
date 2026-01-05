import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/pages/api/api.component.ts
var _AutoAnimateApiComponent = class _AutoAnimateApiComponent {
};
_AutoAnimateApiComponent.\u0275fac = function AutoAnimateApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoAnimateApiComponent)();
};
_AutoAnimateApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoAnimateApiComponent, selectors: [["c3-auto-animate-api"]], decls: 116, vars: 0, consts: [[1, "api-section"], [1, "api-table"], [1, "notes-list"]], template: function AutoAnimateApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "Auto Animate API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { C3AutoAnimateDirective } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "Selector");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p")(12, "code");
    \u0275\u0275text(13, "[c3AutoAnimate]");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(14, "section", 0)(15, "h2");
    \u0275\u0275text(16, "Inputs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "table", 1)(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "th");
    \u0275\u0275text(23, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "th");
    \u0275\u0275text(25, "Default");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "th");
    \u0275\u0275text(27, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(28, "tbody")(29, "tr")(30, "td")(31, "code");
    \u0275\u0275text(32, "options");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "td")(34, "code");
    \u0275\u0275text(35, "AutoAnimateOptions | AutoAnimationPlugin");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "td")(37, "code");
    \u0275\u0275text(38, "undefined");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "td");
    \u0275\u0275text(40, "Configuration options for the animation behavior.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(41, "section", 0)(42, "h2");
    \u0275\u0275text(43, "AutoAnimateOptions");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "table", 1)(45, "thead")(46, "tr")(47, "th");
    \u0275\u0275text(48, "Property");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "th");
    \u0275\u0275text(50, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "th");
    \u0275\u0275text(52, "Default");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "th");
    \u0275\u0275text(54, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(55, "tbody")(56, "tr")(57, "td")(58, "code");
    \u0275\u0275text(59, "duration");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(60, "td")(61, "code");
    \u0275\u0275text(62, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(63, "td")(64, "code");
    \u0275\u0275text(65, "250");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(66, "td");
    \u0275\u0275text(67, "Animation duration in milliseconds.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(68, "tr")(69, "td")(70, "code");
    \u0275\u0275text(71, "easing");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(72, "td")(73, "code");
    \u0275\u0275text(74, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(75, "td")(76, "code");
    \u0275\u0275text(77, "'ease-in-out'");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(78, "td");
    \u0275\u0275text(79, "CSS easing function for the animation.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(80, "tr")(81, "td")(82, "code");
    \u0275\u0275text(83, "disrespectUserMotionPreference");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(84, "td")(85, "code");
    \u0275\u0275text(86, "boolean");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(87, "td")(88, "code");
    \u0275\u0275text(89, "false");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(90, "td");
    \u0275\u0275text(91, "Whether to ignore user's reduced motion preference.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(92, "section", 0)(93, "h2");
    \u0275\u0275text(94, "Usage Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "ul", 2)(96, "li");
    \u0275\u0275text(97, "Apply the directive to a parent element that contains dynamic children.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(98, "li");
    \u0275\u0275text(99, "Works with ");
    \u0275\u0275domElementStart(100, "code");
    \u0275\u0275text(101, "@for");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(102, ", ");
    \u0275\u0275domElementStart(103, "code");
    \u0275\u0275text(104, "*ngFor");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(105, ", and ");
    \u0275\u0275domElementStart(106, "code");
    \u0275\u0275text(107, "@if");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(108, " structural directives.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(109, "li");
    \u0275\u0275text(110, "Animations are automatically triggered when children are added, removed, or reordered.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(111, "li");
    \u0275\u0275text(112, "Respects ");
    \u0275\u0275domElementStart(113, "code");
    \u0275\u0275text(114, "prefers-reduced-motion");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(115, " media query by default.");
    \u0275\u0275domElementEnd()()();
  }
}, dependencies: [CommonModule], styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.api-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n}\n.notes-list[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  color: var(--text-secondary);\n}\n.notes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.notes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var AutoAnimateApiComponent = _AutoAnimateApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoAnimateApiComponent, [{
    type: Component,
    args: [{ selector: "c3-auto-animate-api", standalone: true, imports: [CommonModule], template: `<h1>Auto Animate API</h1>

<section class="api-section">
  <h2>Import</h2>
  <pre><code>import &#123; C3AutoAnimateDirective &#125; from 'c3-components';</code></pre>
</section>

<section class="api-section">
  <h2>Selector</h2>
  <p><code>[c3AutoAnimate]</code></p>
</section>

<section class="api-section">
  <h2>Inputs</h2>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>options</code></td>
        <td><code>AutoAnimateOptions | AutoAnimationPlugin</code></td>
        <td><code>undefined</code></td>
        <td>Configuration options for the animation behavior.</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>AutoAnimateOptions</h2>
  <table class="api-table">
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>duration</code></td>
        <td><code>number</code></td>
        <td><code>250</code></td>
        <td>Animation duration in milliseconds.</td>
      </tr>
      <tr>
        <td><code>easing</code></td>
        <td><code>string</code></td>
        <td><code>'ease-in-out'</code></td>
        <td>CSS easing function for the animation.</td>
      </tr>
      <tr>
        <td><code>disrespectUserMotionPreference</code></td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
        <td>Whether to ignore user's reduced motion preference.</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>Usage Notes</h2>
  <ul class="notes-list">
    <li>Apply the directive to a parent element that contains dynamic children.</li>
    <li>Works with <code>&#64;for</code>, <code>*ngFor</code>, and <code>&#64;if</code> structural directives.</li>
    <li>Animations are automatically triggered when children are added, removed, or reordered.</li>
    <li>Respects <code>prefers-reduced-motion</code> media query by default.</li>
  </ul>
</section>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/pages/api/api.component.scss */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section pre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section pre code {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section > p {\n  margin: 0;\n}\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table th,\n.api-table td {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table th {\n  background: var(--surface-elevated);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.api-table td {\n  color: var(--text-secondary);\n}\n.api-table td code {\n  font-size: var(--text-xs);\n}\n.api-table tr:hover td {\n  background: var(--surface-elevated);\n}\n.notes-list {\n  padding-left: 1.5rem;\n  color: var(--text-secondary);\n}\n.notes-list li {\n  margin-bottom: 0.5rem;\n}\n.notes-list li code {\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoAnimateApiComponent, { className: "AutoAnimateApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/pages/api/api.component.ts", lineNumber: 11 });
})();
export {
  AutoAnimateApiComponent
};
//# sourceMappingURL=chunk-NY5P7XRX.js.map

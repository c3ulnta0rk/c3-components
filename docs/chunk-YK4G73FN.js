import {
  C3AutoAnimateDirective,
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
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-CKAG3KXZ.js";
import "./chunk-56K62WNN.js";
import "./chunk-PSEOTE3Z.js";
import "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/pages/examples/examples.component.ts
var _c0 = () => ({});
var _c1 = () => ({ duration: 500, easing: "ease-in-out" });
function AutoAnimateExamplesComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function AutoAnimateExamplesComponent_For_18_Template_button_click_3_listener() {
      const \u0275$index_28_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(\u0275$index_28_r2));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const itm_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(itm_r4);
  }
}
var _AutoAnimateExamplesComponent = class _AutoAnimateExamplesComponent {
  constructor() {
    this.items = signal(["Item 1", "Item 2", "Item 3"], ...ngDevMode ? [{ debugName: "items" }] : []);
  }
  addItem() {
    this.items.update((items) => [...items, `Item ${items.length + 1}`]);
  }
  removeItem(index) {
    this.items.update((items) => items.filter((_, i) => i !== index));
  }
  shuffleItems() {
    this.items.update((items) => [...items].sort(() => Math.random() - 0.5));
  }
};
_AutoAnimateExamplesComponent.\u0275fac = function AutoAnimateExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoAnimateExamplesComponent)();
};
_AutoAnimateExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoAnimateExamplesComponent, selectors: [["c3-auto-animate-examples"]], decls: 90, vars: 8, consts: [[1, "description"], ["href", "https://auto-animate.formkit.com/", "target", "_blank", "rel", "noopener"], ["title", ""], ["example", ""], [1, "demo-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"], ["c3AutoAnimate", "", 1, "demo-list"], [1, "demo-item"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], ["c3AutoAnimate", "", 1, "demo-box", 3, "options"], ["mat-icon-button", "", "aria-label", "Remove", 3, "click"]], template: function AutoAnimateExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Auto Animate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A directive that automatically animates DOM changes using ");
    \u0275\u0275elementStart(4, "a", 1);
    \u0275\u0275text(5, "FormKit AutoAnimate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". Simply add the directive to a parent element and any additions, removals, or moves of child elements will be animated smoothly.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "example-viewer")(8, "h4", 2);
    \u0275\u0275text(9, "Basic List Animation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(10, 3);
    \u0275\u0275elementStart(11, "div", 4)(12, "button", 5);
    \u0275\u0275listener("click", function AutoAnimateExamplesComponent_Template_button_click_12_listener() {
      return ctx.addItem();
    });
    \u0275\u0275text(13, "Add Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 6);
    \u0275\u0275listener("click", function AutoAnimateExamplesComponent_Template_button_click_14_listener() {
      return ctx.shuffleItems();
    });
    \u0275\u0275text(15, "Shuffle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ul", 7);
    \u0275\u0275repeaterCreate(17, AutoAnimateExamplesComponent_For_18_Template, 5, 1, "li", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(19, "c3-example-viewer-tab", 9)(20, "div")(21, "textarea", 10);
    \u0275\u0275text(22, "<");
    \u0275\u0275text(23, "ul c3AutoAnimate>");
    \u0275\u0275text(24, "\n  @");
    \u0275\u0275text(25, "for (item of items(); track item; let i = $index) {");
    \u0275\u0275text(26, "\n    <");
    \u0275\u0275text(27, "li>");
    \u0275\u0275text(28, "\n      <");
    \u0275\u0275text(29, "span>");
    \u0275\u0275text(30, "{");
    \u0275\u0275text(31, "{");
    \u0275\u0275text(32, " item }");
    \u0275\u0275text(33, "}");
    \u0275\u0275text(34, "<");
    \u0275\u0275text(35, "/span>");
    \u0275\u0275text(36, "\n      <");
    \u0275\u0275text(37, 'button (click)="removeItem(i)">');
    \u0275\u0275text(38, "\xD7<");
    \u0275\u0275text(39, "/button>");
    \u0275\u0275text(40, "\n    <");
    \u0275\u0275text(41, "/li>");
    \u0275\u0275text(42, "\n  }");
    \u0275\u0275text(43, "\n<");
    \u0275\u0275text(44, "/ul>");
    \u0275\u0275text(45, "\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "c3-example-viewer-tab", 11)(47, "div")(48, "textarea", 12);
    \u0275\u0275text(49, "import {");
    \u0275\u0275text(50, " Component, signal }");
    \u0275\u0275text(51, " from '@");
    \u0275\u0275text(52, "angular/core';\nimport {");
    \u0275\u0275text(53, " C3AutoAnimateDirective }");
    \u0275\u0275text(54, " from 'c3-components';\n\n@");
    \u0275\u0275text(55, "Component({");
    \u0275\u0275text(56, "\n  selector: 'app-example',\n  standalone: true,\n  imports: [C3AutoAnimateDirective],\n  templateUrl: './example.component.html',\n}");
    \u0275\u0275text(57, ")\nexport class ExampleComponent {");
    \u0275\u0275text(58, "\n  items = signal<");
    \u0275\u0275text(59, "string[]>");
    \u0275\u0275text(60, "(['Item 1', 'Item 2', 'Item 3']);\n\n  addItem(): void {");
    \u0275\u0275text(61, "\n    this.items.update(items =>");
    \u0275\u0275text(62, " [...items, `Item ${");
    \u0275\u0275text(63, "items.length + 1}");
    \u0275\u0275text(64, "`]);\n  }");
    \u0275\u0275text(65, "\n\n  removeItem(index: number): void {");
    \u0275\u0275text(66, "\n    this.items.update(items =>");
    \u0275\u0275text(67, " items.filter((_, i) =>");
    \u0275\u0275text(68, " i !== index));\n  }");
    \u0275\u0275text(69, "\n}");
    \u0275\u0275text(70, "\n      ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "example-viewer")(72, "h4", 2);
    \u0275\u0275text(73, "With Custom Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(74, 3);
    \u0275\u0275elementStart(75, "div", 13)(76, "p");
    \u0275\u0275text(77, "This container has custom animation duration and easing.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(78, "c3-example-viewer-tab", 9)(79, "div")(80, "textarea", 10);
    \u0275\u0275text(81, "<");
    \u0275\u0275text(82, 'div c3AutoAnimate [options]="{');
    \u0275\u0275text(83, " duration: 500, easing: 'ease-in-out' }");
    \u0275\u0275text(84, '">');
    \u0275\u0275text(85, "\n  <");
    \u0275\u0275text(86, "!-- Content here will animate with custom settings -->");
    \u0275\u0275text(87, "\n<");
    \u0275\u0275text(88, "/div>");
    \u0275\u0275text(89, "\n      ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx.items());
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(27);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(27);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(7, _c0));
  }
}, dependencies: [
  CommonModule,
  MatButtonModule,
  MatButton,
  MatIconButton,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective,
  C3AutoAnimateDirective
], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--c3-accent);\n}\n.demo-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.demo-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.demo-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--surface-elevated);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-md);\n  margin-bottom: 0.5rem;\n}\n.demo-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.demo-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  padding: 0;\n  font-size: 1.25rem;\n  line-height: 1;\n}\n.demo-box[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-md);\n}\n.demo-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var AutoAnimateExamplesComponent = _AutoAnimateExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoAnimateExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-auto-animate-examples", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective,
      C3AutoAnimateDirective
    ], template: `<h1>Auto Animate</h1>
<p class="description">
  A directive that automatically animates DOM changes using
  <a href="https://auto-animate.formkit.com/" target="_blank" rel="noopener">FormKit AutoAnimate</a>.
  Simply add the directive to a parent element and any additions, removals, or moves of child elements
  will be animated smoothly.
</p>

<example-viewer>
  <h4 title>Basic List Animation</h4>

  <ng-container example>
    <div class="demo-actions">
      <button mat-raised-button color="primary" (click)="addItem()">Add Item</button>
      <button mat-raised-button (click)="shuffleItems()">Shuffle</button>
    </div>

    <ul class="demo-list" c3AutoAnimate>
      @for (itm of items(); track itm; let i = $index) {
        <li class="demo-item">
          <span>{{ itm }}</span>
          <button mat-icon-button (click)="removeItem(i)" aria-label="Remove">\xD7</button>
        </li>
      }
    </ul>
  </ng-container>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
&lt;ul c3AutoAnimate&gt;
  &#64;for (item of items(); track item; let i = $index) &#123;
    &lt;li&gt;
      &lt;span&gt;&#123;&#123; item &#125;&#125;&lt;/span&gt;
      &lt;button (click)="removeItem(i)"&gt;\xD7&lt;/button&gt;
    &lt;/li&gt;
  &#125;
&lt;/ul&gt;
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import &#123; Component, signal &#125; from '&#64;angular/core';
import &#123; C3AutoAnimateDirective &#125; from 'c3-components';

&#64;Component(&#123;
  selector: 'app-example',
  standalone: true,
  imports: [C3AutoAnimateDirective],
  templateUrl: './example.component.html',
&#125;)
export class ExampleComponent &#123;
  items = signal&lt;string[]&gt;(['Item 1', 'Item 2', 'Item 3']);

  addItem(): void &#123;
    this.items.update(items =&gt; [...items, \`Item $&#123;items.length + 1&#125;\`]);
  &#125;

  removeItem(index: number): void &#123;
    this.items.update(items =&gt; items.filter((_, i) =&gt; i !== index));
  &#125;
&#125;
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>

<example-viewer>
  <h4 title>With Custom Options</h4>

  <ng-container example>
    <div class="demo-box" c3AutoAnimate [options]="{ duration: 500, easing: 'ease-in-out' }">
      <p>This container has custom animation duration and easing.</p>
    </div>
  </ng-container>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
&lt;div c3AutoAnimate [options]="&#123; duration: 500, easing: 'ease-in-out' &#125;"&gt;
  &lt;!-- Content here will animate with custom settings --&gt;
&lt;/div&gt;
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>
`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/pages/examples/examples.component.scss */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.description a {\n  color: var(--c3-accent);\n}\n.demo-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.demo-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.demo-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--surface-elevated);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-md);\n  margin-bottom: 0.5rem;\n}\n.demo-item:last-child {\n  margin-bottom: 0;\n}\n.demo-item button {\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  padding: 0;\n  font-size: 1.25rem;\n  line-height: 1;\n}\n.demo-box {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-md);\n}\n.demo-box p {\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoAnimateExamplesComponent, { className: "AutoAnimateExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/pages/examples/examples.component.ts", lineNumber: 23 });
})();
export {
  AutoAnimateExamplesComponent
};
//# sourceMappingURL=chunk-YK4G73FN.js.map

import {
  MatButton,
  MatButtonModule
} from "./chunk-CKAG3KXZ.js";
import "./chunk-56K62WNN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PSEOTE3Z.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ECYVAQNN.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/components-overview/components-overview.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.path;
function ComponentsOverviewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ComponentsOverviewComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ComponentsOverviewComponent_For_14_Conditional_11_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("badge-" + item_r5.badge);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.badge, " ");
  }
}
function ComponentsOverviewComponent_For_14_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 23)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 25)(6, "h3", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ComponentsOverviewComponent_For_14_Conditional_11_For_2_Conditional_8_Template, 2, 3, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-icon", 29);
    \u0275\u0275text(12, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_50_r6 = ctx.$index;
    const \u0275$index_28_r7 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275styleProp("animation-delay", \u0275$index_28_r7 * 100 + \u0275$index_50_r6 * 50 + "ms");
    \u0275\u0275property("routerLink", item_r5.path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.badge ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.description);
  }
}
function ComponentsOverviewComponent_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, ComponentsOverviewComponent_For_14_Conditional_11_For_2_Template, 13, 7, "a", 21, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(category_r4.items);
  }
}
function ComponentsOverviewComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "button", 14);
    \u0275\u0275listener("click", function ComponentsOverviewComponent_For_14_Template_button_click_1_listener() {
      const category_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(category_r4.id));
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "mat-icon", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-icon", 19);
    \u0275\u0275text(10, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ComponentsOverviewComponent_For_14_Conditional_11_Template, 3, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const \u0275$index_28_r7 = ctx.$index;
    \u0275\u0275styleProp("animation-delay", \u0275$index_28_r7 * 100 + "ms");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", category_r4.expanded);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.items.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", !category_r4.expanded);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(category_r4.expanded ? 11 : -1);
  }
}
function ComponentsOverviewComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function ComponentsOverviewComponent_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(6, "Clear search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('No components found for "', ctx_r1.searchQuery(), '"');
  }
}
var _ComponentsOverviewComponent = class _ComponentsOverviewComponent {
  constructor() {
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.categories = signal([
      {
        id: "components",
        name: "Components",
        icon: "widgets",
        expanded: true,
        items: [
          { name: "Dialog", path: "/docs/dialog", icon: "chat_bubble", description: "Alert, confirm, prompt and custom dialogs" },
          { name: "Dropdown", path: "/docs/dropdown", icon: "arrow_drop_down_circle", description: "Dropdown menus and selects" },
          { name: "Expansion", path: "/docs/expansion", icon: "expand_more", description: "Expandable panels and accordions" },
          { name: "File Displayer", path: "/docs/file-displayer", icon: "folder_open", description: "Display files in grid or list" },
          { name: "File Viewer", path: "/docs/file-viewer", icon: "preview", description: "Preview images, PDFs and videos" },
          { name: "Flowing Menu", path: "/docs/flowing-menu", icon: "menu_open", description: "Animated dropdown menus" },
          { name: "Menu", path: "/docs/menu", icon: "menu", description: "Context menus and navigation" },
          { name: "Modal", path: "/docs/modal", icon: "web_asset", description: "Modal dialogs and overlays" },
          { name: "Tabs", path: "/docs/tabs", icon: "tab", description: "Tabbed navigation and content" },
          { name: "Trace Card", path: "/docs/trace-card", icon: "view_agenda", description: "Timeline and trace displays" },
          { name: "Tree", path: "/docs/tree", icon: "account_tree", description: "Hierarchical tree structures" }
        ]
      },
      {
        id: "directives",
        name: "Directives",
        icon: "tune",
        expanded: true,
        items: [
          { name: "Auto Animate", path: "/docs/auto-animate", icon: "animation", description: "Automatic DOM animations", badge: "new" },
          { name: "Prevent Event", path: "/docs/prevent-event", icon: "block", description: "Block click and keyboard events" },
          { name: "Select on Focus", path: "/docs/select-on-focus", icon: "select_all", description: "Auto-select input text on focus" }
        ]
      },
      {
        id: "utilities",
        name: "Utilities",
        icon: "build",
        expanded: true,
        items: [
          { name: "File Input", path: "/docs/file-input", icon: "upload_file", description: "File upload with progress", badge: "new" },
          { name: "File Upload", path: "/docs/file-upload", icon: "cloud_upload", description: "File upload module" },
          { name: "PDF Viewer", path: "/docs/pdf-viewer", icon: "picture_as_pdf", description: "Standalone PDF viewer", badge: "new" },
          { name: "Safe URL", path: "/docs/safe-url", icon: "security", description: "Sanitize URLs for iframes" },
          { name: "Signals", path: "/docs/signals", icon: "sync_alt", description: "Signal utilities with RxJS", badge: "new" },
          { name: "Navbar", path: "/docs/navbar", icon: "web", description: "Navigation bar module" }
        ]
      },
      {
        id: "styles",
        name: "Styles",
        icon: "palette",
        expanded: true,
        items: [
          { name: "Rounded Title", path: "/docs/rounded-title", icon: "title", description: "Stylized section titles" },
          { name: "Highlight Text", path: "/docs/highlight-text", icon: "highlight", description: "Text highlighting utilities" }
        ]
      }
    ], ...ngDevMode ? [{ debugName: "categories" }] : []);
    this.filteredCategories = computed(() => {
      const query = this.searchQuery().toLowerCase().trim();
      if (!query) {
        return this.categories();
      }
      return this.categories().map((category) => __spreadProps(__spreadValues({}, category), {
        items: category.items.filter((item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
      })).filter((category) => category.items.length > 0);
    }, ...ngDevMode ? [{ debugName: "filteredCategories" }] : []);
    this.totalComponents = computed(() => {
      return this.categories().reduce((acc, cat) => acc + cat.items.length, 0);
    }, ...ngDevMode ? [{ debugName: "totalComponents" }] : []);
  }
  toggleCategory(categoryId) {
    this.categories.update((cats) => cats.map((cat) => cat.id === categoryId ? __spreadProps(__spreadValues({}, cat), { expanded: !cat.expanded }) : cat));
  }
  clearSearch() {
    this.searchQuery.set("");
  }
};
_ComponentsOverviewComponent.\u0275fac = function ComponentsOverviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ComponentsOverviewComponent)();
};
_ComponentsOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComponentsOverviewComponent, selectors: [["c3-components-overview"]], decls: 16, vars: 4, consts: [[1, "components-overview"], [1, "overview-header"], [1, "overview-title"], [1, "overview-subtitle"], [1, "search-container"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Search components...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "search-clear"], [1, "categories"], [1, "category", 3, "animation-delay"], [1, "no-results"], [1, "search-clear", 3, "click"], [1, "category"], [1, "category-header", 3, "click"], [1, "category-info"], [1, "category-icon"], [1, "category-name"], [1, "category-count"], [1, "expand-icon"], [1, "category-grid"], [1, "component-card", 3, "routerLink", "animation-delay"], [1, "component-card", 3, "routerLink"], [1, "card-icon"], [1, "card-content"], [1, "card-header"], [1, "card-title"], [1, "card-badge", 3, "class"], [1, "card-description"], [1, "card-arrow"], [1, "card-badge"], ["mat-button", "", 3, "click"]], template: function ComponentsOverviewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "mat-icon", 6);
    \u0275\u0275text(9, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 7);
    \u0275\u0275listener("ngModelChange", function ComponentsOverviewComponent_Template_input_ngModelChange_10_listener($event) {
      return ctx.searchQuery.set($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ComponentsOverviewComponent_Conditional_11_Template, 3, 0, "button", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275repeaterCreate(13, ComponentsOverviewComponent_For_14_Template, 12, 9, "section", 10, _forTrack0);
    \u0275\u0275conditionalCreate(15, ComponentsOverviewComponent_Conditional_15_Template, 7, 1, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Discover all ", ctx.totalComponents(), " available components, directives and utilities. ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.searchQuery());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.searchQuery() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.filteredCategories());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.filteredCategories().length === 0 ? 15 : -1);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatButtonModule, MatButton], styles: ["\n\n.components-overview[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.overview-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.overview-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--text-4xl);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem 0;\n}\n.overview-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.search-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  transition: all var(--transition-fast);\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--c3-accent);\n  box-shadow: 0 0 0 3px rgba(0, 74, 153, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  color: var(--text-primary);\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem;\n  background: transparent;\n  border: none;\n  border-radius: var(--border-radius-sm);\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all var(--transition-fast);\n}\n.search-clear[_ngcontent-%COMP%]:hover {\n  background: var(--surface-elevated);\n  color: var(--text-primary);\n}\n.search-clear[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.category[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.4s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: opacity var(--transition-fast);\n}\n.category-header[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.category-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.category-icon[_ngcontent-%COMP%] {\n  color: var(--c3-primary);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--text-xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.category-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 0.5rem;\n  background: var(--surface-elevated);\n  border-radius: 9999px;\n  font-size: var(--text-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  transition: transform var(--transition-fast);\n}\n.expand-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n}\n.component-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out both;\n}\n.component-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c3-primary);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.component-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: var(--c3-primary);\n}\n.component-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\n  background: var(--c3-primary);\n}\n.component-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.card-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: var(--sidebar-link-active);\n  border-radius: var(--border-radius-md);\n  flex-shrink: 0;\n  transition: all var(--transition-fast);\n}\n.card-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--c3-primary);\n  transition: color var(--transition-fast);\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.card-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.125rem 0.5rem;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-radius: 9999px;\n}\n.card-badge.badge-new[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--c3-primary) 0%,\n      var(--c3-primary-dark) 100%);\n  color: white;\n}\n.card-badge.badge-updated[_ngcontent-%COMP%] {\n  background: var(--c3-accent);\n  color: white;\n}\n.card-badge.badge-beta[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n  color: white;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-arrow[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  transition: all var(--transition-fast);\n}\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.no-results[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  .overview-header[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .overview-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .component-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .card-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 20px;\n    height: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .card-description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=components-overview.component.css.map */"] });
var ComponentsOverviewComponent = _ComponentsOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentsOverviewComponent, [{
    type: Component,
    args: [{ selector: "c3-components-overview", standalone: true, imports: [CommonModule, RouterModule, FormsModule, MatIconModule, MatButtonModule], template: `<div class="components-overview">
  <!-- Header -->
  <header class="overview-header">
    <h1 class="overview-title">Components</h1>
    <p class="overview-subtitle">
      Discover all {{ totalComponents() }} available components, directives and utilities.
    </p>
  </header>

  <!-- Search -->
  <div class="search-container">
    <div class="search-box">
      <mat-icon class="search-icon">search</mat-icon>
      <input
        type="text"
        class="search-input"
        placeholder="Search components..."
        [ngModel]="searchQuery()"
        (ngModelChange)="searchQuery.set($event)"
      />
      @if (searchQuery()) {
        <button class="search-clear" (click)="clearSearch()">
          <mat-icon>close</mat-icon>
        </button>
      }
    </div>
  </div>

  <!-- Categories -->
  <div class="categories">
    @for (category of filteredCategories(); track category.id; let catIndex = $index) {
      <section class="category" [style.animation-delay]="catIndex * 100 + 'ms'">
        <!-- Category Header -->
        <button
          class="category-header"
          (click)="toggleCategory(category.id)"
          [attr.aria-expanded]="category.expanded"
        >
          <div class="category-info">
            <mat-icon class="category-icon">{{ category.icon }}</mat-icon>
            <h2 class="category-name">{{ category.name }}</h2>
            <span class="category-count">{{ category.items.length }}</span>
          </div>
          <mat-icon class="expand-icon" [class.rotated]="!category.expanded">
            expand_more
          </mat-icon>
        </button>

        <!-- Category Grid -->
        @if (category.expanded) {
          <div class="category-grid">
            @for (item of category.items; track item.path; let itemIndex = $index) {
              <a
                [routerLink]="item.path"
                class="component-card"
                [style.animation-delay]="(catIndex * 100 + itemIndex * 50) + 'ms'"
              >
                <div class="card-icon">
                  <mat-icon>{{ item.icon }}</mat-icon>
                </div>
                <div class="card-content">
                  <div class="card-header">
                    <h3 class="card-title">{{ item.name }}</h3>
                    @if (item.badge) {
                      <span class="card-badge" [class]="'badge-' + item.badge">
                        {{ item.badge }}
                      </span>
                    }
                  </div>
                  <p class="card-description">{{ item.description }}</p>
                </div>
                <mat-icon class="card-arrow">arrow_forward</mat-icon>
              </a>
            }
          </div>
        }
      </section>
    }

    @if (filteredCategories().length === 0) {
      <div class="no-results">
        <mat-icon>search_off</mat-icon>
        <p>No components found for "{{ searchQuery() }}"</p>
        <button mat-button (click)="clearSearch()">Clear search</button>
      </div>
    }
  </div>
</div>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/components-overview/components-overview.component.scss */\n.components-overview {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.overview-header {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.overview-title {\n  font-family: var(--font-heading);\n  font-size: var(--text-4xl);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem 0;\n}\n.overview-subtitle {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.search-container {\n  margin-bottom: 2rem;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  transition: all var(--transition-fast);\n}\n.search-box:focus-within {\n  border-color: var(--c3-accent);\n  box-shadow: 0 0 0 3px rgba(0, 74, 153, 0.1);\n}\n.search-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  color: var(--text-primary);\n  outline: none;\n}\n.search-input::placeholder {\n  color: var(--text-muted);\n}\n.search-clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem;\n  background: transparent;\n  border: none;\n  border-radius: var(--border-radius-sm);\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all var(--transition-fast);\n}\n.search-clear:hover {\n  background: var(--surface-elevated);\n  color: var(--text-primary);\n}\n.search-clear .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.categories {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.category {\n  animation: fadeInUp 0.4s ease-out both;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.category-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: opacity var(--transition-fast);\n}\n.category-header:hover {\n  opacity: 0.8;\n}\n.category-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.category-icon {\n  color: var(--c3-primary);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.category-name {\n  font-family: var(--font-heading);\n  font-size: var(--text-xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.category-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 0.5rem;\n  background: var(--surface-elevated);\n  border-radius: 9999px;\n  font-size: var(--text-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.expand-icon {\n  color: var(--text-muted);\n  transition: transform var(--transition-fast);\n}\n.expand-icon.rotated {\n  transform: rotate(-90deg);\n}\n.category-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n}\n.component-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n  animation: fadeIn 0.3s ease-out both;\n}\n.component-card:hover {\n  border-color: var(--c3-primary);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.component-card:hover .card-arrow {\n  transform: translateX(4px);\n  color: var(--c3-primary);\n}\n.component-card:hover .card-icon {\n  background: var(--c3-primary);\n}\n.component-card:hover .card-icon .mat-icon {\n  color: white;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: var(--sidebar-link-active);\n  border-radius: var(--border-radius-md);\n  flex-shrink: 0;\n  transition: all var(--transition-fast);\n}\n.card-icon .mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--c3-primary);\n  transition: color var(--transition-fast);\n}\n.card-content {\n  flex: 1;\n  min-width: 0;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.card-title {\n  font-family: var(--font-heading);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.card-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.125rem 0.5rem;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-radius: 9999px;\n}\n.card-badge.badge-new {\n  background:\n    linear-gradient(\n      135deg,\n      var(--c3-primary) 0%,\n      var(--c3-primary-dark) 100%);\n  color: white;\n}\n.card-badge.badge-updated {\n  background: var(--c3-accent);\n  color: white;\n}\n.card-badge.badge-beta {\n  background: var(--color-warning);\n  color: white;\n}\n.card-description {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-arrow {\n  color: var(--text-muted);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  transition: all var(--transition-fast);\n}\n.no-results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.no-results .mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-results p {\n  margin: 0 0 1rem;\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  .overview-header {\n    text-align: left;\n  }\n  .overview-title {\n    font-size: var(--text-3xl);\n  }\n  .category-grid {\n    grid-template-columns: 1fr;\n  }\n  .component-card {\n    padding: 0.875rem;\n  }\n  .card-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .card-icon .mat-icon {\n    font-size: 20px;\n    width: 20px;\n    height: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .card-description {\n    display: none;\n  }\n  .card-arrow {\n    display: none;\n  }\n}\n/*# sourceMappingURL=components-overview.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComponentsOverviewComponent, { className: "ComponentsOverviewComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/components-overview/components-overview.component.ts", lineNumber: 31 });
})();
export {
  ComponentsOverviewComponent
};
//# sourceMappingURL=chunk-QXX6FXPI.js.map

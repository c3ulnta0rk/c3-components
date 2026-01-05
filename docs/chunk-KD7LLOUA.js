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

// projects/c3-components-docs/src/app/pages/docs/pages/file-input/pages/api/api.component.ts
var _FileInputApiComponent = class _FileInputApiComponent {
};
_FileInputApiComponent.\u0275fac = function FileInputApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileInputApiComponent)();
};
_FileInputApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileInputApiComponent, selectors: [["c3-file-input-api"]], decls: 256, vars: 0, consts: [[1, "api-section"], [1, "api-table"]], template: function FileInputApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "File Input API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { C3InputFileModule, C3DownloadService } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "C3InputFileComponent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12, "Selector: ");
    \u0275\u0275domElementStart(13, "code");
    \u0275\u0275text(14, "c3-input-file");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "h3");
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
    \u0275\u0275text(32, "accept");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "td")(34, "code");
    \u0275\u0275text(35, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "td")(37, "em");
    \u0275\u0275text(38, "required");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "td");
    \u0275\u0275text(40, "File types to accept (e.g., 'image/*', '.pdf').");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(41, "tr")(42, "td")(43, "code");
    \u0275\u0275text(44, "multiple");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(45, "td")(46, "code");
    \u0275\u0275text(47, "boolean");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(48, "td")(49, "code");
    \u0275\u0275text(50, "false");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(51, "td");
    \u0275\u0275text(52, "Whether to allow multiple file selection.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(53, "tr")(54, "td")(55, "code");
    \u0275\u0275text(56, "baseUrl");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(57, "td")(58, "code");
    \u0275\u0275text(59, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(60, "td")(61, "code");
    \u0275\u0275text(62, "'localhost:3000'");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(63, "td");
    \u0275\u0275text(64, "Base URL for the upload endpoint.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "tr")(66, "td")(67, "code");
    \u0275\u0275text(68, "dest");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(69, "td")(70, "code");
    \u0275\u0275text(71, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(72, "td")(73, "code");
    \u0275\u0275text(74, "'api/upload'");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(75, "td");
    \u0275\u0275text(76, "Destination path for uploads.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(77, "tr")(78, "td")(79, "code");
    \u0275\u0275text(80, "method");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(81, "td")(82, "code");
    \u0275\u0275text(83, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(84, "td")(85, "code");
    \u0275\u0275text(86, "'POST'");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(87, "td");
    \u0275\u0275text(88, "HTTP method for the upload request.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(89, "tr")(90, "td")(91, "code");
    \u0275\u0275text(92, "headers");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(93, "td")(94, "code");
    \u0275\u0275text(95, "Object");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(96, "td")(97, "code");
    \u0275\u0275text(98, "undefined");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(99, "td");
    \u0275\u0275text(100, "Custom headers to include in the upload request.");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(101, "h3");
    \u0275\u0275text(102, "Outputs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(103, "table", 1)(104, "thead")(105, "tr")(106, "th");
    \u0275\u0275text(107, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(108, "th");
    \u0275\u0275text(109, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(110, "th");
    \u0275\u0275text(111, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(112, "tbody")(113, "tr")(114, "td")(115, "code");
    \u0275\u0275text(116, "fileAdded");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(117, "td")(118, "code");
    \u0275\u0275text(119, "EventEmitter<C3InputFile>");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(120, "td");
    \u0275\u0275text(121, "Emitted when a file is added and upload starts.");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(122, "h3");
    \u0275\u0275text(123, "Methods");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(124, "table", 1)(125, "thead")(126, "tr")(127, "th");
    \u0275\u0275text(128, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(129, "th");
    \u0275\u0275text(130, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(131, "tbody")(132, "tr")(133, "td")(134, "code");
    \u0275\u0275text(135, "click()");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(136, "td");
    \u0275\u0275text(137, "Programmatically open the file picker dialog.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(138, "section", 0)(139, "h2");
    \u0275\u0275text(140, "C3InputFile Class");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(141, "p");
    \u0275\u0275text(142, "Represents an uploaded file with progress tracking.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(143, "h3");
    \u0275\u0275text(144, "Properties");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(145, "table", 1)(146, "thead")(147, "tr")(148, "th");
    \u0275\u0275text(149, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(150, "th");
    \u0275\u0275text(151, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(152, "th");
    \u0275\u0275text(153, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(154, "tbody")(155, "tr")(156, "td")(157, "code");
    \u0275\u0275text(158, "fileName");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(159, "td")(160, "code");
    \u0275\u0275text(161, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(162, "td");
    \u0275\u0275text(163, "Original file name.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(164, "tr")(165, "td")(166, "code");
    \u0275\u0275text(167, "mimetype");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(168, "td")(169, "code");
    \u0275\u0275text(170, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(171, "td");
    \u0275\u0275text(172, "MIME type of the file.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(173, "tr")(174, "td")(175, "code");
    \u0275\u0275text(176, "size");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(177, "td")(178, "code");
    \u0275\u0275text(179, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(180, "td");
    \u0275\u0275text(181, "File size in bytes.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(182, "tr")(183, "td")(184, "code");
    \u0275\u0275text(185, "progression");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(186, "td")(187, "code");
    \u0275\u0275text(188, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(189, "td");
    \u0275\u0275text(190, "Upload progress (0-100).");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(191, "tr")(192, "td")(193, "code");
    \u0275\u0275text(194, "progressionChange");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(195, "td")(196, "code");
    \u0275\u0275text(197, "Subject<number>");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(198, "td");
    \u0275\u0275text(199, "Observable for progress changes.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(200, "tr")(201, "td")(202, "code");
    \u0275\u0275text(203, "response");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(204, "td")(205, "code");
    \u0275\u0275text(206, "any");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(207, "td");
    \u0275\u0275text(208, "Server response after upload completes.");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(209, "h3");
    \u0275\u0275text(210, "Methods");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(211, "table", 1)(212, "thead")(213, "tr")(214, "th");
    \u0275\u0275text(215, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(216, "th");
    \u0275\u0275text(217, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(218, "tbody")(219, "tr")(220, "td")(221, "code");
    \u0275\u0275text(222, "emit('abord')");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(223, "td");
    \u0275\u0275text(224, "Cancel the ongoing upload.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(225, "section", 0)(226, "h2");
    \u0275\u0275text(227, "C3DownloadService");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(228, "p");
    \u0275\u0275text(229, "Service for downloading files as Blobs.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(230, "h3");
    \u0275\u0275text(231, "Methods");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(232, "table", 1)(233, "thead")(234, "tr")(235, "th");
    \u0275\u0275text(236, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(237, "th");
    \u0275\u0275text(238, "Parameters");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(239, "th");
    \u0275\u0275text(240, "Returns");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(241, "th");
    \u0275\u0275text(242, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(243, "tbody")(244, "tr")(245, "td")(246, "code");
    \u0275\u0275text(247, "download");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(248, "td")(249, "code");
    \u0275\u0275text(250, "url: string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(251, "td")(252, "code");
    \u0275\u0275text(253, "Observable<Blob>");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(254, "td");
    \u0275\u0275text(255, "Downloads a file from the given URL.");
    \u0275\u0275domElementEnd()()()()();
  }
}, dependencies: [CommonModule], styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  margin: 1.5rem 0 0.75rem;\n  color: var(--text-secondary);\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\n.api-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var FileInputApiComponent = _FileInputApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileInputApiComponent, [{
    type: Component,
    args: [{ selector: "c3-file-input-api", standalone: true, imports: [CommonModule], template: `<h1>File Input API</h1>

<section class="api-section">
  <h2>Import</h2>
  <pre><code>import &#123; C3InputFileModule, C3DownloadService &#125; from 'c3-components';</code></pre>
</section>

<section class="api-section">
  <h2>C3InputFileComponent</h2>
  <p>Selector: <code>c3-input-file</code></p>

  <h3>Inputs</h3>
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
        <td><code>accept</code></td>
        <td><code>string</code></td>
        <td><em>required</em></td>
        <td>File types to accept (e.g., 'image/*', '.pdf').</td>
      </tr>
      <tr>
        <td><code>multiple</code></td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
        <td>Whether to allow multiple file selection.</td>
      </tr>
      <tr>
        <td><code>baseUrl</code></td>
        <td><code>string</code></td>
        <td><code>'localhost:3000'</code></td>
        <td>Base URL for the upload endpoint.</td>
      </tr>
      <tr>
        <td><code>dest</code></td>
        <td><code>string</code></td>
        <td><code>'api/upload'</code></td>
        <td>Destination path for uploads.</td>
      </tr>
      <tr>
        <td><code>method</code></td>
        <td><code>string</code></td>
        <td><code>'POST'</code></td>
        <td>HTTP method for the upload request.</td>
      </tr>
      <tr>
        <td><code>headers</code></td>
        <td><code>Object</code></td>
        <td><code>undefined</code></td>
        <td>Custom headers to include in the upload request.</td>
      </tr>
    </tbody>
  </table>

  <h3>Outputs</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>fileAdded</code></td>
        <td><code>EventEmitter&lt;C3InputFile&gt;</code></td>
        <td>Emitted when a file is added and upload starts.</td>
      </tr>
    </tbody>
  </table>

  <h3>Methods</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>click()</code></td>
        <td>Programmatically open the file picker dialog.</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>C3InputFile Class</h2>
  <p>Represents an uploaded file with progress tracking.</p>

  <h3>Properties</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>fileName</code></td>
        <td><code>string</code></td>
        <td>Original file name.</td>
      </tr>
      <tr>
        <td><code>mimetype</code></td>
        <td><code>string</code></td>
        <td>MIME type of the file.</td>
      </tr>
      <tr>
        <td><code>size</code></td>
        <td><code>number</code></td>
        <td>File size in bytes.</td>
      </tr>
      <tr>
        <td><code>progression</code></td>
        <td><code>number</code></td>
        <td>Upload progress (0-100).</td>
      </tr>
      <tr>
        <td><code>progressionChange</code></td>
        <td><code>Subject&lt;number&gt;</code></td>
        <td>Observable for progress changes.</td>
      </tr>
      <tr>
        <td><code>response</code></td>
        <td><code>any</code></td>
        <td>Server response after upload completes.</td>
      </tr>
    </tbody>
  </table>

  <h3>Methods</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>emit('abord')</code></td>
        <td>Cancel the ongoing upload.</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>C3DownloadService</h2>
  <p>Service for downloading files as Blobs.</p>

  <h3>Methods</h3>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Parameters</th>
        <th>Returns</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>download</code></td>
        <td><code>url: string</code></td>
        <td><code>Observable&lt;Blob&gt;</code></td>
        <td>Downloads a file from the given URL.</td>
      </tr>
    </tbody>
  </table>
</section>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/file-input/pages/api/api.component.scss */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section h3 {\n  font-size: var(--text-lg);\n  margin: 1.5rem 0 0.75rem;\n  color: var(--text-secondary);\n}\n.api-section pre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section pre code {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section > p {\n  margin: 0 0 1rem;\n}\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table th,\n.api-table td {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table th {\n  background: var(--surface-elevated);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.api-table td {\n  color: var(--text-secondary);\n}\n.api-table td code {\n  font-size: var(--text-xs);\n}\n.api-table tr:hover td {\n  background: var(--surface-elevated);\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileInputApiComponent, { className: "FileInputApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-input/pages/api/api.component.ts", lineNumber: 11 });
})();
export {
  FileInputApiComponent
};
//# sourceMappingURL=chunk-KD7LLOUA.js.map

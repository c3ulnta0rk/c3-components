import { Component } from '@angular/core';

@Component({
  selector: 'c3-select-on-focus-api',
  standalone: true,
  template: `
    <h1>Select on Focus API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3SelectOnFocusDirective &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Selector</h2>
      <p><code>[c3SelectOnFocus]</code></p>
    </section>
    <section class="api-section">
      <h2>Behavior</h2>
      <p>When an input element with this directive receives focus, all its text content is automatically selected after a microtask delay.</p>
    </section>
    <section class="api-section">
      <h2>Use Cases</h2>
      <ul>
        <li>Copy-friendly inputs (share URLs, API keys)</li>
        <li>Quick edit fields where full replacement is common</li>
        <li>Search inputs for easy query replacement</li>
      </ul>
    </section>
  `,
  styles: [`.api-section { margin-bottom: 2rem; }
    .api-section h2 { font-size: var(--text-xl); margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-color); }
    pre { background: var(--code-bg); padding: 1rem; border-radius: var(--border-radius-md); }
    pre code { color: var(--code-text); background: transparent; }
    ul { padding-left: 1.5rem; color: var(--text-secondary); }
    ul li { margin-bottom: 0.5rem; }`]
})
export class SelectOnFocusApiComponent {}


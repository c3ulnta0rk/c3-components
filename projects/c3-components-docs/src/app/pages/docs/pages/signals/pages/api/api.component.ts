import { Component } from '@angular/core';

@Component({
  selector: 'c3-signals-api',
  standalone: true,
  template: `
    <h1>C3 Signal API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; c3Signal &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Factory Function</h2>
      <pre><code>c3Signal&lt;T&gt;(initialValue: T): C3Signal&lt;T&gt;</code></pre>
    </section>
    <section class="api-section">
      <h2>C3Signal&lt;T&gt; Class</h2>
      <table class="api-table">
        <thead><tr><th>Member</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>get()</code></td><td><code>T</code></td><td>Returns the current value.</td></tr>
          <tr><td><code>value</code></td><td><code>T</code> (setter)</td><td>Sets a new value.</td></tr>
          <tr><td><code>update(fn)</code></td><td><code>(value: T) => T</code></td><td>Updates value using a function.</td></tr>
          <tr><td><code>value$</code></td><td><code>Subject&lt;T&gt;</code></td><td>RxJS Subject that emits on changes.</td></tr>
        </tbody>
      </table>
    </section>
  `,
  styles: [`.api-section { margin-bottom: 2rem; }
    .api-section h2 { font-size: var(--text-xl); margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-color); }
    pre { background: var(--code-bg); padding: 1rem; border-radius: var(--border-radius-md); }
    pre code { color: var(--code-text); background: transparent; }
    .api-table { width: 100%; border-collapse: collapse; font-size: var(--text-sm); }
    .api-table th, .api-table td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid var(--border-color); }
    .api-table th { background: var(--surface-elevated); font-weight: 600; }
    .api-table td { color: var(--text-secondary); }`]
})
export class SignalsApiComponent {}


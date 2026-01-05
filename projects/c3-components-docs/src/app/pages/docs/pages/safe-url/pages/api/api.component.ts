import { Component } from '@angular/core';

@Component({
  selector: 'c3-safe-url-api',
  standalone: true,
  template: `
    <h1>Safe URL API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3SafeUrlPipe &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>C3SafeUrlPipe</h2>
      <p>Name: <code>c3SafeUrl</code></p>
      <table class="api-table">
        <thead><tr><th>Input</th><th>Output</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><code>string | null</code></td>
            <td><code>SafeResourceUrl | ''</code></td>
            <td>Sanitizes a URL for use as a resource URL (iframe, embed, object).</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="api-section">
      <h2>Security Note</h2>
      <p>Only use this pipe with URLs you trust. It bypasses Angular's built-in sanitization.</p>
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
export class SafeUrlApiComponent {}


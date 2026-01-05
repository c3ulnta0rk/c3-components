import { Component } from '@angular/core';

@Component({
  selector: 'c3-navbar-api',
  standalone: true,
  template: `
    <h1>Navbar API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3NavbarModule &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Description</h2>
      <p>This module provides navigation bar components for application headers.</p>
    </section>
  `,
  styles: [`.api-section { margin-bottom: 2rem; }
    .api-section h2 { font-size: var(--text-xl); margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-color); }
    pre { background: var(--code-bg); padding: 1rem; border-radius: var(--border-radius-md); }
    pre code { color: var(--code-text); background: transparent; }`]
})
export class NavbarApiComponent {}


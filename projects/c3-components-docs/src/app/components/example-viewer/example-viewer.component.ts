import { Component, ViewEncapsulation, contentChildren, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExampleViewerTabComponent } from './example-viewer-tab.component';
import { C3AutoAnimateDirective } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'example-viewer',
  standalone: true,
  imports: [
    CommonModule,
    C3AutoAnimateDirective,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'example-viewer',
  },
})
export class ExampleViewerComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly tabs = contentChildren(ExampleViewerTabComponent);
  readonly sourceView = signal(false);
  readonly copied = signal(false);
  readonly selectedTabIndex = signal(0);

  toggleSourceView(): void {
    this.sourceView.update(v => !v);
  }

  async copyCode(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    const tabs = this.tabs();
    const selectedTab = tabs[this.selectedTabIndex()];

    if (selectedTab) {
      // Get the code content from the template
      const templateElement = selectedTab.template();
      if (templateElement) {
        // Try to find textarea or pre/code content
        const tempContainer = document.createElement('div');
        const embeddedView = templateElement.createEmbeddedView({});
        embeddedView.detectChanges();

        // Get text content
        let codeContent = '';
        embeddedView.rootNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            const textarea = node.querySelector('textarea');
            const code = node.querySelector('code, pre');
            if (textarea) {
              codeContent = textarea.value || textarea.textContent || '';
            } else if (code) {
              codeContent = code.textContent || '';
            } else {
              codeContent = node.textContent || '';
            }
          }
        });

        embeddedView.destroy();

        if (codeContent.trim()) {
          try {
            await navigator.clipboard.writeText(codeContent.trim());
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        }
      }
    }
  }

  onTabChange(index: number): void {
    this.selectedTabIndex.set(index);
  }
}

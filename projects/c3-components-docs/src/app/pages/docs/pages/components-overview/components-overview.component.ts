import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ComponentItem {
  name: string;
  path: string;
  icon: string;
  description: string;
  badge?: 'new' | 'updated' | 'beta';
}

interface ComponentCategory {
  id: string;
  name: string;
  icon: string;
  items: ComponentItem[];
  expanded: boolean;
}

@Component({
  selector: 'c3-components-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './components-overview.component.html',
  styleUrl: './components-overview.component.scss',
})
export class ComponentsOverviewComponent {
  readonly searchQuery = signal('');

  readonly categories = signal<ComponentCategory[]>([
    {
      id: 'components',
      name: 'Components',
      icon: 'widgets',
      expanded: true,
      items: [
        { name: 'Dialog', path: '/docs/dialog', icon: 'chat_bubble', description: 'Alert, confirm, prompt and custom dialogs' },
        { name: 'Dropdown', path: '/docs/dropdown', icon: 'arrow_drop_down_circle', description: 'Dropdown menus and selects' },
        { name: 'Expansion', path: '/docs/expansion', icon: 'expand_more', description: 'Expandable panels and accordions' },
        { name: 'File Displayer', path: '/docs/file-displayer', icon: 'folder_open', description: 'Display files in grid or list' },
        { name: 'File Viewer', path: '/docs/file-viewer', icon: 'preview', description: 'Preview images, PDFs and videos' },
        { name: 'Flowing Menu', path: '/docs/flowing-menu', icon: 'menu_open', description: 'Animated dropdown menus' },
        { name: 'Menu', path: '/docs/menu', icon: 'menu', description: 'Context menus and navigation' },
        { name: 'Modal', path: '/docs/modal', icon: 'web_asset', description: 'Modal dialogs and overlays' },
        { name: 'Tabs', path: '/docs/tabs', icon: 'tab', description: 'Tabbed navigation and content' },
        { name: 'Trace Card', path: '/docs/trace-card', icon: 'view_agenda', description: 'Timeline and trace displays' },
        { name: 'Tree', path: '/docs/tree', icon: 'account_tree', description: 'Hierarchical tree structures' },
      ],
    },
    {
      id: 'directives',
      name: 'Directives',
      icon: 'tune',
      expanded: true,
      items: [
        { name: 'Auto Animate', path: '/docs/auto-animate', icon: 'animation', description: 'Automatic DOM animations', badge: 'new' },
        { name: 'Prevent Event', path: '/docs/prevent-event', icon: 'block', description: 'Block click and keyboard events' },
        { name: 'Select on Focus', path: '/docs/select-on-focus', icon: 'select_all', description: 'Auto-select input text on focus' },
      ],
    },
    {
      id: 'utilities',
      name: 'Utilities',
      icon: 'build',
      expanded: true,
      items: [
        { name: 'File Input', path: '/docs/file-input', icon: 'upload_file', description: 'File upload with progress', badge: 'new' },
        { name: 'File Upload', path: '/docs/file-upload', icon: 'cloud_upload', description: 'File upload module' },
        { name: 'PDF Viewer', path: '/docs/pdf-viewer', icon: 'picture_as_pdf', description: 'Standalone PDF viewer', badge: 'new' },
        { name: 'Safe URL', path: '/docs/safe-url', icon: 'security', description: 'Sanitize URLs for iframes' },
        { name: 'Signals', path: '/docs/signals', icon: 'sync_alt', description: 'Signal utilities with RxJS', badge: 'new' },
        { name: 'Navbar', path: '/docs/navbar', icon: 'web', description: 'Navigation bar module' },
      ],
    },
    {
      id: 'styles',
      name: 'Styles',
      icon: 'palette',
      expanded: true,
      items: [
        { name: 'Rounded Title', path: '/docs/rounded-title', icon: 'title', description: 'Stylized section titles' },
        { name: 'Highlight Text', path: '/docs/highlight-text', icon: 'highlight', description: 'Text highlighting utilities' },
      ],
    },
  ]);

  readonly filteredCategories = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) {
      return this.categories();
    }

    return this.categories()
      .map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        ),
      }))
      .filter(category => category.items.length > 0);
  });

  readonly totalComponents = computed(() => {
    return this.categories().reduce((acc, cat) => acc + cat.items.length, 0);
  });

  toggleCategory(categoryId: string): void {
    this.categories.update(cats =>
      cats.map(cat =>
        cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }
}


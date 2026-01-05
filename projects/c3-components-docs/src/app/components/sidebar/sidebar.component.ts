import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

interface NavCategory {
  id: string;
  label: string;
  icon: string;
  items: NavItem[];
  expanded: boolean;
}

@Component({
  selector: 'c3-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly categories = signal<NavCategory[]>([
    {
      id: 'getting-started',
      label: 'Getting Started',
      icon: 'rocket_launch',
      expanded: true,
      items: [
        { label: 'Installation', path: 'getting-started', icon: 'download' },
      ],
    },
    {
      id: 'components',
      label: 'Components',
      icon: 'widgets',
      expanded: true,
      items: [
        { label: 'Dialog', path: 'dialog' },
        { label: 'Dropdown', path: 'dropdown' },
        { label: 'Expansion', path: 'expansion' },
        { label: 'File Displayer', path: 'file-displayer' },
        { label: 'File Viewer', path: 'file-viewer' },
        { label: 'Flowing Menu', path: 'flowing-menu' },
        { label: 'Menu', path: 'menu' },
        { label: 'Modal', path: 'modal' },
        { label: 'Tabs', path: 'tabs' },
        { label: 'Trace Card', path: 'trace-card' },
        { label: 'Tree', path: 'tree' },
      ],
    },
    {
      id: 'directives',
      label: 'Directives',
      icon: 'tune',
      expanded: false,
      items: [
        { label: 'Auto Animate', path: 'auto-animate' },
        { label: 'Prevent Event', path: 'prevent-event' },
        { label: 'Select on Focus', path: 'select-on-focus' },
      ],
    },
    {
      id: 'utilities',
      label: 'Utilities',
      icon: 'build',
      expanded: false,
      items: [
        { label: 'File Input', path: 'file-input' },
        { label: 'File Upload', path: 'file-upload' },
        { label: 'PDF Viewer', path: 'pdf-viewer' },
        { label: 'Safe URL', path: 'safe-url' },
        { label: 'Signals', path: 'signals' },
        { label: 'Navbar', path: 'navbar' },
      ],
    },
    {
      id: 'styles',
      label: 'Styles',
      icon: 'palette',
      expanded: false,
      items: [
        { label: 'Rounded Title', path: 'rounded-title' },
        { label: 'Highlight Text', path: 'highlight-text' },
      ],
    },
  ]);

  toggleCategory(categoryId: string): void {
    this.categories.update(cats =>
      cats.map(cat =>
        cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  }

  trackByCategory(index: number, category: NavCategory): string {
    return category.id;
  }

  trackByItem(index: number, item: NavItem): string {
    return item.path;
  }
}


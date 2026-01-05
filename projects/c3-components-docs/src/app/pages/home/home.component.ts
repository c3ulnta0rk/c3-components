import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ComponentCard {
  name: string;
  description: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'c3-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly features: Feature[] = [
    {
      icon: 'speed',
      title: 'Performant',
      description: 'Optimized components built with Angular signals and modern practices.',
    },
    {
      icon: 'palette',
      title: 'Themeable',
      description: 'Full dark/light mode support with CSS custom properties.',
    },
    {
      icon: 'extension',
      title: 'Extensible',
      description: 'Seamlessly integrates with Angular Material and your design system.',
    },
    {
      icon: 'verified',
      title: 'Production Ready',
      description: 'Battle-tested components used in real-world applications.',
    },
  ];

  readonly popularComponents: ComponentCard[] = [
    {
      name: 'Dialog',
      description: 'Alert, confirm, prompt and custom component dialogs.',
      path: '/docs/dialog',
      icon: 'chat_bubble',
    },
    {
      name: 'File Viewer',
      description: 'Preview images, PDFs and videos with actions.',
      path: '/docs/file-viewer',
      icon: 'preview',
    },
    {
      name: 'Tree',
      description: 'Hierarchical data display with expand/collapse.',
      path: '/docs/tree',
      icon: 'account_tree',
    },
    {
      name: 'Flowing Menu',
      description: 'Animated dropdown menus with smooth transitions.',
      path: '/docs/flowing-menu',
      icon: 'menu_open',
    },
  ];
}

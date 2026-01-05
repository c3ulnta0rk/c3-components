import { Component, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

type Theme = 'light' | 'dark' | 'system';

@Component({
  selector: 'c3-header',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>('system');
  readonly searchQuery = signal('');
  readonly searchOpen = signal(false);

  constructor() {
    // Load saved theme on init
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('c3-theme') as Theme | null;
      if (savedTheme) {
        this.theme.set(savedTheme);
      }
    }

    // Apply theme changes
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const currentTheme = this.theme();
        localStorage.setItem('c3-theme', currentTheme);
        this.applyTheme(currentTheme);
      }
    });
  }

  toggleTheme(): void {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(this.theme());
    const nextIndex = (currentIndex + 1) % themes.length;
    this.theme.set(themes[nextIndex]);
  }

  getThemeIcon(): string {
    switch (this.theme()) {
      case 'light':
        return 'light_mode';
      case 'dark':
        return 'dark_mode';
      default:
        return 'contrast';
    }
  }

  getThemeTooltip(): string {
    switch (this.theme()) {
      case 'light':
        return 'Light mode (click to switch)';
      case 'dark':
        return 'Dark mode (click to switch)';
      default:
        return 'System theme (click to switch)';
    }
  }

  toggleSearch(): void {
    this.searchOpen.update(v => !v);
    if (!this.searchOpen()) {
      this.searchQuery.set('');
    }
  }

  onSearch(): void {
    // TODO: Implement search functionality
    console.log('Search:', this.searchQuery());
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    if (theme === 'system') {
      root.removeAttribute('data-theme');
      root.style.colorScheme = '';
    } else {
      root.setAttribute('data-theme', theme);
      root.style.colorScheme = theme;
    }
  }
}


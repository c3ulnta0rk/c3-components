import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightJsModule } from 'ngx-highlight-js';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    importProvidersFrom([BrowserAnimationsModule, HighlightJsModule]),
  ],
};

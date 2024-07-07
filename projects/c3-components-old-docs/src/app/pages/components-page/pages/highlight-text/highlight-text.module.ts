import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightTextRoutingModule } from './highlight-text-routing.module';
import { HighlightTextOverviewComponent } from './pages/overview/overview.component';
import { HighlightTextApiComponent } from './pages/api/api.component';
import { HighlightTextExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    HighlightTextOverviewComponent,
    HighlightTextApiComponent,
    HighlightTextExamplesComponent,
  ],
  imports: [CommonModule, ComponentNavComponent, HighlightTextRoutingModule],
})
export class HighlightTextModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundedTitleRoutingModule } from './rounded-title-routing.module';
import { RoundedTitleOverviewComponent } from './pages/overview/overview.component';
import { RoundedTitleApiComponent } from './pages/api/api.component';
import { RoundedTitleExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    RoundedTitleOverviewComponent,
    RoundedTitleApiComponent,
    RoundedTitleExamplesComponent,
  ],
  imports: [CommonModule, ComponentNavComponent, RoundedTitleRoutingModule],
})
export class RoundedTitleModule {}

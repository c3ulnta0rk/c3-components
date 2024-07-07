import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuOverviewComponent } from './pages/overview/overview.component';
import { MenuApiComponent } from './pages/api/api.component';
import { MenuExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    MenuOverviewComponent,
    MenuApiComponent,
    MenuExamplesComponent,
  ],
  imports: [CommonModule, ComponentNavComponent, MenuRoutingModule],
})
export class MenuModule {}

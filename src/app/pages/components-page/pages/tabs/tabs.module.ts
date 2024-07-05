import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsOverviewComponent } from './pages/overview/overview.component';
import { TabsApiComponent } from './pages/api/api.component';
import { TabsExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    TabsOverviewComponent,
    TabsApiComponent,
    TabsExamplesComponent,
  ],
  imports: [ComponentNavComponent, TabsRoutingModule],
})
export class TabsModule {}

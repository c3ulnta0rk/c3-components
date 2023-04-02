import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarOverviewComponent } from './pages/overview/overview.component';
import { NavbarApiComponent } from './pages/api/api.component';
import { NavbarExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    NavbarOverviewComponent,
    NavbarApiComponent,
    NavbarExamplesComponent,
  ],
  imports: [CommonModule, ComponentNavComponent, NavbarRoutingModule],
})
export class NavbarModule {}

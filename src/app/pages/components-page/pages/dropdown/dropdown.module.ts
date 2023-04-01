import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownApiComponent } from './pages/api/api.component';
import { DropdownOverviewComponent } from './pages/overview/overview.component';
import { DropdownExamplesComponent } from './pages/examples/examples.component';

import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { C3DropdownModule } from 'c3-components';

@NgModule({
  declarations: [
    DropdownApiComponent,
    DropdownOverviewComponent,
    DropdownExamplesComponent,
  ],
  imports: [
    CommonModule,
    DropdownRoutingModule,
    ComponentNavComponent,
    C3DropdownModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class DropdownModule {}

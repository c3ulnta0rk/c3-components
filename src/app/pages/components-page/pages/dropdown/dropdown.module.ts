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
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';

@NgModule({
  declarations: [
    DropdownApiComponent,
    DropdownOverviewComponent,
    DropdownExamplesComponent,
  ],
  imports: [
    C3DropdownModule,
    CommonModule,
    ComponentNavComponent,
    DropdownRoutingModule,
    ExampleViewerComponent,
    MatButtonModule,
    MatCardModule,
  ],
})
export class DropdownModule {}

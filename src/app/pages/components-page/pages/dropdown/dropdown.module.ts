import { NgModule } from '@angular/core';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownApiComponent } from './pages/api/api.component';
import { DropdownOverviewComponent } from './pages/overview/overview.component';
import { DropdownExamplesComponent } from './pages/examples/examples.component';

import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';
import { C3DropdownModule } from 'projects/c3-components/src/public-api';

@NgModule({
  declarations: [
    DropdownApiComponent,
    DropdownOverviewComponent,
    DropdownExamplesComponent,
  ],
  imports: [
    C3DropdownModule,
    ComponentNavComponent,
    DropdownRoutingModule,
    ExampleViewerComponent,
    MatButtonModule,
    MatCardModule,
  ],
})
export class DropdownModule {}

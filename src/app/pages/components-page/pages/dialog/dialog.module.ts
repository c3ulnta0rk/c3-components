import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogOverviewComponent } from './pages/overview/overview.component';
import { DialogApiComponent } from './pages/api/api.component';
import { DialogExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';
import { C3DialogModule } from 'c3-components';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { ExampleCustomComponentDialogComponent } from './components/example-custom-component-dialog/example-custom-component-dialog.component';

@NgModule({
  declarations: [
    DialogOverviewComponent,
    DialogApiComponent,
    DialogExamplesComponent,
    ExampleCustomComponentDialogComponent,
  ],
  imports: [
    C3DialogModule,
    ComponentNavComponent,
    CommonModule,
    DialogRoutingModule,
    ExampleViewerComponent,
    MatButtonModule,
  ],
})
export class DialogModule {}

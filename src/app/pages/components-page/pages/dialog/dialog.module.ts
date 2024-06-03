import { NgModule } from '@angular/core';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogOverviewComponent } from './pages/overview/overview.component';
import { DialogApiComponent } from './pages/api/api.component';
import { DialogExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';
import { C3DialogModule } from 'c3-components';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { HighlightJsDirective } from 'ngx-highlight-js';

@NgModule({
  declarations: [
    DialogOverviewComponent,
    DialogApiComponent,
    DialogExamplesComponent,
  ],
  imports: [
    C3DialogModule,
    ComponentNavComponent,
    DialogRoutingModule,
    ExampleViewerComponent,
    MatButtonModule,
    HighlightJsDirective,
  ],
})
export class DialogModule {}

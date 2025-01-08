import { NgModule } from '@angular/core';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogOverviewComponent } from './pages/overview/overview.component';
import { DialogApiComponent } from './pages/api/api.component';
import { DialogExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';
import { ExampleViewerComponent } from 'projects/c3-components-old-docs/src/app/components/example-viewer/example-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3DialogModule } from 'projects/c3-components/src/public-api';

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

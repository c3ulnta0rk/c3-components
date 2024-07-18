import { NgModule } from '@angular/core';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogApiComponent } from './pages/api/api.component';
import { DialogExamplesComponent } from './pages/examples/examples.component';
import { MatButtonModule } from '@angular/material/button';
import { C3DialogModule } from 'projects/c3-components/src/public-api';
import { ComponentNavComponent } from 'projects/c3-components-docs/src/app/components/component-nav/component-nav.component';
import { MatCardModule } from '@angular/material/card';
import { HighlightJsDirective, HighlightJsModule } from 'ngx-highlight-js';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';

@NgModule({
  declarations: [DialogApiComponent, DialogExamplesComponent],
  imports: [
    C3DialogModule,
    ComponentNavComponent,
    DialogRoutingModule,
    MatCardModule,
    MatButtonModule,
    ExampleViewerComponent,
    HighlightJsDirective,
  ],
})
export class DialogModule {}

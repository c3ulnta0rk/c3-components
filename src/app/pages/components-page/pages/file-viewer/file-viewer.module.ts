import { NgModule } from '@angular/core';

import { FileRoutingModule } from './file-viewer-routing.module';
import { FileViewerApiComponent } from './pages/api/api.component';
import { FileViewerExamplesComponent } from './pages/examples/examples.component';
import { FileViewerOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';
import { BasicViewerComponent } from './components/basic-viewer/basic-viewer.component';
import { CustomClientComponent } from './components/custom-client/custom-client.component';
import { DialogViewerComponent } from './components/dialog-viewer/dialog-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { C3FileViewerModule } from 'projects/c3-components/src/public-api';

@NgModule({
  declarations: [
    FileViewerApiComponent,
    FileViewerExamplesComponent,
    FileViewerOverviewComponent,
    BasicViewerComponent,
    CustomClientComponent,
    DialogViewerComponent,
  ],
  imports: [
    ComponentNavComponent,
    FileRoutingModule,
    C3FileViewerModule,
    ExampleViewerComponent,
    MatButtonModule,
  ],
})
export class FileViewerModule {}

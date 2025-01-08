import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-upload-routing.module';
import { FileUploadApiComponent } from './pages/api/api.component';
import { FileUploadExamplesComponent } from './pages/examples/examples.component';
import { FileUploadOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    FileUploadApiComponent,
    FileUploadExamplesComponent,
    FileUploadOverviewComponent,
  ],
  imports: [ComponentNavComponent, CommonModule, FileRoutingModule],
})
export class FileUploadModule {}

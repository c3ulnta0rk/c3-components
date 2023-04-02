import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileApiComponent } from './pages/api/api.component';
import { FileExamplesComponent } from './pages/examples/examples.component';
import { FileOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    FileApiComponent,
    FileExamplesComponent,
    FileOverviewComponent,
  ],
  imports: [ComponentNavComponent, CommonModule, FileRoutingModule],
})
export class FileModule {}

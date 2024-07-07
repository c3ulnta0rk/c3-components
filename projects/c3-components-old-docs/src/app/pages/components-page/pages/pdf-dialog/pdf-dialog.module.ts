import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfDialogRoutingModule } from './pdf-dialog-routing.module';
import { PdfDialogOverviewComponent } from './pages/overview/overview.component';
import { PdfDialogApiComponent } from './pages/api/api.component';
import { PdfDialogExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    PdfDialogOverviewComponent,
    PdfDialogApiComponent,
    PdfDialogExamplesComponent,
  ],
  imports: [CommonModule, ComponentNavComponent, PdfDialogRoutingModule],
})
export class PdfDialogModule {}

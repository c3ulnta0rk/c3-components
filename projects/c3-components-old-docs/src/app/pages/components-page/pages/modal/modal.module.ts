import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalOverviewComponent } from './pages/overview/overview.component';
import { ModalApiComponent } from './pages/api/api.component';
import { ModalExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    ModalOverviewComponent,
    ModalApiComponent,
    ModalExamplesComponent,
  ],
  imports: [CommonModule, ComponentNavComponent, ModalRoutingModule],
})
export class ModalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogOverviewComponent } from './pages/overview/overview.component';
import { DialogApiComponent } from './pages/api/api.component';
import { DialogExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

@NgModule({
  declarations: [
    DialogOverviewComponent,
    DialogApiComponent,
    DialogExamplesComponent,
  ],
  imports: [ComponentNavComponent, CommonModule, DialogRoutingModule],
})
export class DialogModule {}

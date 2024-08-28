import { NgModule } from '@angular/core';

import { DialogApiComponent } from './pages/api/api.component';
import { DialogRoutingModule } from './dialog-routing.module';

@NgModule({
  declarations: [DialogApiComponent],
  imports: [DialogRoutingModule],
})
export class DialogModule {}

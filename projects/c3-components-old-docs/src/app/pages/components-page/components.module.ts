import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ComponentsRoutingModule } from './components-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsComponent } from './components/components-pages/components.component';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class ComponentsModule {}

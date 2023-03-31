import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownApiComponent } from './pages/api/api.component';
import { DropdownOverviewComponent } from './pages/overview/overview.component';
import { DropdownExamplesComponent } from './pages/examples/examples.component';


@NgModule({
  declarations: [
    DropdownApiComponent,
    DropdownOverviewComponent,
    DropdownExamplesComponent
  ],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }

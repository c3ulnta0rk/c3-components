import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3DropdownComponent } from './components/c3-dropdown.component';
import { C3DropdownTrigger } from './directives/c3-dropdown.trigger';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [C3DropdownComponent, C3DropdownTrigger],
  exports: [C3DropdownComponent, C3DropdownTrigger],
})
export class C3DropdownModule {}

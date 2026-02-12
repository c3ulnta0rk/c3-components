import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { C3TabsComponent } from './components/c3-tabs/c3-tabs.component';
import { C3TabComponent } from './components/c3-tab/c3-tab.component';

@NgModule({
  declarations: [C3TabsComponent],
  imports: [CommonModule, RouterModule, MatRippleModule, C3TabComponent],
  exports: [C3TabsComponent, C3TabComponent],
})
export class C3TabsModule {}

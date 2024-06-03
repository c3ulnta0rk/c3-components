import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3ExpansionHeaderComponent } from './components/c3-expansion-header/c3-expansion-header.component';
import { C3ExpansionComponent } from './components/c3-expansion/c3-expansion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { C3AutoAnimateDirective } from '../c3-auto-animate/C3AutoAnimate.directive';

@NgModule({
  declarations: [C3ExpansionComponent, C3ExpansionHeaderComponent],
  imports: [
    CommonModule,
    C3AutoAnimateDirective,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [C3ExpansionComponent, C3ExpansionHeaderComponent],
})
export class C3ExpansionModule {}

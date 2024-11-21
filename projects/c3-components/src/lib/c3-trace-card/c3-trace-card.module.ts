import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3TraceCardComponent } from './components/c3-trace-card/c3-trace-card.component';
import { C3TraceCardTitleComponent } from './components/c3-trace-card-title/c3-trace-card-title.component';
import { C3TraceCardContentComponent } from './components/c3-trace-card-content/c3-trace-card-content.component';
import { C3TraceCardAlignLeftDirective } from './directives/align-left.directive';
import { C3TraceCardAlignRightDirective } from './directives/align-right.directive';

@NgModule({
  declarations: [
    C3TraceCardComponent,
    C3TraceCardTitleComponent,
    C3TraceCardContentComponent,
  ],
  imports: [
    CommonModule,
    C3TraceCardAlignLeftDirective,
    C3TraceCardAlignRightDirective,
  ],
  exports: [
    C3TraceCardComponent,
    C3TraceCardTitleComponent,
    C3TraceCardContentComponent,
    C3TraceCardAlignLeftDirective,
    C3TraceCardAlignRightDirective,
  ],
})
export class C3TraceCardModule {}

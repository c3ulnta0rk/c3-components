import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3SafeUrlPipe } from './pipes/c3-safe-url.pipe';

@NgModule({
  declarations: [C3SafeUrlPipe],
  imports: [CommonModule],
  exports: [C3SafeUrlPipe],
})
export class C3SafeUrlModule {}

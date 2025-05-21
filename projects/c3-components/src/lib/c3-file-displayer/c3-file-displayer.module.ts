import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3FileDisplayGridComponent } from './c3-file-display-grid/c3-file-display-grid.component';
import { C3FileDisplayListComponent } from './c3-file-display-list/c3-file-display-list.component';
import { C3FileDisplayCardComponent } from './c3-file-display-card/c3-file-display-card.component';
import { C3FileDisplayIconComponent } from './c3-file-display-icon/c3-file-display-icon.component';
import {
  C3FileDisplayListCellDefDirective,
  C3FileDisplayListColumnDefDirective,
} from './c3-file-display-list/c3-file-display-list-column-def.directive';
import { C3FileDisplayListHeaderCellDefDirective } from './c3-file-display-list/c3-file-display-list-column-def.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    C3FileDisplayGridComponent,
    C3FileDisplayListComponent,
    C3FileDisplayCardComponent,
    C3FileDisplayIconComponent,
    C3FileDisplayListColumnDefDirective,
    C3FileDisplayListHeaderCellDefDirective,
    C3FileDisplayListCellDefDirective,
  ],
  exports: [
    C3FileDisplayGridComponent,
    C3FileDisplayListComponent,
    C3FileDisplayCardComponent,
    C3FileDisplayIconComponent,
    C3FileDisplayListColumnDefDirective,
    C3FileDisplayListHeaderCellDefDirective,
    C3FileDisplayListCellDefDirective,
  ],
})
export class C3FileDisplayerModule {}

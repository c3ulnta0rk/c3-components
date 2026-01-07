import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  effect,
  inject,
  input,
  output,
  viewChild,
  contentChildren,
  QueryList,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { C3FileViewerDialogComponent } from '../../c3-file-viewer/components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.component';
import { FileMetadata } from '../../c3-file-viewer/models/file-metadata';
import { C3FileViewer } from '../../c3-file-viewer/models/file-viewer';
import { C3FileViewerConfig } from '../../c3-file-viewer/models/file-viewer-config.model';
import { MatIconModule } from '@angular/material/icon';
import { C3FileViewerModule } from '../../c3-file-viewer/c3-file-viewer.module';
import { C3FileDisplayIconComponent } from '../c3-file-display-icon/c3-file-display-icon.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { C3StopPropagationDirective } from '../../c3-prevent-event';
import { C3_FILE_DISPLAY_LIST } from './tokens';
import { C3FileDisplayListColumnDefDirective } from './c3-file-display-list-column-def.directive';
@Component({
  selector: 'c3-file-display-list',
  standalone: true,
  imports: [
    C3StopPropagationDirective,
    C3FileViewerModule,
    C3FileDisplayIconComponent,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatMenuModule,
  ],
  templateUrl: './c3-file-display-list.component.html',
  styleUrl: './c3-file-display-list.component.scss',
  providers: [
    {
      provide: C3_FILE_DISPLAY_LIST,
      useExisting: C3FileDisplayListComponent,
    },
  ],
})
export class C3FileDisplayListComponent {
  public readonly files = input.required<
    Array<
      FileMetadata & {
        location: string;
      }
    >
  >();
  public readonly config = input<C3FileViewerConfig>();
  public readonly displayFn = input<(file: FileMetadata & { location: string }) => string>((file) => file.name);
  public readonly columns = input<string[]>(['icon', 'name', 'date']);

  public readonly deletable = input<boolean>(false);
  public readonly onDelete = output<FileMetadata>();
  public readonly dialog = viewChild(C3FileViewerDialogComponent);

  private readonly _columnDefs = contentChildren(C3FileDisplayListColumnDefDirective);
  private readonly _viewContainer = inject(ViewContainerRef);

  public fileViewer = new C3FileViewer({
    client: inject(HttpClient),
  });

  constructor() {
    effect(() => {
      this.fileViewer.files = this.files();
    });

    effect(() => {
      if (this.config()) this.fileViewer.config = this.config()!;
    });
  }

  openDialog($event: MouseEvent, index: number): void {
    $event.stopPropagation();
    this.fileViewer.currentIndex = index;
    this.dialog()?.openDialog();
  }

  getColumnDef(columnName: string): C3FileDisplayListColumnDefDirective | undefined {
    return this._columnDefs().find((col) => col.title() === columnName);
  }
}

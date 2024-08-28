import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { FileMetadata } from '../../c3-file-viewer/models/file-metadata';
import { C3FileDisplayCardComponent } from '../c3-file-display-card/c3-file-display-card.component';
import { C3FileViewerModule } from '../../c3-file-viewer/c3-file-viewer.module';
import { C3FileViewer } from '../../c3-file-viewer/models/file-viewer';
import { HttpClient } from '@angular/common/http';
import { C3FileViewerDialogComponent } from '../../c3-file-viewer/components/public/c3-file-viewer-dialog/c3-file-viewer-dialog.component';
import { C3FileViewerConfig } from '../../c3-file-viewer/models/file-viewer-config.model';

@Component({
  selector: 'c3-file-display-grid',
  standalone: true,
  imports: [CommonModule, C3FileDisplayCardComponent, C3FileViewerModule],
  templateUrl: './c3-file-display-grid.component.html',
  styleUrl: './c3-file-display-grid.component.scss',
})
export class C3FileDisplayGridComponent {
  public readonly files = input.required<
    Array<
      FileMetadata & {
        location: string;
      }
    >
  >();
  public readonly config = input<C3FileViewerConfig>();
  public readonly displayFn = input<
    (file: FileMetadata & { location: string }) => string
  >((file) => file.name);

  public readonly deletable = input<boolean>(false);
  public readonly onDelete = output<FileMetadata>();
  public readonly dialog = viewChild(C3FileViewerDialogComponent);

  public fileViewer = new C3FileViewer({
    client: inject(HttpClient),
  });

  constructor() {
    effect(
      () => {
        this.fileViewer.files = this.files();
      },
      {
        allowSignalWrites: true,
      }
    );

    effect(
      () => {
        if (this.config()) this.fileViewer.config = this.config()!;
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  openDialog($event: MouseEvent, index: number): void {
    $event.stopPropagation();
    this.fileViewer.currentIndex = index;
    this.dialog()?.openDialog();
  }
}

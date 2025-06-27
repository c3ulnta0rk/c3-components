import { Component, input } from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
  selector: 'c3-file-viewer-default',
  templateUrl: './c3-file-viewer-default.component.html',
  styleUrl: './c3-file-viewer-default.component.scss',
  standalone: false,
})
export class C3FileViewerDefaultComponent {
  public readonly fileViewer = input.required<C3FileViewer>();
}

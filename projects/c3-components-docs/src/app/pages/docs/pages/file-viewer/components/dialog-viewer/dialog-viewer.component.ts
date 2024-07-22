import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3FileViewerConfig,
  C3FileViewer,
  C3FileViewerModule,
} from 'projects/c3-components/src/public-api';
import { configDemo, crabbyImgs } from '../../../../../../files-demo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dialog-viewer',
  standalone: true,
  imports: [C3FileViewerModule, MatButtonModule],
  templateUrl: './dialog-viewer.component.html',
  styleUrls: ['./dialog-viewer.component.scss'],
})
export class DialogViewerComponent {
  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: configDemo,
    client: inject(HttpClient),
  });
}

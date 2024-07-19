import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3FileViewerConfig,
  C3FileViewer,
  C3FileViewerModule,
} from 'projects/c3-components/src/public-api';
import { crabbyImgs } from '../../files';

@Component({
  selector: 'dialog-viewer',
  standalone: true,
  imports: [C3FileViewerModule, MatButtonModule],
  templateUrl: './dialog-viewer.component.html',
  styleUrls: ['./dialog-viewer.component.scss'],
})
export class DialogViewerComponent {
  public config: C3FileViewerConfig = {
    btnContainerClass: 'other',
    btnClass: 'btn btn-hover-primary px-1',
    btnSubClass: 'material-icons font-size-xl',
    zoomFactor: 0.1,
    wheelZoom: true,
    allowFullscreen: true,
    allowKeyboardNavigation: true,
    height: '640px',
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: false,
      prev: false,
      reset: true,
    },
    btnIcons: {
      next: {
        text: 'navigate_next',
      },
      prev: {
        text: 'navigate_before',
      },
    },
    customBtns: [],
  };

  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: this.config,
  });
}

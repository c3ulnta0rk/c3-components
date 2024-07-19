import { Component } from '@angular/core';
import {
  C3FileViewerConfig,
  C3FileViewer,
  CustomFileEvent,
  C3FileViewerModule,
} from 'projects/c3-components/src/public-api';
import { crabbyImgs } from '../../files';

@Component({
  selector: 'basic-viewer',
  standalone: true,
  imports: [C3FileViewerModule],
  templateUrl: './basic-viewer.component.html',
  styleUrls: ['./basic-viewer.component.scss'],
})
export class BasicViewerComponent {
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

  handleEvent(event: CustomFileEvent) {
    console.log(`${event?.name} has been clicked on img ${event?.fileUrl}`);

    switch (event?.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}

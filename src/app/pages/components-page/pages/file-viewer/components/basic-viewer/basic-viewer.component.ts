import { Component } from '@angular/core';
import {
  CustomFileEvent,
  C3FileViewerConfig,
  FileMetadata,
  C3FileViewer,
} from 'c3-components';

@Component({
  selector: 'basic-viewer',
  templateUrl: './basic-viewer.component.html',
  styleUrls: ['./basic-viewer.component.sass'],
})
export class BasicViewerComponent {
  public images: Array<FileMetadata> = [
    {
      name: 'image1',
      type: 'image/png',
      location:
        'https://th.bing.com/th/id/OIG3.z4YZpptEw4ARkQaBM7sF?w=1024&h=1024&rs=1&pid=ImgDetMain',
    },
    {
      name: 'image2',
      type: 'image/jpg',
      location:
        'https://cdn.discordapp.com/attachments/346645203626491905/1096566281894907944/owl-g35ff5e73c_1920.jpg',
    },
  ];
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
    files: this.images,
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

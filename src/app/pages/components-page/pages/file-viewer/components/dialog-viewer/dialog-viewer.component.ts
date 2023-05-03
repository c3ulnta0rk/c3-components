import { Component } from '@angular/core';
import { C3FileViewer, C3FileViewerConfig, FileMetadata } from 'c3-components';

@Component({
  selector: 'dialog-viewer',
  templateUrl: './dialog-viewer.component.html',
  styleUrls: ['./dialog-viewer.component.sass'],
})
export class DialogViewerComponent {
  public images: Array<FileMetadata> = [
    {
      name: 'image1',
      type: 'image/png',
      location:
        'https://media.discordapp.net/attachments/1008571172792828055/1096409134896775208/c3ulnta0rk_a_goat_with_this_logo_no_background_no_text_2269a9f9-1823-4f99-b87a-e2a82218b4a1.png?width=468&height=468',
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
}

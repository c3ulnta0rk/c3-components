import { Component } from '@angular/core';
import { CustomFileEvent, C3FileViewerConfig } from 'c3-components';

@Component({
  selector: 'basic-viewer',
  templateUrl: './basic-viewer.component.html',
  styleUrls: ['./basic-viewer.component.sass'],
})
export class BasicViewerComponent {
  images = [
    'https://media.discordapp.net/attachments/1008571172792828055/1096409134896775208/c3ulnta0rk_a_goat_with_this_logo_no_background_no_text_2269a9f9-1823-4f99-b87a-e2a82218b4a1.png?width=468&height=468',
    'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg',
  ];

  imageIndexOne = 0;

  config: C3FileViewerConfig = {
    btnContainerClass: 'other',
    btnClass: 'btn btn-hover-primary px-1',
    btnSubClass: 'material-icons font-size-xl',
    zoomFactor: 0.1,
    containerBackgroundColor: '#ccc',
    wheelZoom: true,
    allowFullscreen: true,
    allowKeyboardNavigation: true,
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: false,
      prev: false,
      reset: true,
    },
    customBtns: [],
  };

  handleEvent(event: CustomFileEvent) {
    console.log(`${event.name} has been clicked on img ${event.fileUrl}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}

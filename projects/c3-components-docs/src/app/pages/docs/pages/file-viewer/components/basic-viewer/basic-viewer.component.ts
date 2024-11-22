import { Component, inject } from '@angular/core';
import {
  C3FileViewer,
  CustomFileEvent,
  C3FileViewerModule,
} from 'projects/c3-components/src/public-api';
import { configDemo, crabbyImgs } from '../../../../../../files-demo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'basic-viewer',
  standalone: true,
  imports: [C3FileViewerModule],
  templateUrl: './basic-viewer.component.html',
  styleUrls: ['./basic-viewer.component.scss'],
})
export class BasicViewerComponent {
  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: configDemo,
    client: inject(HttpClient),
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

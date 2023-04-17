import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { C3FileViewerConfig, FileMetadata } from 'c3-components';

@Component({
  selector: 'custom-client',
  templateUrl: './custom-client.component.html',
  styleUrls: ['./custom-client.component.sass'],
})
export class CustomClientComponent {
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
        'https://cdn.discordapp.com/attachments/346645203626491905/1096566069570846810/animal-6717792_960_720.jpg',
    },
  ];

  public imageIndexOne = 0;
  public config: C3FileViewerConfig = {
    height: '640px',
  };

  constructor(private _http: HttpClient) {
    this.config.customClient = _http.get.bind(_http);
  }
}

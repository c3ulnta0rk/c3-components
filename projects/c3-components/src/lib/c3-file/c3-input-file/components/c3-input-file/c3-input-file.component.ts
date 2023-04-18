import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { C3InputFile } from '../../class/c3-input-file';

@Component({
  selector: 'c3-input-file',
  templateUrl: './c3-input-file.component.html',
  styleUrls: ['./c3-input-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C3InputFileComponent {
  @Input() accept!: string;
  @Input() multiple: Boolean = false;
  @Input() dest: string = 'api/upload';
  @Input() baseUrl: string = 'localhost:3000';
  @Input() method: string = 'POST';
  @Input() headers?: Object;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Output()
  fileAdded: EventEmitter<C3InputFile> = new EventEmitter<C3InputFile>();

  click() {
    this.fileInput.nativeElement.click();
  }

  change({ target }: any) {
    const files = Array.from(target.files as FileList);

    files.forEach((file) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('upload', file);

      // ecoute la progression de l'upload
      xhr.upload.addEventListener(
        'progress',
        (progress) => {
          _file.progression = Math.round(
            (progress.loaded / progress.total) * 100
          );
        },
        false
      );

      // ecoute si une erreur survient lors de l'upload
      xhr.addEventListener('error', (event) => console.log(event), false);

      // ecoute si l'utilisateur annul l'upload en cours
      xhr.addEventListener('abort', (event) => console.log(event), false);

      xhr.addEventListener('readystatechange', (ev) => {
        if (xhr.readyState === 4) {
          const data = JSON.parse(xhr.response);
          _file.name = data.name;
          _file.id = data.id;
          _file.path = data.path;
          _file.response = data;
          if (_file.progression !== 100) _file.progression = 100;
          _file.progressionChange.complete();
          _file.emit('completed');
        }
      });

      // initialise le type de connection et l'url
      xhr.open(this.method, `${this.baseUrl}/${this.dest}`);

      // set header if data is transmitted
      if (this.headers)
        for (const [key, value] of Object.entries(this.headers))
          xhr.setRequestHeader(key, value);

      // start upload
      xhr.send(formData);

      const _file: C3InputFile = new C3InputFile({
        fileName: file.name,
        mimetype: file.type,
        size: file.size,
      });

      _file.on('abord', () => {
        xhr.abort();
      });
      this.fileAdded.emit(_file);
    });
  }
}

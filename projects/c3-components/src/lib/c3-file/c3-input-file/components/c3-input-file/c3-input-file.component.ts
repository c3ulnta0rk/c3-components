import {
  Component,
  ChangeDetectionStrategy,
  input,
  viewChild,
  ElementRef,
  output,
  inject,
} from '@angular/core';
import { C3InputFile } from '../../class/c3-input-file';
import { C3FileUploaderService } from '../../services/c3-file-uploader.service';

@Component({
  selector: 'c3-input-file',
  templateUrl: './c3-input-file.component.html',
  styleUrls: ['./c3-input-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class C3InputFileComponent {
  public readonly accept = input.required<string>();
  public readonly multiple = input<boolean>(false);
  public readonly dest = input<string>('api/upload');
  public readonly baseUrl = input<string>('localhost:3000');
  public readonly method = input<string>('POST');
  public readonly headers = input<{ [key: string]: string } | undefined>(undefined);

  public readonly fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');
  public readonly fileAdded = output<C3InputFile>();

  private readonly _uploader = inject(C3FileUploaderService);

  click() {
    this.fileInput().nativeElement.click();
  }

  change({ target }: any) {
    const files = Array.from(target.files as FileList);

    files.forEach((file) => {
      // Configuration de l'objet C3InputFile
      const _file: C3InputFile = new C3InputFile({
        fileName: file.name,
        mimetype: file.type,
        size: file.size,
      });

      // Construction de l'URL complète
      // Note: Utilisation de baseUrl + dest. Si baseUrl est vide, utiliser '/' ou laisser tel quel.
      const url = this.baseUrl() ? `${this.baseUrl()}/${this.dest()}` : this.dest();

      // Démarrage de l'upload via le service
      const subscription = this._uploader.upload(_file, file, {
        url,
        method: this.method(),
        headers: this.headers()
      });

      // Gestion de l'annulation
      _file.on('abord', () => {
        subscription.unsubscribe();
        _file.emit('aborted'); // Optionnel, si on veut notifier
      });

      this.fileAdded.emit(_file);
    });
  }
}

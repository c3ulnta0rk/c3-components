import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterContentInit,
} from '@angular/core';
import { C3InputFile } from '../../class/c3-input-file';
import { C3InputFileComponent } from '../c3-input-file/c3-input-file.component';

@Component({
    selector: 'c3-input-file-displayer',
    template: `
    <ng-container *ngIf="files.length">
      <div class="c3-input-file-displayer mat-card">
        <div
          class="title-bar mat-elevation-z4"
          fxLayout="row"
          fxLayoutAlign="space-between center"
        >
          <span>Liste des téléversement</span>
          <div>
            <button mat-icon-button (click)="toggleMinimize()">
              <mat-icon *ngIf="minimized">open_in_full</mat-icon>
              <mat-icon *ngIf="!minimized">close_fullscreen</mat-icon>
            </button>
            <button mat-icon-button [disabled]="!closable" (click)="close()">
              <mat-icon>close</mat-icon>
            </button>
          </div>
        </div>
        <div class="container-list" *ngIf="!minimized">
          <div class="item" *ngFor="let item of files">
            <div class="title">{{ item.fileName }}</div>
            <div
              fxLayout="row"
              fxLayoutAlign="space-around center"
              fxLayoutGap="4px"
            >
              <mat-progress-bar
                fxFlex
                [color]="item.aborded ? 'warn' : 'primary'"
                [mode]="item.aborded ? 'determinate' : 'buffer'"
                [value]="item.progression"
                [bufferValue]="0"
              >
              </mat-progress-bar>

              <button
                mat-icon-button
                [disabled]="item.aborded || item.loaded"
                (click)="item.abord()"
              >
                <mat-icon>cancel</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
    styles: [],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class C3InputFileDisplayerComponent implements AfterContentInit {
  @Input() c3InputFile!: C3InputFileComponent;
  files: Array<C3InputFile> = [];
  @Input() autoclose?: boolean | number;

  minimized: boolean = false;

  get closable() {
    return this.files.every(({ loaded, aborded }) => loaded || aborded);
  }

  constructor() {}

  ngAfterContentInit(): void {
    this.c3InputFile.fileAdded.subscribe(
      (newFile: C3InputFile) => {
        this.files.push(newFile);
        if (this.autoclose)
          if (newFile.loaded) this._autoclose();
          else newFile.on('loaded', () => this._autoclose());
      },
      console.error,
      () => {
        console.log('completed');
      }
    );
  }

  toggleMinimize() {
    this.minimized = !this.minimized;
  }

  _autoclose() {
    if (this.closable)
      if (typeof this.autoclose === 'number')
        setTimeout(() => this.close(), 1000 * this.autoclose);
      else this.close();
  }

  close() {
    this.files = [];
  }
}

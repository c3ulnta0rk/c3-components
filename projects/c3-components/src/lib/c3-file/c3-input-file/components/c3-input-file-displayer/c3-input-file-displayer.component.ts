import {
  Component,
  OnInit,
  ViewEncapsulation,
  input,
  AfterContentInit,
  effect,
} from '@angular/core';
import { C3InputFile } from '../../class/c3-input-file';
import { C3InputFileComponent } from '../c3-input-file/c3-input-file.component';

@Component({
    selector: 'c3-input-file-displayer',
    template: `
    @if (files.length) {
      <div class="c3-input-file-displayer mat-card">
        <div
          class="title-bar mat-elevation-z4"
          fxLayout="row"
          fxLayoutAlign="space-between center"
          >
          <span>Liste des téléversement</span>
          <div>
            <button mat-icon-button (click)="toggleMinimize()">
              @if (minimized) {
                <mat-icon>open_in_full</mat-icon>
              }
              @if (!minimized) {
                <mat-icon>close_fullscreen</mat-icon>
              }
            </button>
            <button mat-icon-button [disabled]="!closable" (click)="close()">
              <mat-icon>close</mat-icon>
            </button>
          </div>
        </div>
        @if (!minimized) {
          <div class="container-list">
            @for (item of files; track item) {
              <div class="item">
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
            }
          </div>
        }
      </div>
    }
    `,
    styles: [],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class C3InputFileDisplayerComponent implements AfterContentInit {
  public readonly c3InputFile = input.required<C3InputFileComponent>();
  files: Array<C3InputFile> = [];
  public readonly autoclose = input<boolean | number | undefined>(undefined);

  minimized: boolean = false;

  get closable() {
    return this.files.every(({ loaded, aborded }) => loaded || aborded);
  }

  constructor() {
    effect(() => {
      const inputFile = this.c3InputFile();
      const autoCloseValue = this.autoclose();

      inputFile.fileAdded.subscribe((newFile: C3InputFile) => {
        this.files.push(newFile);
        if (autoCloseValue)
          if (newFile.loaded) this._autoclose();
          else newFile.on('loaded', () => this._autoclose());
      });
    });
  }

  ngAfterContentInit(): void {
    // Subscription now handled in constructor effect
  }

  toggleMinimize() {
    this.minimized = !this.minimized;
  }

  _autoclose() {
    if (this.closable) {
      const autoCloseValue = this.autoclose();
      if (typeof autoCloseValue === 'number')
        setTimeout(() => this.close(), 1000 * autoCloseValue);
      else this.close();
    }
  }

  close() {
    this.files = [];
  }
}

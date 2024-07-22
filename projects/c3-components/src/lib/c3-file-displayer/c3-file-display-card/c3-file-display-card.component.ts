import { CommonModule } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';
import { FileMetadata } from '../../c3-file-viewer/models/file-metadata';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'c3-file-display-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './c3-file-display-card.component.html',
  styleUrl: './c3-file-display-card.component.scss',
})
export class C3FileDisplayCardComponent {
  public readonly fileObjectUrl = input.required<
    | (FileMetadata & {
        objectUrl?: Observable<string>;
      })
    | null
  >();

  public readonly deletable = input<boolean>(false);
  public readonly size = input<'16' | '32' | '64' | '128' | '256'>('32');
  public readonly onDelete = output();

  constructor() {
    effect(() => {
      console.log('fileObjectUrl', this.fileObjectUrl());
    });
  }
}

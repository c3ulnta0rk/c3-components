import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  configDemo,
  crabbyImgs,
} from 'projects/c3-components-docs/src/app/files-demo';
import { C3FileDisplayerModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-example-display-grid',
  standalone: true,
  imports: [CommonModule, C3FileDisplayerModule],
  templateUrl: './example-display-grid.component.html',
  styleUrl: './example-display-grid.component.scss',
})
export class ExampleDisplayGridComponent {
  public readonly files = signal(crabbyImgs);
  public readonly config = signal(configDemo);
}

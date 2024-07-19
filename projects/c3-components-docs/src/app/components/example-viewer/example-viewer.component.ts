import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  contentChildren,
  effect,
  signal,
} from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExampleViewerTabComponent } from './example-viewer-tab.component';
import {
  C3AutoAnimateDirective,
  booleanSignal,
} from 'projects/c3-components/src/public-api';

@Component({
  selector: 'example-viewer',
  standalone: true,
  imports: [
    CommonModule,
    C3AutoAnimateDirective,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    NgComponentOutlet,
  ],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'example-viewer pa-1 rounded-sm stroked mat-elevation-z2',
  },
})
export class ExampleViewerComponent {
  public tabs = contentChildren(ExampleViewerTabComponent);
  public sourceView = booleanSignal(false);
}

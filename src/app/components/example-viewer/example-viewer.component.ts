import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-viewer',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, MatIconModule],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.sass'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'example-viewer pa-1 rounded-sm stroked mat-elevation-z2',
  },
})
export class ExampleViewerComponent {
  public sourceView = false;

  public toggleSourceView() {
    this.sourceView = !this.sourceView;
  }
}

import { Component } from '@angular/core';
import { C3ExpansionModule } from 'projects/c3-components/src/public-api';
import { ExampleViewerComponent } from 'projects/c3-components-old-docs/src/app/components/example-viewer/example-viewer.component';

@Component({
  selector: 'expansion-overview',
  standalone: true,
  imports: [ExampleViewerComponent, C3ExpansionModule],
  templateUrl: './expansion-overview.component.html',
  styleUrl: './expansion-overview.component.scss',
})
export class ExpansionOverviewComponent {}

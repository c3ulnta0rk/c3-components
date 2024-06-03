import { Component } from '@angular/core';
import { C3ExpansionModule } from 'c3-components';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';

@Component({
  selector: 'expansion-overview',
  standalone: true,
  imports: [ExampleViewerComponent, C3ExpansionModule],
  templateUrl: './expansion-overview.component.html',
  styleUrl: './expansion-overview.component.sass',
})
export class ExpansionOverviewComponent {}

import { Component } from '@angular/core';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { MenuExampleComponent } from '../../components/menu-example/menu-example.component';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-examples',
  imports: [MenuExampleComponent, ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent {

}

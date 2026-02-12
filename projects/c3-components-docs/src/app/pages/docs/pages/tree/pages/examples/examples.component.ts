import { Component } from '@angular/core';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3TreeComponent, TreeType } from 'projects/c3-components/src/public-api';

interface DemoRaw {
  description: string;
}

type DemoNode = TreeType<DemoRaw>;

@Component({
  selector: 'c3-examples',
  imports: [
    C3TreeComponent,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {
  isLoading = false;
  selectedNode: DemoNode | null = null;

  treeData: DemoNode[] = [
    {
      id: 1,
      level: 0,
      name: 'Documents',
      children: [
        {
          id: 2,
          level: 1,
          name: 'Reports',
          ancestorId: 1,
          children: [
            {
              id: 3,
              level: 2,
              name: 'Annual Report 2025',
              ancestorId: 2,
              children: [],
              rawData: { description: 'Annual financial report' },
            },
            {
              id: 4,
              level: 2,
              name: 'Monthly Summary',
              ancestorId: 2,
              children: [],
              rawData: { description: 'Monthly overview' },
            },
          ],
          rawData: { description: 'All reports' },
        },
        {
          id: 5,
          level: 1,
          name: 'Photos',
          ancestorId: 1,
          children: [],
          rawData: { description: 'Photo gallery' },
        },
      ],
      rawData: { description: 'Root folder' },
    },
    {
      id: 6,
      level: 0,
      name: 'Downloads',
      children: [],
      rawData: { description: 'Downloaded files' },
    },
  ];

  onNodeSelected(node: DemoNode): void {
    this.selectedNode = node;
  }
}

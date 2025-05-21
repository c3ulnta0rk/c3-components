import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { crabbyImgs, configDemo } from 'projects/c3-components-docs/src/app/files-demo';
import { C3FileDisplayerModule, FileMetadata } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-example-display-list',
  imports: [CommonModule, C3FileDisplayerModule],
  templateUrl: './example-display-list.component.html',
  styleUrl: './example-display-list.component.scss',
})
export class ExampleDisplayListComponent {
  public readonly files = signal(crabbyImgs);
  public readonly config = signal(configDemo);
  public readonly displayFn = signal((file: FileMetadata) =>
    file.metadata ? file.metadata['originalName'] : file.name,
  );
  public readonly columns = signal(['icon', 'name', 'examples', 'date']);
}

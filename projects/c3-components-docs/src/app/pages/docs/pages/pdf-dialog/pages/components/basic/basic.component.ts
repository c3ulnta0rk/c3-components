import { Component } from '@angular/core';
import { PdfViewerContainerComponent } from 'projects/c3-components/src/public-api';
@Component({
  selector: 'c3-basic',
  imports: [PdfViewerContainerComponent],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {}

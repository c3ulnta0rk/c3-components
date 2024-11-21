import { Component } from '@angular/core';
import { C3TraceCardModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-examples',
  standalone: true,
  imports: [C3TraceCardModule],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}

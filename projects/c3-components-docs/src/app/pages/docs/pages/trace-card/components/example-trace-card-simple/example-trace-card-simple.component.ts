import { Component } from '@angular/core';
import { C3TraceCardModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-example-trace-card-simple',
  imports: [C3TraceCardModule],
  templateUrl: './example-trace-card-simple.component.html',
  styleUrl: './example-trace-card-simple.component.scss',
})
export class ExampleTraceCardSimpleComponent {}

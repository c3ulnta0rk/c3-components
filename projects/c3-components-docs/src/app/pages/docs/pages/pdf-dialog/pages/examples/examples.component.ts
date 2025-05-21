import { Component } from '@angular/core';
import { BasicComponent } from '../components/basic/basic.component';

@Component({
  selector: 'c3-examples',
  imports: [BasicComponent],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}

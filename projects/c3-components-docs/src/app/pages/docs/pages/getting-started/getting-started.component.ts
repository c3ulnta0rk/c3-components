import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-getting-started',
  imports: [CommonModule,
    HighlightJsDirective,],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss'
})
export class GettingStartedComponent {
  @HostBinding('class')
  public class = 'p-4';
}

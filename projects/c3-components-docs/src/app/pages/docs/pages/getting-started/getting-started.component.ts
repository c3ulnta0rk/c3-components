import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c3-getting-started',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
})
export class GettingStartedComponent {
  @HostBinding('class')
  public class = 'p-4';
}

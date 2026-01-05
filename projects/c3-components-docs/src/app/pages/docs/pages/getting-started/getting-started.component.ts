import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-getting-started',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, HighlightJsDirective],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
})
export class GettingStartedComponent {}

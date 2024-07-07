import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'gettting-started',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gettting-started.component.html',
  styleUrl: './gettting-started.component.scss',
})
export class GetttingStartedComponent {}

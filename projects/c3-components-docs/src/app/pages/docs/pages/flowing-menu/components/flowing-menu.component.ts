import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3FlowingMenuModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-flowing-menu',
  standalone: true,
  imports: [CommonModule, C3FlowingMenuModule],
  templateUrl: './flowing-menu.component.html',
  styleUrl: './flowing-menu.component.scss',
})
export class FlowingMenuComponent {}

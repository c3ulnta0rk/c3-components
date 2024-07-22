import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'c3-api',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss',
})
export class ApiComponent { }
import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';

@Component({
  selector: 'c3-docs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
})
export class DocsComponent { }

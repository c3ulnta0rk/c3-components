import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-navbar px-1'
  },
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class NavbarComponent {}

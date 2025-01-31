import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { C3MenuModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-menu-example',
  imports: [C3MenuModule, RouterModule],
  templateUrl: './menu-example.component.html',
  styleUrl: './menu-example.component.scss',
})
export class MenuExampleComponent { }

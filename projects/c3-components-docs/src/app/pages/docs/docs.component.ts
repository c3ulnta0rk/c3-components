import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'c3-docs',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
})
export class DocsComponent {}

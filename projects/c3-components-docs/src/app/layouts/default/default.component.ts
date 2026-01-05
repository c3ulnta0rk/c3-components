import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'c3-default',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {}

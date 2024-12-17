import { CommonModule } from '@angular/common';
import { Component, Host, HostBinding } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'c3-home',
    imports: [
        CommonModule,
        MatDividerModule,
        MatCardModule,
        MatIconModule,
        RouterModule,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  @HostBinding('class')
  private class = 'p-4';
}


import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'c3-default',
    imports: [RouterModule, MatButtonModule, MatIconModule],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss'
})
export class DefaultComponent {}

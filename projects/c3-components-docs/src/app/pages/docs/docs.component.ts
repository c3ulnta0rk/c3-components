
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'c3-docs',
    imports: [RouterModule, MatButtonModule],
    templateUrl: './docs.component.html',
    styleUrl: './docs.component.scss'
})
export class DocsComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    MatTabsModule,
    RouterModule
  ],
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.sass']
})
export class ComponentNavComponent {
  public links: Array<{
    url: string;
    label: string;
  }> = [];

  constructor(private _activatedRoute: ActivatedRoute) {
    this.links = this._activatedRoute.snapshot.data['links'];
  }
}

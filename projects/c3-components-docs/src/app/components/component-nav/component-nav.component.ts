import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    imports: [MatTabsModule, RouterModule],
    templateUrl: './component-nav.component.html',
    styleUrls: ['./component-nav.component.scss']
})
export class ComponentNavComponent {
  public links: Array<{
    url: string;
    label: string;
  }> = [];

  get parentRoute() {
    return this._activatedRoute.parent;
  }

  constructor(private _activatedRoute: ActivatedRoute) {
    this.links = this._activatedRoute.snapshot.data['links'];
  }
}

import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class C3MenuService {
  public selectedElement: HTMLElement | null = null;
  public currentRouteChange: Observable<string>;
  public readonly currentRoute = signal('');

  public readonly isHeadless = signal(false);
  private readonly _router = inject(Router);
  private readonly _ar = inject(ActivatedRoute);

  constructor() {
    this.currentRoute.set(this._router.routerState.snapshot.url);
    this.currentRouteChange = this._router.events.pipe(
      filter(
        (status: any) =>
          status.urlAfterRedirects !== undefined && status.state === undefined
      ),
      map((status: any) => {
        this.currentRoute.set(status.urlAfterRedirects);
        return status.urlAfterRedirects;
      })
    );
    this.isHeadless.set(this._ar.snapshot.queryParams['headless'] === 'true');
    console.log(this.isHeadless());
  }

  public clickItem(event: any, route: string) {
    if (
      this.selectedElement !== event.target.parentElement.parentElement &&
      event.target.parentElement.parentElement.tagName === "LI"
    )
      this.setSelectedItem(event.target.parentElement.parentElement);
  }

  public setSelectedItem(element: HTMLElement) {
    if (this.selectedElement)
      this.selectedElement.classList.remove("active-item");
    this.selectedElement = element;
    this.selectedElement.classList.add("active-item");
  }
}

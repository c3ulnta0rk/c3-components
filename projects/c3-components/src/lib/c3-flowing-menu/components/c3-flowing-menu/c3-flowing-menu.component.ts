import {
  Component,
  contentChildren,
  effect,
  model,
  viewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { C3FlowingMenuItemComponent } from '../c3-flowing-menu-item/c3-flowing-menu-item.component';

@Component({
    selector: 'c3-flowing-menu',
    templateUrl: './c3-flowing-menu.component.html',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'c3-flowing-menu',
        ngSkipHydration: 'true',
    },
    standalone: false
})
export class C3FlowingMenuComponent {
  public readonly c3FlowingMenu = contentChildren(C3FlowingMenuItemComponent);
  private readonly targetContentRef = viewChild('targetContent', {
    read: ViewContainerRef,
  });

  public readonly selectedIndex = model(0);

  constructor() {
    effect(() => {
      if (this.targetContentRef()) {
        this.updateView();
      }
    });
  }

  public selectMenu(index: number) {
    this.selectedIndex.set(index);
    this.updateView();
  }

  private updateView() {
    if (!this.targetContentRef()) return;

    this.targetContentRef()!.clear();
    const selectedMenu = this.c3FlowingMenu()[this.selectedIndex()];
    if (selectedMenu) {
      this.targetContentRef()!.createEmbeddedView(selectedMenu.contentTpl()!);
    }
  }
}

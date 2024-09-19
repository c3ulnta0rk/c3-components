import { Component, signal, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'c3-flowing-menu-item',
  templateUrl: './c3-flowing-menu-item.component.html',
})
export class C3FlowingMenuItemComponent {
  public readonly menuTpl = viewChild('menuTpl', {
    read: TemplateRef,
  });
  public readonly contentTpl = viewChild('contentTpl', {
    read: TemplateRef,
  });

  public readonly active = signal(false);
}

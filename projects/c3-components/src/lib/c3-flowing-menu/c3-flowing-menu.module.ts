import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3FlowingMenuComponent } from './components/c3-flowing-menu/c3-flowing-menu.component';
import { C3FlowingMenuItemComponent } from './components/c3-flowing-menu-item/c3-flowing-menu-item.component';
import { C3FlowingMenuItemContentComponent } from './components/c3-flowing-menu-item-content/c3-flowing-menu-item-content.component';

@NgModule({
  declarations: [
    C3FlowingMenuComponent,
    C3FlowingMenuItemComponent,
    C3FlowingMenuItemContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    C3FlowingMenuComponent,
    C3FlowingMenuItemComponent,
    C3FlowingMenuItemContentComponent,
  ],
})
export class C3FlowingMenuModule {}

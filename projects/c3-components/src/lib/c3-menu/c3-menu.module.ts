import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { C3MenuComponent } from "./components/c3-menu/c3-menu.component";
import { RouterModule } from "@angular/router";
import { MatRippleModule } from "@angular/material/core";
import { C3NavItemComponent } from "./components/c3-nav-item/c3-nav-item.component";

@NgModule({
  imports: [CommonModule, RouterModule, MatRippleModule],
  declarations: [C3MenuComponent, C3NavItemComponent],
  exports: [C3MenuComponent, C3NavItemComponent],
  providers: [],
})
export class C3MenuModule { }

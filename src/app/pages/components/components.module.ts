import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


import { ComponentsRoutingModule } from './components-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ComponentsComponent } from './components.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CategoriesComponent,
    CommonModule,
    ComponentsRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class ComponentsModule { }

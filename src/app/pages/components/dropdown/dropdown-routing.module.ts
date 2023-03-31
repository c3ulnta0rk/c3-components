import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownOverviewComponent } from './pages/overview/overview.component';
import { DropdownApiComponent } from './pages/api/api.component';
import { DropdownExamplesComponent } from './pages/examples/examples.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: DropdownOverviewComponent
  },
  {
    path: 'api',
    component: DropdownApiComponent
  },
  {
    path: 'examples',
    component: DropdownExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule { }

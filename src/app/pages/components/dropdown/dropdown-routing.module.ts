import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownOverviewComponent } from './pages/overview/overview.component';
import { DropdownApiComponent } from './pages/api/api.component';
import { DropdownExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
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
      },
      {
        path: '**',
        redirectTo: 'overview'
      }
    ],
    data: {
      links: [{
        url: 'overview',
        label: 'Overview'
      }, {
        url: 'api',
        label: 'Api'
      }, {
        url: 'examples',
        label: 'Examples'
      }]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule { }

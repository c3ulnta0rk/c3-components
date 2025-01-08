import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuApiComponent } from './pages/api/api.component';
import { MenuExamplesComponent } from './pages/examples/examples.component';
import { MenuOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: MenuOverviewComponent,
      },
      {
        path: 'api',
        component: MenuApiComponent,
      },
      {
        path: 'examples',
        component: MenuExamplesComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
    data: {
      links: [
        {
          url: 'overview',
          label: 'Overview',
        },
        {
          url: 'api',
          label: 'Api',
        },
        {
          url: 'examples',
          label: 'Examples',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}

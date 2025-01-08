import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';
import { RoundedTitleApiComponent } from './pages/api/api.component';
import { RoundedTitleExamplesComponent } from './pages/examples/examples.component';
import { RoundedTitleOverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: RoundedTitleOverviewComponent,
      },
      {
        path: 'api',
        component: RoundedTitleApiComponent,
      },
      {
        path: 'examples',
        component: RoundedTitleExamplesComponent,
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
export class RoundedTitleRoutingModule {}

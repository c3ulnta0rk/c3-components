import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';
import { ExpansionApiComponent } from './pages/expansion-api/expansion-api.component';
import { ExpansionExamplesComponent } from './pages/expansion-examples/expansion-examples.component';
import { ExpansionOverviewComponent } from './pages/expansion-overview/expansion-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: ExpansionOverviewComponent,
      },
      {
        path: 'api',
        component: ExpansionApiComponent,
      },
      {
        path: 'examples',
        component: ExpansionExamplesComponent,
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
export class ExpansionRoutingModule {}

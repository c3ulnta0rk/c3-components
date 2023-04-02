import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';
import { TabsApiComponent } from './pages/api/api.component';
import { TabsExamplesComponent } from './pages/examples/examples.component';
import { TabsOverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: TabsOverviewComponent,
      },
      {
        path: 'api',
        component: TabsApiComponent,
      },
      {
        path: 'examples',
        component: TabsExamplesComponent,
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
export class TabsRoutingModule {}

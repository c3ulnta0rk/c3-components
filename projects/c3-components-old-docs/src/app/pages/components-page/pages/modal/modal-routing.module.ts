import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalApiComponent } from './pages/api/api.component';
import { ModalExamplesComponent } from './pages/examples/examples.component';
import { ModalOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: ModalOverviewComponent,
      },
      {
        path: 'api',
        component: ModalApiComponent,
      },
      {
        path: 'examples',
        component: ModalExamplesComponent,
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
export class ModalRoutingModule {}

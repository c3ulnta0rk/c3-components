import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileViewerApiComponent } from './pages/api/api.component';
import { FileViewerExamplesComponent } from './pages/examples/examples.component';
import { FileViewerOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'projects/c3-components-old-docs/src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: FileViewerOverviewComponent,
      },
      {
        path: 'api',
        component: FileViewerApiComponent,
      },
      {
        path: 'examples',
        component: FileViewerExamplesComponent,
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
export class FileRoutingModule {}

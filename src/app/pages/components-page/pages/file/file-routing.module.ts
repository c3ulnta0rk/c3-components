import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileApiComponent } from './pages/api/api.component';
import { FileExamplesComponent } from './pages/examples/examples.component';
import { FileOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: FileOverviewComponent,
      },
      {
        path: 'api',
        component: FileApiComponent,
      },
      {
        path: 'examples',
        component: FileExamplesComponent,
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

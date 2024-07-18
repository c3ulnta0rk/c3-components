import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogApiComponent } from './pages/api/api.component';
import { DialogExamplesComponent } from './pages/examples/examples.component';
import { ComponentNavComponent } from 'projects/c3-components-docs/src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'api',
        component: DialogApiComponent,
      },
      {
        path: 'examples',
        component: DialogExamplesComponent,
      },
      {
        path: '**',
        redirectTo: 'examples',
      },
    ],
    data: {
      links: [
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
export class DialogRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentNavComponent } from '../../../../components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    data: {
      links: [
        { label: 'Examples', url: 'examples' },
        { label: 'API', url: 'api' },
      ],
    },
    children: [
      {
        path: 'examples',
        loadComponent: () =>
          import('./pages/examples/examples.component').then((m) => m.SafeUrlExamplesComponent),
      },
      {
        path: 'api',
        loadComponent: () =>
          import('./pages/api/api.component').then((m) => m.SafeUrlApiComponent),
      },
      { path: '', redirectTo: 'examples', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafeUrlModule {}


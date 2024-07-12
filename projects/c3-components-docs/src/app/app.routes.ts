import { Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'docs',
        loadChildren: () =>
          import('./pages/docs/docs.module').then((m) => m.DocsModule),
      },

      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];

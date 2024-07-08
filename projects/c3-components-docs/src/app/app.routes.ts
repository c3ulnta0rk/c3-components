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
        loadComponent: () =>
          import('./pages/docs/docs.component').then((m) => m.DocsComponent),
      },

      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];

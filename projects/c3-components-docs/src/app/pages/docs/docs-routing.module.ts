import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./docs.component').then((m) => m.DocsComponent),
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/overview/overview.component').then(
            (m) => m.DocOverviewComponent,
          ),
      },

      {
        path: 'getting-started',
        loadComponent: () =>
          import('./pages/getting-started/getting-started.component').then(
            (m) => m.GettingStartedComponent,
          ),
      },

      {
        path: 'dialog',
        loadChildren: () =>
          import('./pages/dialog/dialog.module').then((m) => m.DialogModule),
      },

      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

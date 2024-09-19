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
            (m) => m.DocOverviewComponent
          ),
      },

      {
        path: 'getting-started',
        loadComponent: () =>
          import('./pages/getting-started/getting-started.component').then(
            (m) => m.GettingStartedComponent
          ),
      },

      {
        path: 'dialog',
        loadChildren: () =>
          import('./pages/dialog/dialog.module').then((m) => m.DialogModule),
      },

      {
        path: 'file-viewer',
        loadChildren: () =>
          import('./pages/file-viewer/file-viewer.module').then(
            (m) => m.FileViewerModule
          ),
      },

      {
        path: 'file-displayer',
        loadChildren: () =>
          import('./pages/file-displayer/file-displayer.module').then(
            (m) => m.FileDisplayerModule
          ),
      },

      {
        path: 'dropdown',
        loadChildren: () =>
          import('./pages/dropdown/dropdown.module').then(
            (m) => m.DropdownModule
          ),
      },
      {
        path: 'flowing-menu',
        loadChildren: () =>
          import('./pages/flowing-menu/flowing-menu.module').then(
            (m) => m.FlowingMenuModule
          ),
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

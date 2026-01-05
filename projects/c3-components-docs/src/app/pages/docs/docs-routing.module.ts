import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./docs.component').then((m) => m.DocsComponent),
    children: [
      // Getting Started
      {
        path: 'getting-started',
        loadComponent: () =>
          import('./pages/getting-started/getting-started.component').then((m) => m.GettingStartedComponent),
      },

      // Components
      {
        path: 'dialog',
        loadChildren: () => import('./pages/dialog/dialog.module').then((m) => m.DialogModule),
      },
      {
        path: 'dropdown',
        loadChildren: () => import('./pages/dropdown/dropdown.module').then((m) => m.DropdownModule),
      },
      {
        path: 'expansion',
        loadChildren: () => import('./pages/expansion/expansion.module').then((m) => m.ExpansionModule),
      },
      {
        path: 'file-displayer',
        loadChildren: () => import('./pages/file-displayer/file-displayer.module').then((m) => m.FileDisplayerModule),
      },
      {
        path: 'file-viewer',
        loadChildren: () => import('./pages/file-viewer/file-viewer.module').then((m) => m.FileViewerModule),
      },
      {
        path: 'flowing-menu',
        loadChildren: () => import('./pages/flowing-menu/flowing-menu.module').then((m) => m.FlowingMenuModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('./pages/menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'modal',
        loadChildren: () => import('./pages/modal/modal.module').then((m) => m.ModalModule),
      },
      {
        path: 'tabs',
        loadChildren: () => import('./pages/tabs/tabs.module').then((m) => m.TabsModule),
      },
      {
        path: 'trace-card',
        loadChildren: () => import('./pages/trace-card/trace-card.module').then((m) => m.TraceCardModule),
      },
      {
        path: 'tree',
        loadChildren: () => import('./pages/tree/tree.module').then((m) => m.TreeModule),
      },

      // Directives
      {
        path: 'auto-animate',
        loadChildren: () => import('./pages/auto-animate/auto-animate.module').then((m) => m.AutoAnimateModule),
      },
      {
        path: 'prevent-event',
        loadChildren: () => import('./pages/prevent-event/prevent-event.module').then((m) => m.PreventEventModule),
      },
      {
        path: 'select-on-focus',
        loadChildren: () => import('./pages/select-on-focus/select-on-focus.module').then((m) => m.SelectOnFocusModule),
      },

      // Utilities
      {
        path: 'file-input',
        loadChildren: () => import('./pages/file-input/file-input.module').then((m) => m.FileInputModule),
      },
      {
        path: 'file-upload',
        loadChildren: () => import('./pages/file-upload/file-upload.module').then((m) => m.FileUploadModule),
      },
      {
        path: 'pdf-viewer',
        loadChildren: () => import('./pages/pdf-viewer/pdf-viewer.module').then((m) => m.PdfViewerModule),
      },
      {
        path: 'safe-url',
        loadChildren: () => import('./pages/safe-url/safe-url.module').then((m) => m.SafeUrlModule),
      },
      {
        path: 'signals',
        loadChildren: () => import('./pages/signals/signals.module').then((m) => m.SignalsModule),
      },
      {
        path: 'navbar',
        loadChildren: () => import('./pages/navbar/navbar.module').then((m) => m.NavbarModule),
      },

      // Styles
      {
        path: 'rounded-title',
        loadChildren: () => import('./pages/rounded-title/rounded-title.module').then((m) => m.RoundedTitleModule),
      },
      {
        path: 'highlight-text',
        loadChildren: () => import('./pages/highlight-text/highlight-text.module').then((m) => m.HighlightTextModule),
      },

      // Legacy/Demo
      {
        path: 'demo-layout',
        loadChildren: () => import('./pages/demo-layout/demo-layout.module').then((m) => m.DemoLayoutModule),
      },

      // Default redirect
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'getting-started',
      },
      {
        path: '**',
        redirectTo: 'getting-started',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

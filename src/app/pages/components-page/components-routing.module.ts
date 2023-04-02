import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ComponentsComponent } from './components/components-pages/components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'dialog',
        loadChildren: () =>
          import('./pages/dialog/dialog.module').then((m) => m.DialogModule),
      },
      {
        path: 'dropdown',
        loadChildren: () =>
          import('./pages/dropdown/dropdown.module').then(
            (m) => m.DropdownModule
          ),
      },
      {
        path: 'file',
        loadChildren: () =>
          import('./pages/file/file.module').then((m) => m.FileModule),
      },
      {
        path: 'highlight-text',
        loadChildren: () =>
          import('./pages/highlight-text/highlight-text.module').then(
            (m) => m.HighlightTextModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./pages/menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'modal',
        loadChildren: () =>
          import('./pages/modal/modal.module').then((m) => m.ModalModule),
      },
      {
        path: 'navbar',
        loadChildren: () =>
          import('./pages/navbar/navbar.module').then((m) => m.NavbarModule),
      },
      {
        path: 'pdf-dialog',
        loadChildren: () =>
          import('./pages/pdf-dialog/pdf-dialog.module').then(
            (m) => m.PdfDialogModule
          ),
      },
      {
        path: 'rounded-title',
        loadChildren: () =>
          import('./pages/rounded-title/rounded-title.module').then(
            (m) => m.RoundedTitleModule
          ),
      },
      {
        path: 'tabs',
        loadChildren: () =>
          import('./pages/tabs/tabs.module').then((m) => m.TabsModule),
      },
      {
        path: '**',
        redirectTo: 'categories',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

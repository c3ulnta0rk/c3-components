import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'getting-started',
    loadComponent: () =>
      import('./pages/gettting-started/gettting-started.component').then(
        (m) => m.GetttingStartedComponent
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./pages/components-page/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

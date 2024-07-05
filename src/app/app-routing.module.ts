import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

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
    redirectTo: '',
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

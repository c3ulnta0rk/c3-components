import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarApiComponent } from './pages/api/api.component';
import { NavbarExamplesComponent } from './pages/examples/examples.component';
import { NavbarOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: NavbarOverviewComponent,
      },
      {
        path: 'api',
        component: NavbarApiComponent,
      },
      {
        path: 'examples',
        component: NavbarExamplesComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
    data: {
      links: [
        {
          url: 'overview',
          label: 'Overview',
        },
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
export class NavbarRoutingModule {}

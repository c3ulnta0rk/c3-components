import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightTextApiComponent } from './pages/api/api.component';
import { HighlightTextExamplesComponent } from './pages/examples/examples.component';
import { HighlightTextOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: HighlightTextOverviewComponent,
      },
      {
        path: 'api',
        component: HighlightTextApiComponent,
      },
      {
        path: 'examples',
        component: HighlightTextExamplesComponent,
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
export class HighlightTextRoutingModule {}

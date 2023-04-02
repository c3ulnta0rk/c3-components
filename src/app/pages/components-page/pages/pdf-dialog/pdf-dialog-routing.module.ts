import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfDialogApiComponent } from './pages/api/api.component';
import { PdfDialogExamplesComponent } from './pages/examples/examples.component';
import { PdfDialogOverviewComponent } from './pages/overview/overview.component';
import { ComponentNavComponent } from 'src/app/components/component-nav/component-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentNavComponent,
    children: [
      {
        path: 'overview',
        component: PdfDialogOverviewComponent,
      },
      {
        path: 'api',
        component: PdfDialogApiComponent,
      },
      {
        path: 'examples',
        component: PdfDialogExamplesComponent,
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
export class PdfDialogRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./docs.component").then((m) => m.DocsComponent),
    children: [
      {
        path: "getting-started",
        loadComponent: () =>
          import("./pages/getting-started/getting-started.component").then(
            (m) => m.GettingStartedComponent,
          ),
      },

      {
        path: "dialog",
        loadChildren: () =>
          import("./pages/dialog/dialog.module").then((m) => m.DialogModule),
      },

      {
        path: "file-viewer",
        loadChildren: () =>
          import("./pages/file-viewer/file-viewer.module").then(
            (m) => m.FileViewerModule,
          ),
      },

      {
        path: "file-displayer",
        loadChildren: () =>
          import("./pages/file-displayer/file-displayer.module").then(
            (m) => m.FileDisplayerModule,
          ),
      },

      {
        path: "dropdown",
        loadChildren: () =>
          import("./pages/dropdown/dropdown.module").then(
            (m) => m.DropdownModule,
          ),
      },
      {
        path: "flowing-menu",
        loadChildren: () =>
          import("./pages/flowing-menu/flowing-menu.module").then(
            (m) => m.FlowingMenuModule,
          ),
      },
      {
        path: "expansion",
        loadChildren: () =>
          import("./pages/expansion/expansion.module").then(
            (m) => m.ExpansionModule,
          ),
      },
      {
        path: "highlight-text",
        loadChildren: () =>
          import("./pages/highlight-text/highlight-text.module").then(
            (m) => m.HighlightTextModule,
          ),
      },
      {
        path: "menu",
        loadChildren: () =>
          import("./pages/menu/menu.module").then((m) => m.MenuModule),
      },
      {
        path: "modal",
        loadChildren: () =>
          import("./pages/modal/modal.module").then((m) => m.ModalModule),
      },
      {
        path: "pdf-dialog",
        loadChildren: () =>
          import("./pages/pdf-dialog/pdf-dialog.module").then(
            (m) => m.PdfDialogModule,
          ),
      },
      {
        path: "rounded-title",
        loadChildren: () =>
          import("./pages/rounded-title/rounded-title.module").then(
            (m) => m.RoundedTitleModule,
          ),
      },
      {
        path: "tabs",
        loadChildren: () =>
          import("./pages/tabs/tabs.module").then((m) => m.TabsModule),
      },
      {
        path: "tree",
        loadChildren: () =>
          import("./pages/tree/tree.module").then((m) => m.TreeModule),
      },
      {
        path: "trace-card",
        loadChildren: () =>
          import("./pages/trace-card/trace-card.module").then(
            (m) => m.TraceCardModule,
          ),
      },
      {
        path: "demo-layout",
        loadChildren: () =>
          import("./pages/demo-layout/demo-layout.module").then(
            (m) => m.DemoLayoutModule,
          ),
      },

      {
        path: "**",
        pathMatch: "full",
        redirectTo: "overview",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

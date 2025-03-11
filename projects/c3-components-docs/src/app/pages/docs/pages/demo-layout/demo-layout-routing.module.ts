import { ComponentNavComponent } from "projects/c3-components-docs/src/app/components/component-nav/component-nav.component";
import { ExamplesComponent } from "./pages/examples/examples.component";
import { ApiComponent } from "./pages/api/api.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: "",
        component: ComponentNavComponent,
        children: [
            {
                path: "api",
                component: ApiComponent
            },
            {
                path: "examples",
                component: ExamplesComponent
            },
            {
                path: "**",
                redirectTo: "examples"
            }
        ],
        data: {
            links: [
                {
                    url: "api",
                    label: "Api"
                },
                {
                    url: "examples",
                    label: "Examples"
                }
            ]
        }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoLayoutRoutingModule {
}

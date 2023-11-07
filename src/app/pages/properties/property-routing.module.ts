import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PermissionsResolver } from "src/app/core/services/permission-resolver";
import { PropertyListComponent } from "./property-list/property-list.component";
import { ViewsComponent } from "./views/views.component";

const routes: Routes = [
  {
    path: "",
    component: PropertyListComponent,
    resolve: {
      permissions: PermissionsResolver, // Resolve the permissions here
    },
  },
  {
    path: "views",
    component: ViewsComponent,
    resolve: {
      permissions: PermissionsResolver, // Resolve the permissions here
    },
  },
  /* {
    path: "list",
    component: ListleadsComponent,
  },
  {
    path: "leadslist",
    component: LeadsListComponent,
  },
  {
    path: "view/:id",
    component: LeadsViewComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}

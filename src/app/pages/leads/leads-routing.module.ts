import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListleadsComponent } from "./listleads/listleads.component";
import { LeadsListComponent } from "./leads-list/leads-list.component";
import { LeadsComponent } from "./leads/leads.component";
import { PermissionsResolver } from "src/app/core/services/permission-resolver";
import { LeadsViewComponent } from "./leads-view/leads-view.component";

const routes: Routes = [
  {
    path: "",
    component: LeadsComponent,
    resolve: {
      permissions: PermissionsResolver, // Resolve the permissions here
    },
  },
  {
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule {}

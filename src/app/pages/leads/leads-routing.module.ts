import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListleadsComponent } from "./listleads/listleads.component";
import { LeadsListComponent } from "./leads-list/leads-list.component";
import { LeadsComponent } from "./leads/leads.component";

const routes: Routes = [
  {
    path: "",
    component: LeadsComponent,
  },
  {
    path: "list",
    component: ListleadsComponent,
  },
  {
    path: "leadslist",
    component: LeadsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListleadsComponent } from "./listleads/listleads.component";
import { LeadsListComponent } from "./leads-list/leads-list.component";
import { LeadsComponent } from "./leads/leads.component";
import { LeadsEditComponent } from "./leads-edit/leads-edit.component";

const routes: Routes = [
  {
    path: "",
    component: LeadsComponent,
    data:{module:'leadsmodule'},
    
  },
  {
    path: "list",
    component: ListleadsComponent,
    data:{module:'leadsmodule'}
  },
  {
    path: "leadslist",
    component: LeadsListComponent,
    data:{module:'leadsmodule'}
  },
  {
    path: "edit/:id",
    component: LeadsEditComponent,
    data:{module:'leadsmodule'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule {}

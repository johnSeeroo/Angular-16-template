import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "ecommerce",
    loadChildren: () =>
      import("./ecommerce/ecommerce.module").then((m) => m.EcommerceModule),
  },
  {
    path: "leads",
    loadChildren: () =>
      import("./leads/leads.module").then((m) => m.LeadsModule),
    canActivate:[AuthGuard]  

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

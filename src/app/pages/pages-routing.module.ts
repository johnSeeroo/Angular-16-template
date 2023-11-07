import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes = [
  {
    path: "dashboard",
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
    canActivate: [AuthGuard],
  },
  {
    path: "property",
    loadChildren: () =>
      import("./properties/property.module").then((m) => m.PropertyModule),
    canActivate: [AuthGuard],
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

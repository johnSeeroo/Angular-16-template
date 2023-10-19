import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Auth
import { AuthGuard } from "./core/guards/auth.guard";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./extraspages/extraspages.module").then(
        (m) => m.ExtraspagesModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Component pages
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AddProductComponent } from "./add-product/add-product.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "product-detail/:any",
    component: ProductDetailComponent,
  },
  {
    path: "add-product",
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}

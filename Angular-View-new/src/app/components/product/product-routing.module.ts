import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		component: ProductComponent,
	},
	{
		path: ":productCategory/:productTitle",
		component: ProductDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}

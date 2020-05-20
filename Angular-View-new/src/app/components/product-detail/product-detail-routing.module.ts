import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail.component";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		component: ProductDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductDetailRoutingModule {}

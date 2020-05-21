import { NgModule } from "@angular/core";

import { ProductDetailRoutingModule } from "./product-detail-routing.module";
import { ProductDetailComponent } from "./product-detail.component";
import { SharedModule } from "../_shared/shared.module";
import { ProductOthersComponent } from "./product-others/product-others.component";

@NgModule({
	declarations: [ProductDetailComponent, ProductOthersComponent],
	imports: [SharedModule, ProductDetailRoutingModule],
})
export class ProductDetailModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Import Routing Module
import { IndexRoutingModule } from "./index-routing.module";

// Import Index components
import { IndexComponent } from "./index.component";
import { BannerComponent } from "./banner/banner.component";
import { IndexProductsComponent } from "./index-products/index-products.component";
import { IndexAboutUsComponent } from "./index-about-us/index-about-us.component";
import { SharedModule } from "../_shared/shared.module";
import { IndexPartnersComponent } from "./index-partners/index-partners.component";
import { IndexDepartmentComponent } from "./index-department/index-department.component";

@NgModule({
	declarations: [
		IndexComponent,
		BannerComponent,
		IndexAboutUsComponent,
		IndexProductsComponent,
		IndexPartnersComponent,
		IndexDepartmentComponent,
	],
	imports: [IndexRoutingModule, SharedModule],
})
export class IndexModule {}

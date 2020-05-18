import { NgModule } from "@angular/core";

import { DepartmentRoutingModule } from "./department-routing.module";
import { DepartmentComponent } from "./department.component";
import { SharedModule } from "../_shared/shared.module";
import { DepartmentProductsComponent } from "./department-products/department-products.component";
import {
	SwiperDirective,
	SWIPER_CONFIG,
	SwiperConfigInterface,
} from "ngx-swiper-wrapper";
import { DepartmentCapacityComponent } from "./department-capacity/department-capacity.component";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: "horizontal",
	slidesPerView: "auto",
};

@NgModule({
	declarations: [
		DepartmentComponent,
		DepartmentProductsComponent,
		DepartmentCapacityComponent,
	],
	imports: [SharedModule, DepartmentRoutingModule],
	providers: [
		SwiperDirective,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG,
		},
	],
})
export class DepartmentModule {}

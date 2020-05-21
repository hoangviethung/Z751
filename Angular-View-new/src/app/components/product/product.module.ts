import { NgModule } from "@angular/core";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { ProductSimpleComponent } from "./product-simple/product-simple.component";
import { SwiperConfigInterface, SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SharedModule } from "../_shared/shared.module";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	observer: true,
	direction: "horizontal",
	spaceBetween: 30,
	slidesPerView: 3,
	loop: true,
	centeredSlides: false,
	loopAdditionalSlides: 2,
};

@NgModule({
	declarations: [
		ProductComponent,
		ProductSimpleComponent,
	],
	imports: [SharedModule, ProductRoutingModule],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG,
		},
	],
})
export class ProductModule {}

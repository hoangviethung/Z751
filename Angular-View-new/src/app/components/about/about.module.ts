import { NgModule } from "@angular/core";

// Swiper
import {
	SWIPER_CONFIG,
	SwiperConfigInterface,
	SwiperDirective,
} from "ngx-swiper-wrapper";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { HistoryComponent } from "./history/history.component";
import { StaffComponent } from "./staff/staff.component";
import { RewardComponent } from "./reward/reward.component";
import { SharedModule } from "../_shared/shared.module";
import { CommonModule } from "@angular/common";

// Swiper default config
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: "horizontal",
	slidesPerView: "auto",
};

@NgModule({
	declarations: [
		AboutComponent,
		HistoryComponent,
		StaffComponent,
		RewardComponent,
	],
	imports: [CommonModule, SharedModule, AboutRoutingModule],
	providers: [
		SwiperDirective,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG,
		},
	],
})
export class AboutModule {}

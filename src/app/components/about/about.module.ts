import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Swiper
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TranslateModule } from '@ngx-translate/core';
import { HistoryComponent } from './history/history.component';
import { StaffComponent } from './staff/staff.component';
import { RewardComponent } from './reward/reward.component';
import { SharedModule } from 'src/app/shared/shared.module';

// Swiper default config
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto'
};

@NgModule({
	declarations: [
		AboutComponent,
		HistoryComponent,
		StaffComponent,
		RewardComponent,
	],
	imports: [
		SharedModule,
		SwiperModule,
		CommonModule,
		AboutRoutingModule,
		TranslateModule.forChild()
	],
	providers: [
		SwiperDirective,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	]
})
export class AboutModule { }

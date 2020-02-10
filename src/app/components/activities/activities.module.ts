import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ActivitiesImageComponent } from './activities-image/activities-image.component';
import { ActivitiesVideoComponent } from './activities-video/activities-video.component';
import { ActivitiesImagesPopupComponent } from './activities-image/activities-images-popup/activities-images-popup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto'
};

@NgModule({
	declarations: [
		ActivitiesImageComponent,
		ActivitiesVideoComponent,
		ActivitiesImagesPopupComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		SwiperModule,
		ActivitiesRoutingModule,
		TranslateModule.forChild()
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	]
})
export class ActivitiesModule { }

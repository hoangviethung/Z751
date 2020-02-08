import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Swiper
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
// Import Routing Module
import { IndexRoutingModule } from './index-routing.module';


// Import Index components
import { IndexComponent } from './index.component';
import { BannerComponent } from './banner/banner.component';
import { IndexProductsComponent } from './index-products/index-products.component';
import { IndexNewsComponent } from './index-news/index-news.component';
import { IndexAboutUsComponent } from './index-about-us/index-about-us.component';
import { IndexActivitiesComponent } from './index-activities/index-activities.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

// Swiper default config
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	slidesPerView: 'auto'
};

@NgModule({
	declarations: [
		IndexComponent,
		BannerComponent,
		IndexAboutUsComponent,
		IndexProductsComponent,
		IndexNewsComponent,
		IndexActivitiesComponent
	],
	imports: [
		CommonModule,
		IndexRoutingModule,
		SwiperModule,
		SharedModule,
		TranslateModule.forChild(),
	],
	providers: [
		SwiperDirective,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	]
})
export class IndexModule { }

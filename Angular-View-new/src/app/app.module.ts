import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
	SwiperModule,
	SWIPER_CONFIG,
	SwiperConfigInterface,
	SwiperDirective,
} from "ngx-swiper-wrapper";
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from "./components/_shared/header/header.component";
import { FooterComponent } from "./components/_shared/footer/footer.component";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: "horizontal",
	slidesPerView: "auto",
};

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule, SwiperModule],
	providers: [
		SwiperDirective,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

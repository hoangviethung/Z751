import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
	SwiperModule,
	SWIPER_CONFIG,
	SwiperConfigInterface,
	SwiperDirective,
} from "ngx-swiper-wrapper";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { HeaderComponent } from "./components/_shared/header/header.component";
import { FooterComponent } from "./components/_shared/footer/footer.component";
import { SharedModule } from "./components/_shared/shared.module";
import { environment } from "src/environments/environment";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: "horizontal",
	slidesPerView: "auto",
};

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: "z751" }),
		AppRoutingModule,
		HttpClientModule,
		SwiperModule,
		SharedModule,
		TranslateModule.forRoot({
			defaultLanguage: "vi",
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => {
					return new TranslateHttpLoader(
						http,
						`${environment.locales}/assets/i18n/`,
						".json"
					);
				},
				deps: [HttpClient],
			},
		}),
	],
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

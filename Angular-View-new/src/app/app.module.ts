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

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: "horizontal",
	slidesPerView: "auto",
};

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient, "/assets/i18n/", ".json");
}

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: "z751" }),
		HttpClientModule,
		TranslateModule.forRoot({
			defaultLanguage: "vi",
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		AppRoutingModule,
		SwiperModule,
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

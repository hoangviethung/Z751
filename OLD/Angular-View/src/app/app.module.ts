import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/_shared/header/header.component";
import { FooterComponent } from "./components/_shared/footer/footer.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: "z751" }),
		AppRoutingModule,
		SharedModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => {
					return new TranslateHttpLoader(
						http,
						`${environment.locales}assets/i18n/`,
						".json"
					);
				},
				deps: [HttpClient],
			},
		}),
	],
	providers: [Title],
	bootstrap: [AppComponent],
})
export class AppModule {}

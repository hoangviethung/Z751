import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { FormContactComponent } from "./form-contact/form-contact.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { IndexNewsComponent } from "../index/index-news/index-news.component";
import { TranslateModule } from "@ngx-translate/core";
import { CookieService } from "src/core/services/cookie.service";
import { HttpService } from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { UtilitiesService } from "src/core/services/utilities.service";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		TranslateModule,
		FormsModule,
		SwiperModule,
	],
	exports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
		SwiperModule,
		TranslateModule,
		FormsModule,
	],
	providers: [
		CookieService,
		HttpService,
		LanguageService,
		PageInfoService,
		UtilitiesService,
	],
})
export class SharedModule {}

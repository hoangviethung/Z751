import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { FormContactComponent } from "./form-contact/form-contact.component";
import { BreadcrumbService } from "./breadcrumb/breadcrumb.service";
import { SwiperModule } from "ngx-swiper-wrapper";
import { IndexNewsComponent } from "../index/index-news/index-news.component";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HttpService } from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { UtilitiesService } from "src/core/services/utilities.service";
import { ProductSimpleComponent } from "../product/product-simple/product-simple.component";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
		ProductSimpleComponent,
	],
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		HttpClientModule,
		FormsModule,
		SwiperModule,
	],
	exports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		HttpClientModule,
		FormsModule,
		SwiperModule,
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
		ProductSimpleComponent,
	],
	providers: [
		BreadcrumbService,
		HttpService,
		LanguageService,
		PageInfoService,
		UtilitiesService,
		TranslateService,
	],
})
export class SharedModule {}

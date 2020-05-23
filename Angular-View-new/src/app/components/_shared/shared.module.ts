import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { FormContactComponent } from "./form-contact/form-contact.component";
import { BreadcrumbService } from "./breadcrumb/breadcrumb.service";
import { SwiperModule } from "ngx-swiper-wrapper";
import { IndexNewsComponent } from "../index/index-news/index-news.component";
import { TranslateModule } from "@ngx-translate/core";
import { CookieService } from "src/core/services/cookie.service";
import { HttpService } from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { UtilitiesService } from "src/core/services/utilities.service";
import { CloseMenuDirective } from "src/app/directives/close-menu.directive";
import { IndexNewsItemDirective } from "src/app/directives/index-news-item.directive";
import { IndexProductItemDirective } from "src/app/directives/index-product-item.directive";
import { ToggleMenuDirective } from "src/app/directives/toggle-menu.directive";
import { ToggleSubMenuDirective } from "src/app/directives/toggle-sub-menu.directive";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
		CloseMenuDirective,
		IndexNewsItemDirective,
		IndexProductItemDirective,
		ToggleMenuDirective,
		ToggleSubMenuDirective,
	],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		SwiperModule,
		TranslateModule,
		FormsModule,
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
		CloseMenuDirective,
		IndexNewsItemDirective,
		IndexProductItemDirective,
		ToggleMenuDirective,
		ToggleSubMenuDirective,
	],
	providers: [
		BreadcrumbService,
		CookieService,
		HttpService,
		LanguageService,
		PageInfoService,
		UtilitiesService,
	],
})
export class SharedModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

import { CloseMenuDirective } from "../directives/close-menu.directive";
import { ToggleMenuDirective } from "../directives/toggle-menu.directive";
import { IndexNewsItemDirective } from "../directives/index-news-item.directive";
import { ToggleSubMenuDirective } from "../directives/toggle-sub-menu.directive";
import { IndexProductItemDirective } from "../directives/index-product-item.directive";
import { IndexNewsComponent } from "../components/index/index-news/index-news.component";
import { BreadcrumbComponent } from "../components/_shared/breadcrumb/breadcrumb.component";
import { PaginationComponent } from "../components/_shared/pagination/pagination.component";
import { FormContactComponent } from "../components/_shared/form-contact/form-contact.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { BreadcrumbService } from "../components/_shared/breadcrumb/breadcrumb.service";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		IndexNewsComponent,
		FormContactComponent,
		CloseMenuDirective,
		ToggleMenuDirective,
		ToggleSubMenuDirective,
		IndexNewsItemDirective,
		IndexProductItemDirective,
	],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		TranslateModule,
		LocalizeRouterModule,
		SwiperModule,
	],
	exports: [
		TranslateModule,
		RouterModule,
		LocalizeRouterModule,
		HttpClientModule,
		BreadcrumbComponent,
		PaginationComponent,
		IndexNewsComponent,
		FormContactComponent,
		CloseMenuDirective,
		ToggleMenuDirective,
		ToggleSubMenuDirective,
		IndexNewsItemDirective,
		IndexProductItemDirective,
		SwiperModule,
	],
	providers: [BreadcrumbService],
})
export class SharedModule {}

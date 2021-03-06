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
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HttpService } from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { UtilitiesService } from "src/core/services/utilities.service";
import { ProductSimpleComponent } from "../product/product-simple/product-simple.component";
import { CloseMenuDirective } from "../../../core/directives/close-menu.directive";
import { IndexNewsItemDirective } from "../../../core/directives/index-news-item.directive";
import { IndexProductItemDirective } from "../../../core/directives/index-product-item.directive";
import { ToggleMenuDirective } from "../../../core/directives/toggle-menu.directive";
import { CloseSubMenuDirective } from "../../../core/directives/toggle-sub-menu.directive";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ProductDirective } from "../product/product-simple/product.directive";
import { HeaderService } from './header/header.service';

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
		ProductSimpleComponent,
		CloseMenuDirective,
		IndexNewsItemDirective,
		IndexProductItemDirective,
		ToggleMenuDirective,
		CloseSubMenuDirective,
		ProductDirective,
	],
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		HttpClientModule,
		FormsModule,
		SwiperModule,
		MatProgressBarModule,
		LazyLoadImageModule,
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
		SwiperModule,
		TranslateModule,
		FormsModule,
		CloseMenuDirective,
		IndexNewsItemDirective,
		IndexProductItemDirective,
		ToggleMenuDirective,
		CloseSubMenuDirective,
		MatProgressBarModule,
		LazyLoadImageModule,
		ProductDirective,
	],
	providers: [
		HttpService,
		HeaderService,
		PageInfoService,
		UtilitiesService,
		TranslateService,
	],
})
export class SharedModule {}

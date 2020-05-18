import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CloseMenuDirective } from "../directives/close-menu.directive";
// import { ToggleMenuDirective } from "../directives/toggle-menu.directive";
// import { IndexNewsItemDirective } from "../directives/index-news-item.directive";
// import { ToggleSubMenuDirective } from "../directives/toggle-sub-menu.directive";
// import { IndexProductItemDirective } from "../directives/index-product-item.directive";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { FormContactComponent } from "./form-contact/form-contact.component";
import { BreadcrumbService } from "./breadcrumb/breadcrumb.service";
import { SwiperModule } from "ngx-swiper-wrapper";
import { IndexNewsComponent } from "../index/index-news/index-news.component";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		FormContactComponent,
		IndexNewsComponent,
	],
	imports: [CommonModule,
		RouterModule,
		HttpClientModule,
		SwiperModule,
		FormsModule
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
		FormsModule,
	],
	providers: [BreadcrumbService],
})
export class SharedModule { }

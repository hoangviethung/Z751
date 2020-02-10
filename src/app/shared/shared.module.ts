import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProductItemDirective } from './directives/index-product-item.directive';
import { IndexNewsItemDirective } from './directives/index-news-item.directive';
import { BreadcrumbComponent } from '../components/_shared/breadcrumb/breadcrumb.component';
import { ToggleSubMenuDirective } from './directives/toggle-sub-menu.directive';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { PaginationComponent } from '../components/_shared/pagination/pagination.component';

@NgModule({
	declarations: [
		ToggleMenuDirective,
		ToggleSubMenuDirective,
		CloseMenuDirective,
		BreadcrumbComponent,
		PaginationComponent,
		IndexProductItemDirective,
		IndexNewsItemDirective,
	],
	imports: [
		CommonModule
	],
	exports: [
		ToggleMenuDirective,
		ToggleSubMenuDirective,
		CloseMenuDirective,
		BreadcrumbComponent,
		PaginationComponent,
		IndexProductItemDirective,
		IndexNewsItemDirective,
	]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProductItemDirective } from './directives/index-product-item.directive';
import { IndexNewsItemDirective } from './directives/index-news-item.directive';
import { BreadcrumbComponent } from '../components/_shared/breadcrumb/breadcrumb.component';



@NgModule({
	declarations: [
		IndexProductItemDirective,
		IndexNewsItemDirective,
		BreadcrumbComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		IndexProductItemDirective,
		IndexNewsItemDirective,
		BreadcrumbComponent
	]
})
export class SharedModule { }

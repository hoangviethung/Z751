import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProductItemDirective } from './directives/index-product-item.directive';
import { IndexNewsItemDirective } from './directives/index-news-item.directive';



@NgModule({
	declarations: [
		IndexProductItemDirective,
		IndexNewsItemDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		IndexProductItemDirective,
		IndexNewsItemDirective
	]
})
export class SharedModule { }

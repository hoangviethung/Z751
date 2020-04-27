import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceCategoryRoutingModule } from './commerce-category-routing.module';
import { CommerceCategoryComponent } from './commerce-category.component';


@NgModule({
	declarations: [
		CommerceCategoryComponent
	],
	imports: [
		CommonModule,
		CommerceCategoryRoutingModule
	]
})
export class CommerceCategoryModule { }

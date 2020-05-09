import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/_core/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
	declarations: [CategoryComponent, AddEditComponent],
	imports: [
		CommonModule,
		CategoryRoutingModule,
		SharedModule
	]
})
export class CategoryModule { }

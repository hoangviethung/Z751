import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryAdminRoutingModule } from './category-admin-routing.module';
import { SharedModule } from 'src/_core/shared/shared.module';
import { CategoryAdminComponent } from './category-admin.component';


@NgModule({
	declarations: [CategoryAdminComponent],
	imports: [
		CommonModule,
		CategoryAdminRoutingModule,
		SharedModule
	]
})
export class CategoryAdminModule { }

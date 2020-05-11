import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGroupsRoutingModule } from './product-groups-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ProductGroupsComponent } from './product-groups.component';
import { SharedModule } from 'src/app/_core/shared.module';


@NgModule({
	declarations: [
		ProductGroupsComponent,
		AddEditComponent
	],
	imports: [
		CommonModule,
		ProductGroupsRoutingModule,
		SharedModule
	]
})
export class ProductGroupsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceKeyRoutingModule } from './resource-key-routing.module';
import { ResourceKeyComponent } from './resource-key.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
	declarations: [
		ResourceKeyComponent,
		AddEditComponent
	],
	imports: [
		CommonModule,
		ResourceKeyRoutingModule
	]
})
export class ResourceKeyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceKeyRoutingModule } from './resource-key-routing.module';
import { ResourceKeyComponent } from './resource-key.component';


@NgModule({
	declarations: [
		ResourceKeyComponent
	],
	imports: [
		CommonModule,
		ResourceKeyRoutingModule
	]
})
export class ResourceKeyModule { }

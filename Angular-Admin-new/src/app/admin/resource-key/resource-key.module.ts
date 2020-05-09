import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceKeyRoutingModule } from './resource-key-routing.module';
import { ResourceKeyComponent } from './resource-key.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/_core/shared.module';


@NgModule({
	declarations: [ResourceKeyComponent, EditComponent],
	imports: [
		CommonModule,
		ResourceKeyRoutingModule,
		SharedModule
	]
})
export class ResourceKeyModule { }

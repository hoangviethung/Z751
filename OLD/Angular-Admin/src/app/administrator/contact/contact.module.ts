import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SharedModule } from 'src/_core/shared/shared.module';


@NgModule({
	declarations: [ContactComponent, ViewDetailComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule
	]
})
export class ContactModule { }

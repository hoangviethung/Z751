import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/_core/shared.module';


@NgModule({
	declarations: [ContactComponent, ViewComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule
	]
})
export class ContactModule { }

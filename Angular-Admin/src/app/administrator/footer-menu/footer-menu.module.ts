import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterMenuRoutingModule } from './footer-menu-routing.module';
import { FooterMenuComponent } from './footer-menu.component';


@NgModule({
	declarations: [
		FooterMenuComponent
	],
	imports: [
		CommonModule,
		FooterMenuRoutingModule
	]
})
export class FooterMenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductSimpleComponent } from './product-simple/product-simple.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
	declarations: [
		ProductComponent,
		ProductSimpleComponent,
		ProductDetailComponent
	],
	imports: [
		CommonModule,
		ProductRoutingModule,
		TranslateModule.forChild(),
	]
})
export class ProductModule { }

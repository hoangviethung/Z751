import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductSimpleComponent } from './product-simple/product-simple.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCommentsComponent } from './product-detail/product-comments/product-comments.component';
import { ProductOthersComponent } from './product-detail/product-others/product-others.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
	declarations: [
		ProductComponent,
		ProductSimpleComponent,
		ProductDetailComponent,
		ProductCommentsComponent,
		ProductOthersComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		SwiperModule,
		ProductRoutingModule,
		TranslateModule.forChild(),
	]
})
export class ProductModule { }

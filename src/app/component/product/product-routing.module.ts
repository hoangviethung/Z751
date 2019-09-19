import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchProductComponent } from './branch-product/branch-product.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MetaGuard } from '@ngx-meta/core';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: BranchProductComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'META_TITLE.products',
			}
		}
	},
	{
		path: ':type',
		component: ProductTypesComponent,
	},
	{
		path: ':type/:url',
		component: ProductDetailComponent,
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
	{
		path: ':id',
		component: ProductComponent,
		data: {
			breadcrumb: 'products'
		}
	},
	{
		path: ':id/:productId/:title',
		component: ProductDetailComponent,
		data: {
			breadcrumb: 'products-detail'
		}
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

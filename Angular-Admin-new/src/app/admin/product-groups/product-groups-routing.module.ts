import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGroupsComponent } from './product-groups.component';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ProductGroupsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductGroupsRoutingModule { }

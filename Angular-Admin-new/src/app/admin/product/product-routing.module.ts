import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ProductComponent,
	},
	{
		path: 'add',
		component: AddEditComponent,
		data: { title: 'Thêm sản phẩm' },
	},
	{
		path: 'edit/:ProductId',
		component: AddEditComponent,
		data: { title: 'Chỉnh sửa sản phẩm' },
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}

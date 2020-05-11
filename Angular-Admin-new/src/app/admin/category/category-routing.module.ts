import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: CategoryComponent,
		data: { title: 'Danh mục' },
	},
	{
		path: 'add',
		component: AddEditComponent,
		data: { title: 'Thêm danh mục' },
	},
	{
		path: 'edit/:CategoryId',
		component: AddEditComponent,
		data: { title: 'Chỉnh sửa danh mục' },
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoryRoutingModule {}

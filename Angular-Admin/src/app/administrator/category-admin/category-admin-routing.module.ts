import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CategoryAdminComponent } from './category-admin.component'
import { AddEditComponent } from './add-edit/add-edit.component'

const routes: Routes = [
	{
		path: '',
		component: CategoryAdminComponent,
	},
	{
		path: 'add',
		component: AddEditComponent,
		data: {
			title: 'Thêm danh mục',
		},
	},
	{
		path: 'edit/:bannerid',
		component: AddEditComponent,
		data: {
			title: 'Sửa danh mục',
		},
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoryAdminRoutingModule {}

import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BannerComponent } from './banner.component'
import { AddEditComponent } from './add-edit/add-edit.component'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: BannerComponent,
		data: {
			title: 'Banner',
		},
	},
	{
		path: 'add',
		component: AddEditComponent,
		data: {
			title: 'Thêm banner',
		},
	},
	{
		path: 'edit/:bannerid',
		component: AddEditComponent,
		data: {
			title: 'Sửa banner',
		},
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BannerRoutingModule { }

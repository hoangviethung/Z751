import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MenuComponent } from './menu.component'
import { AddEditComponent } from './add-edit/add-edit.component'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
	},
	{
		path: ':menuTitle',
		component: MenuComponent,
	},
	{
		path: ':menuTitle/add',
		component: AddEditComponent,
	},
	{
		path: ':menuTitle/edit/:menuId',
		component: AddEditComponent,
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuRoutingModule { }

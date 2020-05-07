import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: RoleComponent,
	},
	{
		path: 'add',
		component: AddEditComponent,
	},
	{
		path: 'edit/:RoleId',
		component: AddEditComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoleRoutingModule {}

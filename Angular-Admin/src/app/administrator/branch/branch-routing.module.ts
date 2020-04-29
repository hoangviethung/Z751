import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './branch.component';
import { AddEditComponent } from './add-edit/add-edit.component';


const routes: Routes = [
	{
		path: '',
		component: BranchComponent
	},
	{
		path: 'add',
		component: AddEditComponent
	},
	{
		path: 'edit/:branchAdminId',
		component: AddEditComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BranchRoutingModule { }

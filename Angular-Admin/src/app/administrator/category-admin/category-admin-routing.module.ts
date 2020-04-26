import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAdminModule } from './category-admin.module';
import { CategoryAdminComponent } from './category-admin.component';


const routes: Routes = [
	{
		path: '',
		component: CategoryAdminComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoryAdminRoutingModule { }

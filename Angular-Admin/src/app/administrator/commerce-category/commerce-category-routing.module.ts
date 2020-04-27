import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommerceCategoryComponent } from './commerce-category.component';


const routes: Routes = [
	{
		path: '',
		component: CommerceCategoryComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CommerceCategoryRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';


const routes: Routes = [
	{
		path: '',
		component: ContactComponent
	},
	{
		path: 'viewDetail/:contactid',
		component: ViewDetailComponent,
		data: {
			title: 'Chi tiết liên lạc',
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContactRoutingModule { }

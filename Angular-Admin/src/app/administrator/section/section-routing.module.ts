import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
	{
		path: '',
		component: SectionComponent
	},
	{
		path: 'edit/:templateid',
		component: EditComponent,
		data: {
			title: 'Sửa nội dung',
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SectionRoutingModule { }

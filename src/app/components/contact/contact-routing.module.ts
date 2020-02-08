import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ContactComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class ContactRoutingModule { }

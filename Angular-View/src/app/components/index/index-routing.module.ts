import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: IndexComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class IndexRoutingModule { }

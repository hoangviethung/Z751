import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: PageNotFoundComponent
	}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class PageNotFoundRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: AboutComponent
	}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class AboutRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ProfileComponent
	}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class ProfileRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterMenuComponent } from './footer-menu.component';


const routes: Routes = [
	{
		path: '',
		component: FooterMenuComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FooterMenuRoutingModule { }

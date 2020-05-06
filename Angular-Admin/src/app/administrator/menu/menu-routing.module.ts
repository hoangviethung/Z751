import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MenuComponent } from './menu.component'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
	},
	{
		path: 'main',
		component: MenuComponent,
	},
	{
		path: 'footer',
		component: MenuComponent,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuRoutingModule {}

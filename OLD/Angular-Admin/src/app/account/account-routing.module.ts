import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: 'login',
		loadChildren: () =>
			import('./login/login.module').then((m) => m.LoginModule),
		data: { title: 'Login', customLayout: true },
	},
	{
		path: 'register',
		loadChildren: () =>
			import('./register/register.module').then((m) => m.RegisterModule),
		data: { title: 'register', customLayout: true },
	},
	{
		path: 'logout',
		loadChildren: () =>
			import('./logout/logout.module').then((m) => m.LogoutModule),
		data: { title: 'logout', customLayout: true },
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}

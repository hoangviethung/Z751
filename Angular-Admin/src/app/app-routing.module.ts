import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'admin',
		pathMatch: 'full',
	},
	{
		path: '',
		data: { title: 'Administrator' },
		children: [
			{ path: '', redirectTo: 'admin', pathMatch: 'full' },
			{
				path: 'admin',
				loadChildren: () =>
					import('./administrator/administrator.module').then(
						(m) => m.AdministratorModule
					),
				data: { title: 'Admin' },
			},
			{
				path: 'auth',
				loadChildren: './account/account.module#AccountModule',
			},
		],
	},
	{ path: '**', redirectTo: 'admin' },
]
console.log(1)

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: false,
			onSameUrlNavigation: 'reload',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

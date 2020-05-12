import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './route-guard.service';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'admin',
	},
	{
		path: 'account',
		data: { title: 'Account' },
		loadChildren: () =>
			import('./account/account.module').then((m) => m.AccountModule),
	},
	{
		path: 'admin',
		data: { title: 'Administrator' },
		loadChildren: () =>
			import('./admin/admin.module').then((m) => m.AdminModule),
		canActivate: [RouteGuardService],
	},
	{ path: '**', redirectTo: 'admin' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

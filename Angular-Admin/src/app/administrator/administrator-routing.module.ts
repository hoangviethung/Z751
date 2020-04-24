import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageForbiddenComponent } from '../../core/layout/page-forbidden/page-forbidden.component'
import { PageNotFoundComponent } from '../../core/layout/page-not-found/page-not-found.component'
import { AdministratorComponent } from './administrator.component'

const routes: Routes = [
	{
		path: '',
		component: AdministratorComponent,
		data: { title: 'Administrator' },
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
				data: { title: 'Dashboard' },
			},
			{
				path: 'banner',
				loadChildren: () =>
					import('./banner/banner.module').then(
						(m) => m.BannerModule
					),
				data: { title: 'Banner' },
			},
			{
				path: 'article',
				loadChildren: () =>
					import('./article/article.module').then(
						(m) => m.ArticleModule
					),
				data: { title: 'Article' },
			},
		],
	},
	{
		path: 'forbidden',
		component: PageForbiddenComponent,
		data: { title: '403 Forbidden' },
	},
	{
		path: 'not-found',
		component: PageNotFoundComponent,
		data: { title: '404 Not found' },
	},
	{ path: '**', redirectTo: 'not-found' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdministratorRoutingModule { }

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
			{
				path: 'setting',
				loadChildren: () =>
					import('./setting/setting.module').then(
						(m) => m.SettingModule
					),
				data: { title: 'Cài Đặt' },
			},
			{
				path: 'resource-key',
				loadChildren: () =>
					import('./resource-key/resource-key.module').then(
						(m) => m.ResourceKeyModule
					),
				data: { title: 'Tài nguyên' },
			},
			{
				path: 'category-admin',
				loadChildren: () =>
					import('./category-admin/category-admin.module').then(
						(m) => m.CategoryAdminModule
					),
				data: { title: 'Danh Mục Admin' },
			},
			{
				path: 'about',
				loadChildren: () =>
					import('./about/about.module').then(
						(m) => m.AboutModule),
				data: { title: 'Giới thiệu' },
			},
			{
				path: 'user',
				loadChildren: () =>
					import('./user/user.module').then(
						(m) => m.UserModule),
				data: { title: 'Tài khoản' },
			},
			{
				path: 'role',
				loadChildren: () =>
					import('./role/role.module').then(
						(m) => m.RoleModule),
				data: { title: 'Quản lí quyền' },
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

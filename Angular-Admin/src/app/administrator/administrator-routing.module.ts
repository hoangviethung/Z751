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
				path: 'section',
				loadChildren: () =>
					import('./section/section.module').then(
						(m) => m.SectionModule),
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
			{
				path: 'main-menu',
				loadChildren: () =>
					import('./main-menu/main-menu.module').then(
						(m) => m.MainMenuModule),
				data: { title: 'Menu chính' },
			},
			{
				path: 'footer-menu',
				loadChildren: () =>
					import('./footer-menu/footer-menu.module').then(
						(m) => m.FooterMenuModule),
				data: { title: 'Footer Menu' },
			},
			{
				path: 'branch',
				loadChildren: () =>
					import('./branch/branch.module').then(
						(m) => m.BranchModule),
				data: { title: 'Chi nhánh' },
			},
			{
				path: 'commerce-category',
				loadChildren: () =>
					import('./commerce-category/commerce-category.module').then(
						(m) => m.CommerceCategoryModule),
				data: { title: 'Danh mục sản phẩm' },
			},
			{
				path: 'brand',
				loadChildren: () =>
					import('./brand/brand.module').then(
						(m) => m.BrandModule),
				data: { title: 'Thương hiệu' },
			},
			{
				path: 'products',
				loadChildren: () =>
					import('./products/products.module').then(
						(m) => m.ProductsModule),
				data: { title: 'Danh sách sản phẩm' },
			},
			{
				path: 'contact',
				loadChildren: () =>
					import('./contact/contact.module').then(
						(m) => m.ContactModule),
				data: { title: 'Danh sách khách hàng liên lạc' },
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

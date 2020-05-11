import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RouteGuardService } from '../route-guard.service';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		data: { title: 'Administrator' },
		canActivate: [RouteGuardService],
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
				data: { title: 'Dashboard' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'banner',
				loadChildren: () =>
					import('./banner/banner.module').then(
						(m) => m.BannerModule
					),
				data: { title: 'Banner' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'article',
				loadChildren: () =>
					import('./article/article.module').then(
						(m) => m.ArticleModule
					),
				data: { title: 'Bài viết' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'setting',
				loadChildren: () =>
					import('./setting/setting.module').then(
						(m) => m.SettingModule
					),
				data: { title: 'Cài Đặt' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'resource-key',
				loadChildren: () =>
					import('./resource-key/resource-key.module').then(
						(m) => m.ResourceKeyModule
					),
				data: { title: 'Tài nguyên' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'category',
				loadChildren: () =>
					import('./category/category.module').then(
						(m) => m.CategoryModule
					),
				data: { title: 'Danh Mục' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'section',
				loadChildren: () =>
					import('./section/section.module').then(
						(m) => m.SectionModule
					),
				data: { title: 'Giới thiệu' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'user',
				loadChildren: () =>
					import('./user/user.module').then((m) => m.UserModule),
				data: { title: 'Tài khoản' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'role',
				loadChildren: () =>
					import('./role/role.module').then((m) => m.RoleModule),
				data: { title: 'Quản lí quyền' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'menu/:menuTitle',
				loadChildren: () =>
					import('./menu/menu.module').then((m) => m.MenuModule),
				data: { title: 'Menu' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'branch',
				loadChildren: () =>
					import('./branch/branch.module').then(
						(m) => m.BranchModule
					),
				data: { title: 'Chi nhánh' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'brand',
				loadChildren: () =>
					import('./brand/brand.module').then((m) => m.BrandModule),
				data: { title: 'Thương hiệu' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'products',
				loadChildren: () =>
					import('./product/product.module').then(
						(m) => m.ProductModule
					),
				data: { title: 'Danh sách sản phẩm' },
				canActivate: [RouteGuardService],
			},
			{
				path: 'contact',
				loadChildren: () =>
					import('./contact/contact.module').then(
						(m) => m.ContactModule
					),
				data: { title: 'Danh sách khách hàng liên lạc' },
				canActivate: [RouteGuardService],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}

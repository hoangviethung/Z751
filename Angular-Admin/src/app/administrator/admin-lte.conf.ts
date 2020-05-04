export const adminLteConf = {
	skin: 'blue',
	// isSidebarLeftCollapsed: false,
	// isSidebarLeftExpandOnOver: false,
	// isSidebarLeftMouseOver: false,
	// isSidebarLeftMini: true,
	// sidebarRightSkin: 'dark',
	// isSidebarRightCollapsed: true,
	// isSidebarRightOverContent: true,
	// layout: 'normal',

	// Đây là menu mặc định của admin lte
	sidebarLeftMenu: [
		// { label: 'MAIN NAVIGATION', separator: true },
		{
			label: 'Dashboard',
			route: '/admin/dashboard',
			routeActive: 'admin/dashboard',
			iconClasses: 'lnr lnr-chart-bars',
		},
		{
			label: 'Nội dung',
			routeActive: 'admin/dashboard',
			iconClasses: 'lnr lnr-laptop-phone',
			children: [
				{
					label: 'Banner',
					route: '/admin/banner',
					routeActive: 'admin/banner',
					iconClasses: 'lnr lnr-picture',
				},
				{
					label: 'Bài viết',
					route: '/admin/article',
					routeActive: '/admin/article',
					iconClasses: 'lnr lnr-book',
				},
				{
					label: 'Danh mục',
					route: '/admin/category-admin',
					routeActive: '/admin/category-admin',
					iconClasses: 'lnr lnr-list',
				},
				{
					label: 'Giới thiệu',
					route: '/admin/section',
					routeActive: '/admin/section',
					iconClasses: 'lnr lnr-pushpin',
				},
			],
		},
		{
			label: 'Cài đặt',
			iconClasses: 'lnr lnr-cog',
			children: [
				{
					label: 'Seting',
					route: '/admin/setting',
					routeActive: '/admin/setting',
					iconClasses: 'lnr lnr-cog',
				},
				{
					label: 'Tài nguyên',
					route: '/admin/resource-key',
					routeActive: '/admin/resource-key',
					iconClasses: 'lnr lnr-layers',
				},
			],
		},
		{
			label: 'Thành viên',
			iconClasses: 'lnr lnr-users',
			children: [
				{
					label: 'Tài khoản quản trị',
					route: '/admin/user',
					routeActive: '/admin/user',
					iconClasses: 'lnr lnr-user',
				},
				{
					label: 'Quản lí quyền',
					route: '/admin/role',
					routeActive: '/admin/role',
					iconClasses: 'lnr lnr-layers',
				},
			],
		},
		{
			label: 'Menu',
			iconClasses: 'lnr lnr-menu-circle',
			children: [
				{
					label: 'Main Menu',
					route: '/admin/main-menu',
					routeActive: '/admin/main-menu',
					iconClasses: 'lnr lnr-menu-circle',
				},
				{
					label: 'Footer Menu',
					route: '/admin/footer-menu',
					routeActive: '/admin/footer-menu',
					iconClasses: 'lnr lnr-layers',
				},
			],
		},
		{
			label: 'Thương mai điện tử',
			iconClasses: 'lnr lnr-cart',
			children: [
				{
					label: 'Danh mục',
					route: '/admin/commerce-category',
					routeActive: '/admin/commerce-category',
					iconClasses: 'lnr lnr-menu-circle',
				},
				{
					label: 'Thương hiệu',
					route: '/admin/brand',
					routeActive: '/admin/brand',
					iconClasses: 'lnr lnr-tag',
				},
				{
					label: 'Sản phẩm',
					route: '/admin/products',
					routeActive: '/admin/products',
					iconClasses: 'lnr lnr-linearicons',
				},
			],
		},
		{
			label: 'Chi nhánh',
			route: '/admin/branch',
			routeActive: 'admin/branch',
			iconClasses: 'lnr lnr-map',
		},
		{
			label: 'Khách hàng liên lạc',
			route: '/admin/contact',
			routeActive: 'admin/contact',
			iconClasses: 'lnr lnr-envelope',
		},
	],

	// Menu nay la flexible menu neu muốn change. Xem trong file Administrator.component.ts
	sidebarInternalUserLeftMenu: [
		// { label: 'MAIN NAVIGATION', separator: true },
		{
			label: 'My tasks',
			route: '/admin/my-tasks',
			routeActive: 'admin/my-tasks',
			iconClasses: 'fa fa-circle-o',
		},
		{
			label: 'Order Management',
			route: '/admin/order-management',
			routeActive: 'admin/order-management',
			iconClasses: 'fa fa-circle-o',
		},
		{
			label: 'Administration',
			route: '/admin/administration',
			routeActive: 'admin/administration',
			iconClasses: 'fa fa-circle-o',
		},
	],
	sidebarContractorLeftMenu: [
		{ label: 'MAIN NAVIGATION', separator: true },
		{
			label: 'My tasks',
			route: '/admin/my-tasks',
			routeActive: 'admin/my-tasks',
			iconClasses: 'fa fa-circle-o',
		},
	],
}

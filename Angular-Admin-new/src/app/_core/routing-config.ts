export const AdminRoutingConfig = [
	{
		label: 'Dashboard',
		route: '/admin/dashboard',
		iconClasses: 'lnr lnr-chart-bars',
	},
	{
		label: 'Nội dung',
		iconClasses: 'lnr lnr-laptop-phone',
		children: [
			{
				label: 'Banner',
				route: '/admin/banner',
				iconClasses: 'lnr lnr-picture',
			},
			{
				label: 'Bài viết',
				route: '/admin/article',
				iconClasses: 'lnr lnr-book',
			},
			{
				label: 'Danh mục',
				route: '/admin/category',
				iconClasses: 'lnr lnr-list',
			},
			{
				label: 'Thương hiệu',
				route: '/admin/brand',
				iconClasses: 'lnr lnr-tag',
			},
			{
				label: 'Sản phẩm',
				route: '/admin/products',
				iconClasses: 'lnr lnr-linearicons',
			},
			{
				label: 'Giới thiệu',
				route: '/admin/section',
				iconClasses: 'lnr lnr-pushpin',
			},
		],
	},
	{
		label: 'Menu',
		iconClasses: 'lnr lnr-menu-circle',
		children: [
			{
				label: 'Main Menu',
				route: '/admin/menu/main',
				iconClasses: 'lnr lnr-menu-circle',
			},
			{
				label: 'Footer Menu',
				route: '/admin/menu/footer',
				iconClasses: 'lnr lnr-layers',
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
				iconClasses: 'lnr lnr-cog',
			},
			{
				label: 'Tài nguyên',
				route: '/admin/resource-key',
				iconClasses: 'lnr lnr-layers',
			},
		],
	},
	{
		label: 'Tài khoản',
		iconClasses: 'lnr lnr-users',
		children: [
			{
				label: 'Tài khoản quản trị',
				route: '/admin/user',
				iconClasses: 'lnr lnr-user',
			},
			{
				label: 'Quản lí quyền',
				route: '/admin/role',
				iconClasses: 'lnr lnr-layers',
			},
		],
	},
	{
		label: 'Chi nhánh',
		route: '/admin/branch',
		iconClasses: 'lnr lnr-map',
	},
	{
		label: 'Khách hàng liên lạc',
		route: '/admin/contact',
		iconClasses: 'lnr lnr-envelope',
	},
];

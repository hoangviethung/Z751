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
				featureName: 'ManageBanner'
			},
			{
				label: 'Bài viết',
				route: '/admin/article',
				iconClasses: 'lnr lnr-book',
				featureName: 'ManageNews'
			},
			{
				label: 'Danh mục',
				route: '/admin/category',
				iconClasses: 'lnr lnr-list',
				featureName: 'ManageCategory'
			},
			{
				label: 'Nhóm sản phẩm',
				route: '/admin/product-groups',
				iconClasses: 'lnr lnr-layers',
				featureName: 'ManageProductGroup'
			},
			{
				label: 'Sản phẩm',
				route: '/admin/products',
				iconClasses: 'lnr lnr-linearicons',
				featureName: 'ManageProduct'
			},
			{
				label: 'Giới thiệu',
				route: '/admin/section',
				iconClasses: 'lnr lnr-pushpin',
				featureName: 'ManageIntroduction'
			},
		],
	},
	{
		label: 'Menu',
		iconClasses: 'lnr lnr-menu-circle',
		featureName: 'ManageMenu',
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
			{
				label: 'Website Relative',
				route: '/admin/menu/website_relative',
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
				featureName: 'ManageSetting'
			},
			{
				label: 'Tài nguyên',
				route: '/admin/resource-key',
				iconClasses: 'lnr lnr-layers',
				featureName: 'ManageResource'
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
				featureName: 'ManageUsers'
			},
			{
				label: 'Quản lí quyền',
				route: '/admin/role',
				iconClasses: 'lnr lnr-layers',
				featureName: 'ManagePermissions'
			},
		],
	},
	{
		label: 'Chi nhánh',
		route: '/admin/branch',
		iconClasses: 'lnr lnr-map',
		featureName: 'ManageBranch'
	},
	{
		label: 'Khách hàng liên lạc',
		route: '/admin/contact',
		iconClasses: 'lnr lnr-envelope',
		featureName: 'ManageContact'
	},
	{
		label: 'Quản lý thư mục',
		route: '/admin/file-manager',
		iconClasses: 'lnr lnr-cloud-check',
		featureName: ['ManageCategory', 'ManageNews']
	},
];

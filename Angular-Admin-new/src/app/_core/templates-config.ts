import { TemplateModel } from './models/template.model';

export const TemplatesConfig: Array<TemplateModel> = [
	{ id: 1, title: 'Trang chủ', titleEnglish: 'Home', isDefault: true },
	{ id: 2, title: 'Giới thiệu', titleEnglish: 'About', isDefault: false },
	{ id: 3, title: 'Sản phẩm', titleEnglish: 'Product', isDefault: false },
	{
		id: 4,
		title: 'Đơn vị thành viên',
		titleEnglish: 'Department',
		isDefault: false,
		haveList: true,
	},
	{
		id: 5,
		title: 'Năng lực',
		titleEnglish: 'Potential',
		isDefault: false,
		haveList: true,
	},
	{ id: 6, title: 'Tin tức', titleEnglish: 'News', isDefault: false },
	{ id: 7, title: 'Liên hệ', titleEnglish: 'Contact', isDefault: false },
];

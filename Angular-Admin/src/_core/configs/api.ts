export const ApiConfig = {
	folder: {
		gets: '/api/Folder/gets',
		add: '/api/Folder/addadd',
		update: '/api/Folder/addupdate',
		delete: '/api/Folder/adddelete',
	},
	banner: {
		gets: '/api/Banner/gets',
		add: '/api/Banner/add',
		update: '/api/Banner/update',
		delete: '/api/Banner/delete',
	},
	category: {
		get: '/api/Category/get',
		gets: '/api/Category/gets',
		add: '/api/Category/add',
		update: '/api/Category/update',
		delete: '/api/Category/delete',
	},
	article: {
		gets: '/api/Article/gets',
		get: '/api/Article/get',
		add: '/api/Article/add',
		update: '/api/Article/update',
		delete: '/api/Article/delete',
	},
	resource: {
		gets: (lang: string) => `/assets/${lang}.json`,
		update: '/api/Resource/update',
	},
	language: {
		gets: '/api/Language/gets',
		get: '/api/Language/get',
		switch: '/api/Language/switch',
	},
	section: {
		gets: '/api/Section/gets',
		get: '/api/Section/used/get',
		update: '/api/Section/update',
	},
	setting: {
		gets: '/api/Setting/gets',
	},
}

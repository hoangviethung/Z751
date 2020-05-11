export enum ResultCode {
	Fail = 401,
	Success = 200,
	InternalServerError = 500,
	NotFound = 404,
}

export class PermissionCollection {
	View = 5;
	Add = 10;
	Edit = 15;
	Delete = 20;
}

export enum LanguageFlag {
	vi = 'http://27.71.234.45:40000/assets/images/vi.png',
	en = 'http://27.71.234.45:40000/assets/images/en.png',
}

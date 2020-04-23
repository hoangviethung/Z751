export class AppConsts {
	public static appName: string = 'Voltage'

	public static appBaseUrl: string = ''
	public static imageDataUrl: string = ''
	public static appAccountUrl: string = ''
	public static remoteServiceBaseUrl: string = ''
	public static languageUrl: string = '/assets/lang/'

	public static defaultLang: string = 'en'
	public static rolesAllowed: string[] = []
	public static localeMappings: any = []
	public static appMappings: any = []

	public static isLoaded: boolean = false
	public static configUrl = 'assets/appconfig.json'
	public static configDevUrl = 'assets/appconfig-dev.json'
	public static logoDefaultUrl = 'assets/img/logo-default.png'
	public static imageDefaultUrl = 'assets/img/image-default.png'
	public static userNamePattern = /^[a-zA-Z0-9@.]+$/
	public static nonSpecialCharPattern = /^[a-zA-Z0-9]+$/
	public static numberPattern = /^[0-9]+$/
	public static nonSpecialCharVietnamesePattern = /^[a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/
	public static vietnamPhonePattern = /^(03|04|05|09|08|07)[0-9]{8}$/
	public static emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	public static expiryTime = 1800000 // milisecond
	public static defaultLimitPage: number = 10
	public static daysOfWeek: any[] = [
		{
			id: 1,
			name: 'Sunday',
		},
		{
			id: 2,
			name: 'Monday',
		},
		{
			id: 3,
			name: 'Tuesday',
		},
		{
			id: 4,
			name: 'Wednesday',
		},
		{
			id: 5,
			name: 'Thursday',
		},
		{
			id: 6,
			name: 'Friday',
		},
		{
			id: 7,
			name: 'Saturday',
		},
	]
	public static firstPage: number = 1
	public static maxLimitPage: number = 9999
	public static defaultId: string = '0000000000000000000000000'
}

export class CookieKeys {
	public static userinfo: string = 'userinfo'
	public static accessToken: string = 'accesstoken'
	public static lang: string = 'lang'
}

export class UrlConsts {
	public static urlHome = '/'
	public static urlHomepage = 'homepage'
	public static urlDemo = 'urlDemo'
	public static urlLogin = 'auth/login'
	public static urlLogout = 'auth/logout'
	public static urlRegister = 'register'
	public static url404Page = 'not-found'
	public static url403Page = 'forbidden'
	public static urlAuthenticate = 'authenticate'

	// for business
	public static urlDefaultOfContractor = '/my-tasks?page=Assignments'

	public static imageDefaultProfile = 'assets/img/default-profile.png'
}

export class ParamUrlKeys {
	public static accesstoken = 'acceasstoken'
	public static lang = 'lang'
	public static id = 'id'
	public static returnurl = 'returnurl'
}

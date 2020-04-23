export class LoginModel {
	public userName: string
	public password: string
	public isRememberMe: boolean
	public appName: string
	public deviceInfo: string

	public constructor(init?: Partial<LoginModel>) {
		Object.assign(this, init)
	}
}

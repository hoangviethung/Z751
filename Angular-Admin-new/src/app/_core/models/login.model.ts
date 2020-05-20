export class LoginModel {
	public userName: string = null;
	public password: string = null;
	public isRememberMe: boolean;

	constructor(init?: Partial<LoginModel>) {
		Object.assign(this, init);
	}
}

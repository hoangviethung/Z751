export class LoginModel {
	public userName: string;
	public password: string;
	public isRememberMe: boolean;

	constructor(init?: Partial<LoginModel>) {
		Object.assign(this, init);
	}
}

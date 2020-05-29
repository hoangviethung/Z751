export class UserModel {
	userName: string = null;
	email: string = null;
	firstName: string = null;
	lastName: string = null;
	address: string = null;
	phoneNumber: string = null;
	gender: boolean;
	dayOfBirth: string = null;
	image: string = null;
	isSuperAdmin: boolean;
	accessToken: string = null;
	roles: any;
	permissions: string | any[] = null;
	fullName: string = null;
	imageUrl: string = null;
	isActive: boolean;
	isDisabled: boolean;
}

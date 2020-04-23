import { AppConsts } from '../constant/AppConsts'

export class ValidationHelper {
	public static isEmail(email: string): boolean {
		return AppConsts.emailPattern.test(String(email).toLowerCase())
	}

	public static isPhoneNumber(phone: string): boolean {
		return AppConsts.vietnamPhonePattern.test(String(phone).toLowerCase())
	}

	public static isHaveNotSpecialChar(str: string): boolean {
		return AppConsts.nonSpecialCharPattern.test(String(str).toLowerCase())
	}
}

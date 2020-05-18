import { Injectable } from "@angular/core";
import { CookieService as cookieSvc } from "ngx-cookie-service";

export enum CookieExpires {
	LongTime = 15, // days
	ShortTime = 7, // days
}

@Injectable({
	providedIn: "root",
})
export class CookieService {
	constructor(private cookie: cookieSvc) {}

	set(key: string, value: string, expires = CookieExpires.ShortTime) {
		const expireDate = new Date();
		expireDate.setDate(expireDate.getDate() + expires);

		this.cookie.set(key, value, expireDate, "/");
	}

	get(key: string): string {
		return this.cookie.get(key);
	}

	getAll(): any {
		return this.cookie.getAll();
	}

	check(key: string): boolean {
		return this.cookie.check(key);
	}

	delete(key: string) {
		this.cookie.delete(key, "/");
	}

	deleteAll() {
		this.cookie.deleteAll("/");
	}

	getToken() {
		const cookie = this.get("user");
		if (cookie) {
			const token = JSON.parse(decodeURI(cookie)).accessToken;
			return token;
		}
		return "";
	}
}

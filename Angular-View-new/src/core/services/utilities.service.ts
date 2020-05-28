import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
	providedIn: "root",
})
export class UtilitiesService {
	constructor(@Inject(DOCUMENT) private document: Document) {}

	showAlert(title) {
		alert(title);
	}

	public alias(string: string) {
		string = string.toLowerCase();

		// xóa dấu
		string = string
			.normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
			.replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

		// Thay ký tự đĐ
		string = string.replace(/[đĐ]/g, "d");

		// Xóa ký tự đặc biệt
		string = string.replace(/([^0-9a-z-\s])/g, "");

		// Xóa khoảng trắng thay bằng ký tự -
		string = string.replace(/(\s+)/g, "-");

		// Xóa ký tự - liên tiếp
		string = string.replace(/-+/g, "-");

		// xóa phần dư - ở đầu & cuối
		string = string.replace(/^-+|-+$/g, "");

		// return
		return string;
	}

	getQueryParams(name, url) {
		if (!url) url = this.document.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
}

import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {

	constructor() { }

	showAlert(title) {
		alert(title)
	}

	public alias(string) {
		string = string.toLowerCase();

		// xóa dấu
		string = string
			.normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
			.replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

		// Thay ký tự đĐ
		string = string.replace(/[đĐ]/g, 'd');

		// Xóa ký tự đặc biệt
		string = string.replace(/([^0-9a-z-\s])/g, '');

		// Xóa khoảng trắng thay bằng ký tự -
		string = string.replace(/(\s+)/g, '-');

		// Xóa ký tự - liên tiếp
		string = string.replace(/-+/g, '-');

		// xóa phần dư - ở đầu & cuối
		string = string.replace(/^-+|-+$/g, '');

		// return
		return string;
	}

}

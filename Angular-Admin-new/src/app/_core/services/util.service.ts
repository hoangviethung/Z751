import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.model';

@Injectable({
	providedIn: 'root',
})
export class UtilService {
	constructor(@Inject(DOCUMENT) private document: Document) {}

	alias(str: string) {
		//Đổi chữ hoa thành chữ thường
		str = str.toLowerCase();

		//Đổi ký tự có dấu thành không dấu
		str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
		str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
		str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
		str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
		str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
		str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
		str = str.replace(/đ/gi, 'd');
		//Xóa các ký tự đặt biệt
		str = str.replace(
			/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
			''
		);
		//Đổi khoảng trắng thành ký tự gạch ngang
		str = str.replace(/ /gi, '-');
		//Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
		//Phòng trường hợp người nhập vào quá nhiều ký tự trắng
		str = str.replace(/\-\-\-\-\-/gi, '-');
		str = str.replace(/\-\-\-\-/gi, '-');
		str = str.replace(/\-\-\-/gi, '-');
		str = str.replace(/\-\-/gi, '-');
		//Xóa các ký tự gạch ngang ở đầu và cuối
		str = '@' + str + '@';
		str = str.replace(/\@\-|\-\@|\@/gi, '');
		return str;
	}

	getOriginUrl(url?: string) {
		if (url) {
			return `${environment.websiteUrl}/${url}/`;
		}
		return `${environment.websiteUrl}/`;
	}

	getLanguages() {
		return JSON.parse(localStorage.getItem('languages'));
	}

	getBeautifulListCategory(categories: Array<CategoryModel>) {
		let noMainCategories: Array<CategoryModel> = [].concat(categories);
		const mainCategories: Array<CategoryModel> = categories.filter(
			(category) => {
				if (!category.parent) {
					noMainCategories.splice(
						noMainCategories.indexOf(category),
						1
					);
					return category;
				}
			}
		);
		const subCategories = (categories: Array<CategoryModel>) => {
			let noMainCategoriesAfterFilter: Array<CategoryModel> = [].concat(
				noMainCategories
			);
			categories.forEach((item) => {
				const children = noMainCategoriesAfterFilter.filter(
					(category) => {
						if (category.parentId == item.id) {
							return category;
						}
					}
				);
				if (children.length > 0) {
					item.children = children;
					item.children = subCategories(item.children);
				}
			});
			return categories;
		};
		return subCategories(mainCategories);
	}
}

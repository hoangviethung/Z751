import { Injectable } from '@angular/core';
import { FileModel } from '../model/file.model';
import { stringify } from 'querystring';

@Injectable({
	providedIn: 'root'
})

export class UploadService {
	fileUpload: FileModel
	data: string
	constructor() { }

	toBase64 = file => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

	async upload(currentFolder?) {
		const $inputUploadFile = (<HTMLInputElement>document.getElementsByName("fileupload")[0]);
		const path = $inputUploadFile.value;
		let data = await this.toBase64($inputUploadFile.files[0]).catch(e => Error(e));
		const typeFile = $inputUploadFile.files[0].type
		data = (<string>data).replace(`data:${typeFile};base64,`, '')
		const name = $inputUploadFile.value.replace(/^.*[\\\/]/, '');
		const type = $inputUploadFile.value.replace(/^.*[\\\/]/, '').split('.').pop();
		const length = $inputUploadFile.files[0].size;
		const params = this.fileUpload = {
			data: data,
			path: path,
			name: name,
			type: type,
			length: length,
			imageFolder: currentFolder,
		};
		return params
	}
}

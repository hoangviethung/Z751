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

	async upload(inputUploadFile: File, currentFolder?) {
		const path = inputUploadFile.name;
		let data = await this.toBase64(inputUploadFile).catch(e => Error(e));
		const typeFile = inputUploadFile.type
		data = (<string>data).replace(`data:${typeFile};base64,`, '')
		const name = inputUploadFile.name.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
		const type = inputUploadFile.name.replace(/^.*[\\\/]/, '').split('.').pop();
		const length = inputUploadFile.size;
		const params = this.fileUpload = {
			data: data,
			path: path,
			name: name,
			type: type,
			length: length,
			imageFolder: currentFolder.path,
		};
		return params
	}
}

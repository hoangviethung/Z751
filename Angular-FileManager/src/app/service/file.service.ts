import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '../model/file.model';
export interface IFileService {
	gets(path: string);
}

@Injectable({
	providedIn: 'root',
})
export class FileService {
	files = [];
	constructor(private http: HttpClient) {}

	getFiles(path: string = '') {
		path = path.replace('http://27.71.234.45:8080/upload/', '');
		return this.http.get(
			'http://27.71.234.45:8080/api/File/gets?folder=' + path
		);
	}

	addFile(params) {
		params.imageFolder = params.imageFolder.replace(
			'http://27.71.234.45:8080/upload/',
			''
		);
		return this.http.post<Object>(
			'http://27.71.234.45:8080/api/File/add',
			params
		);
	}

	deleteFile(path) {
		path = path.replace('http://27.71.234.45:8080/', '');
		return this.http.post<Object>(
			`http://27.71.234.45:8080/api/File/delete?path=${path}`,
			{}
		);
	}

	randomId(files: FileModel[], parentId: string): FileModel[] {
		files.forEach((element, i) => {
			element.id = parentId + i;
			const url = new URL(element.path);
			element.pathName = url.pathname;
		});
		return files;
	}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '../model/filemodel';
export interface IFileService {
	gets(path: string);
}

@Injectable()
export class FileService {
	constructor(
		private http: HttpClient
	) { }

	getFiles(path: string = "") {
		path = path.replace("http://27.71.234.45:8080/upload/", "");
		return this.http.get("http://27.71.234.45:8080/api/File/gets?folder=" + path);
	}

	addFile(params) {
		return this.http.post<Object>("http://27.71.234.45:8080/api/File/add", params)
	}

	randomId(files: FileModel[], parentId: string): FileModel[] {
		files.forEach((element, i) => {
			element.id = parentId + i
		})
		return files;
	}
}

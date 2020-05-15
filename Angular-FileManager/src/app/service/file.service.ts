import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '../model/file.model';
import { ToastrService } from 'ngx-toastr';

export interface IFileService {
	gets(path: string);
}

@Injectable({
	providedIn: 'root'
})

export class FileService {
	constructor(
		private http: HttpClient,
		private toastrSvc: ToastrService
	) { }

	getFiles(path: string = "") {
		path = path.replace("http://27.71.234.45:8080/upload/", "");
		return this.http.get("http://27.71.234.45:8080/api/File/gets?folder=" + path);
	}

	addFile(params) {
		this.http.post<Object>("http://27.71.234.45:8080/api/File/add", params)
			.subscribe((response: any) => {
				console.log(response);
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			})
	}

	randomId(files: FileModel[], parentId: string): FileModel[] {
		files.forEach((element, i) => {
			element.id = parentId + i
		})
		return files;
	}
}

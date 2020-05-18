import {
	HttpClient,
} from "@angular/common/http";
import { FolderModel } from '../model/folder.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FolderEventModel } from '../model/folder-event.model';

export interface IFolderService {
	gets(path: string);
	create(name: string);
}


@Injectable({
	providedIn: 'root'
})

export class FolderService implements IFolderService {
	// Parent folder is used for create sub-folder
	event: FolderEventModel;

	eventChange: Subject<FolderEventModel> = new Subject<FolderEventModel>();

	setEvent(event: FolderEventModel) {
		event.path = event.path.replace("http://27.71.234.45:8080/upload/", "");
		return this.eventChange.next(event);
	}

	constructor(
		private http: HttpClient
	) {
		this.eventChange.subscribe((value) => {
			this.event = value
		});
	}

	gets(path: string = "") {
		path = path.replace("http://27.71.234.45:8080/upload/", "");
		return this.http.get("http://27.71.234.45:8080/api/Folder/gets?folder=" + path)
	}

	create(name: string) {
		return this.http.post<Object>("http://27.71.234.45:8080/api/Folder/add", {
			path: name
		})
	}

	update(path: string, newPath: string) {
		path = path.replace("http://27.71.234.45:8080/upload/", "");
		newPath = newPath.replace("http://27.71.234.45:8080/upload/", "");
		return this.http.post<Object>("http://27.71.234.45:8080/api/Folder/edit", {
			path: name, newPath: newPath
		})
	}

	delete(path: string) {
		path = path.replace("http://27.71.234.45:8080/upload/", "");
		return this.http.post<Object>("http://27.71.234.45:8080/api/Folder/delete?folder=" + path, {
		})
	}

	randomId(folders: FolderModel[], parentId: string, level: number): FolderModel[] {
		folders.forEach((element, i) => {
			element.level = level
			element.id = parentId + i
			if (element.items != null) {
				element.items = this.randomId(element.items, element.id + "-", level + 1)
			}
		})
		return folders;
	}
}

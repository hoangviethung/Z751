import { HttpClient } from '@angular/common/http';
import { FolderModel } from '../model/folder.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FolderEventModel } from '../model/folder-event.model';
import { UploadPath, File, Folder } from './path';

export interface IFolderService {
	gets(path: string);
	create(name: string);
}

@Injectable({
	providedIn: 'root',
})
export class FolderService implements IFolderService {
	// Parent folder is used for create sub-folder
	event: FolderEventModel;

	eventChange: Subject<FolderEventModel> = new Subject<FolderEventModel>();

	setEvent(event: FolderEventModel) {
		event.path = event.path.replace(`${UploadPath}`, '');
		return this.eventChange.next(event);
	}

	constructor(private http: HttpClient) {
		this.eventChange.subscribe((value) => {
			this.event = value;
		});
	}

	gets(path: string = '') {
		path = path.replace(`${UploadPath}`, '');
		return this.http.get(`${Folder.gets}?folder=` + path);
	}

	create(name: string) {
		return this.http.post<Object>(`${Folder.add}`, {
			path: name,
		});
	}

	update(path: string, newPath: string) {
		path = path.replace(`${UploadPath}`, '');
		newPath = newPath.replace(`${UploadPath}`, '');
		return this.http.post<Object>(`${Folder.edit}`, {
			path: path,
			newPath: newPath,
		});
	}

	delete(path: string) {
		path = path.replace(`${UploadPath}`, '');
		return this.http.post<Object>(`${Folder.delete}?folder=` + path, {});
	}

	randomId(
		folders: FolderModel[],
		parentId: string,
		level: number,
		currentFolder: FolderModel
	): FolderModel[] {
		folders.forEach((element, i) => {
			element.level = level;
			element.id = parentId + i;
			if (element.items != null) {
				element.items = this.randomId(
					element.items,
					element.id + '-',
					level + 1,
					currentFolder
				);
				// Expanded current folder if it contains active folder
				if (currentFolder) {
					var activeFolder = element.items.filter(
						(o) => o.path == currentFolder.path
					);
					if (activeFolder.length > 0) {
						element.isExpanded = true;
					}
				}
			}
		});
		return folders;
	}

	getActiveFolder(folders: FolderModel[], currentFolder: FolderModel) {
		folders.forEach((element) => {
			if (element.path == currentFolder.path) {
				currentFolder = element;
			}

			if (element.items != null) {
				currentFolder = this.getActiveFolder(
					element.items,
					currentFolder
				);
			}
		});

		return currentFolder;
	}
}

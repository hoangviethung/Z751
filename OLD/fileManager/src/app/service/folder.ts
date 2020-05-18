import {
	HttpClient,
} from "@angular/common/http";
import { FolderModel } from '../model/foldermodel';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export interface IFolderService {
    gets(path: string);
    create(name: string);
}

@Injectable()
export class FolderService implements IFolderService {
    // Parent folder is used for create sub-folder
    parentFolder: String = "";

    parentFolderChange: Subject<String> = new Subject<String>();

    setParentFolder(parent: String) {
        parent = parent.replace("http://localhost:56958/upload/", "");
        return this.parentFolderChange.next(parent);
    }

    constructor(private http: HttpClient) {
        this.parentFolderChange.subscribe((value) => {
            this.parentFolder = value
        });
    }

    gets(path: string = "") {
        path = path.replace("http://localhost:56958/upload/", "");
        return this.http.get("http://localhost:56958/api/Folder/gets?folder=" + path)
    }

    create(name: string) {
        return this.http.post<Object>("http://localhost:56958/api/Folder/add", {
            path: name
        })
    }

    update(path: string, newPath: string) {
        path = path.replace("http://localhost:56958/upload/", "");
        newPath = newPath.replace("http://localhost:56958/upload/", "");
        return this.http.post<Object>("http://localhost:56958/api/Folder/edit", {
            path: name, newPath: newPath
        })
    }

    delete(path: string) {
        path = path.replace("http://localhost:56958/upload/", "");
        return this.http.post<Object>("http://localhost:56958/api/Folder/delete?folder=" + path, {
            
        })
    }

    randomId(folders: FolderModel[], parentId: string, level: number) : FolderModel[] {
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
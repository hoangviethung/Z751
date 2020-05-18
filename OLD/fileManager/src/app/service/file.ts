import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '../model/filemodel';

export interface IFileService {
    gets(path: string);
}

@Injectable()
export class FileService {
    constructor(private http: HttpClient) {

    }

    gets(path: string = "") {
        path = path.replace("http://localhost:56958/upload/", "");
        
        return this.http.get("http://localhost:56958/api/File/gets?folder=" + path);
    }

    randomId(files: FileModel[], parentId: string) : FileModel[] {
        files.forEach((element, i) => {
            element.id = parentId + i
        })

        return files;
    }
}
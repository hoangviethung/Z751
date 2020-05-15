import { Component, OnInit, ElementRef, SimpleChanges } from '@angular/core';
import { FolderService } from './service/folder.service';
import { FileService } from './service/file.service';
import { FileModel } from './model/file.model';
import { UploadService } from './service/upload.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'FileManager';
	folders;
	currentFolder;
	isShowDialog: boolean = false;
	isLoadingBoard: boolean = false;
	isUploadActive: boolean = false;
	fileUpload: FileModel

	constructor(
		private folderSvc: FolderService,
		private fileSvc: FileService,
		private uploadSvc: UploadService
	) {
	}

	ngOnInit() {
		this.getFolders();
	}

	getFolders() {
		this.isLoadingBoard = false;
		this.folderSvc.gets().subscribe((element: any) => {
			var i = 0;
			// Make random Id
			this.folders = this.folderSvc.randomId(element.data.items, "f", 1);
			this.currentFolder = this.folders[0];
			this.isLoadingBoard = true
			// this.getFiles(this.currentFolder.name)
		})
	}

	getFiles(idFolder) {
		this.fileSvc.getFiles(idFolder)
	}

	changeCurrentFolder($event) {
		this.currentFolder = $event
	}

	showDialogToggle($event) {
		this.isShowDialog = $event;
	}

	ngOnChanges(changes: SimpleChanges) {
		//console.log(changes.prop)
	}

	async addFile() {
		const nameFolder = this.currentFolder.name;
		const params = await this.uploadSvc.upload(nameFolder)
		this.fileSvc.addFile(params)
	}
}

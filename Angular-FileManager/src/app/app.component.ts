import { Component, OnInit, ElementRef, SimpleChanges } from '@angular/core';
import { FolderService } from './service/folder.service';
import { FileService } from './service/file.service';
import { FileModel } from './model/file.model';

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
		private elRef: ElementRef
	) {
	}

	ngOnInit() {
		this.getFolders();
		this.getFiles(this.currentFolder.name)
	}

	getFolders() {
		this.isLoadingBoard = false;
		this.folderSvc.gets().subscribe((element: any) => {
			var i = 0;
			// Make random Id
			this.folders = this.folderSvc.randomId(element.data.items, "f", 1);
			this.currentFolder = this.folders[0];
			this.isLoadingBoard = true
		})
	}

	getFiles(idFolder) {
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

	addFile() {
		const $inputUploadFile = (<HTMLInputElement>document.getElementsByName("fileupload")[0]);
		const value = $inputUploadFile.value
		const name = $inputUploadFile.name
		const type = $inputUploadFile.type
		const params = this.fileUpload = {
			path: value,
			name: name,
			type: type,
			imageFolder: this.currentFolder.name,
		}
		this.fileSvc.addFile(params)
		console.log(params);
	}
}

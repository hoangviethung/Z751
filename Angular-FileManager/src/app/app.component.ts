import { Component, OnInit, ElementRef, SimpleChanges } from '@angular/core';
import { FolderService } from './service/folder';

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

	constructor(private folderS: FolderService,
		private elRef: ElementRef) {
	}

	ngOnInit() {
		this.getFolders()
	}

	getFolders() {
		this.isLoadingBoard = false;
		this.folderS.gets().subscribe((element: any) => {
			var i = 0;
			// Make random Id
			this.folders = this.folderS.randomId(element.data.items, "f", 1);
			this.currentFolder = this.folders[0];
			this.isLoadingBoard = true
		})
	}

	changeCurrentFolder($event) {
		this.currentFolder = $event
	}

	showDialogToggle($event) {
		this.isShowDialog = $event;
	}

	ngOnChanges(changes: SimpleChanges) {
		// // changes.prop contains the old and the new value...
		//console.log(changes.prop)
	}
}

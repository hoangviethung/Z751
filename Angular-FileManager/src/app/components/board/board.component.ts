import { Component, OnInit, Input, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { FileService } from '../../service/file.service';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { FolderService } from 'src/app/service/folder.service';
import { FileModel } from 'src/app/model/file.model';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {
	@Input() isShowDialog;
	@Input() currentFolder;
	@Output() showDialogToggle = new EventEmitter<Boolean>();
	@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
	isSingleClick: Boolean = true;
	isMultiSelect: Boolean = false;
	activeFiles = [];
	fileHover: FileModel;
	files = [];
	constructor(
		private fileSvc: FileService,
		private folderSvc: FolderService
	) { }

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		this.getFiles()
	}

	getFiles() {
		this.fileSvc.getFiles(this.currentFolder.path).subscribe((element: any) => {
			// Make random Id
			this.files = this.fileSvc.randomId(element.data, "c")
		})
	}

	mouseEnter(item) {
		setTimeout(() => {
			this.fileHover = item
		}, 1000);
	}

	mouseLeave(item) {
		this.fileHover = null
	}

	createSubFolder($event) {
		// Change data parent of dialog
		this.folderSvc.setEvent({
			path: $event.item.path,
			isCreate: true,
			isRename: false,
			isMove: false
		})
		// Show dialog
		this.isShowDialog = true
		this.showDialogToggle.emit(this.isShowDialog)
	}
}

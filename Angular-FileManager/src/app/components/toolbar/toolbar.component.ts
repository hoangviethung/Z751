import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FolderService } from '../../service/folder.service';
import { FolderEventModel } from 'src/app/model/folder-event.model';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
	@Input() isShowDialog;
	@Input() isUploadActive;
	@Output() showDialogToggle = new EventEmitter<Boolean>();
	@Output() activeUploadToggle = new EventEmitter<Boolean>();
	@Output() isReloadfolderSvc = new EventEmitter<Boolean>();
	event: FolderEventModel

	constructor(
		private folderSvc: FolderService
	) {
		this.event = folderSvc.event;
	}

	ngOnInit() {
	}

	get isSidebarVisible(): FolderEventModel {
		this.event = this.folderSvc.event
		return this.folderSvc.event;
	}

	createFolder(value: boolean) {
		this.isShowDialog = value;
		this.showDialogToggle.emit(this.isShowDialog)

		this.folderSvc.setEvent({
			path: "",
			isCreate: true,
			isRename: false,
			isMove: false
		})
	}

	confirmDialog() {
		var $input = (<HTMLInputElement>document.getElementsByName("newFolderName")[0]);
		var name = $input.value;
		if (name != null && name.trim() == "") {
			(<HTMLInputElement>$input.parentNode).classList.add("ui-focus")
			return
		}

		// Make sure name is not empty
		if (name != "") {
			console.log(this.event);
			if (this.event.isCreate) {
				this.folderSvc.create(this.event.path + "/" + name).subscribe((response: any) => {
					if (response.code == 200) {
						this.isShowDialog = false
						this.showDialogToggle.emit(this.isShowDialog)
						this.isReloadfolderSvc.emit(true)
					}
				});
			}
			else if (this.event.isRename) {
				var nPath = this.event.path;
				if (nPath != "") nPath = parent + "/" + name

				this.folderSvc.update(this.event.path, nPath).subscribe((response: any) => {
					if (response.code == 200) {
						this.isShowDialog = false
						this.showDialogToggle.emit(this.isShowDialog)
						this.isReloadfolderSvc.emit(true)
					}
				});
			}
		}
	}
}

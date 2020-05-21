import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FolderService } from '../../service/folder.service';
import { FolderEventModel } from 'src/app/model/folder-event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
	@Input() isShowDialog;
	@Input() isUploadActive;
	@Output() showDialogToggle = new EventEmitter<Boolean>();
	@Output() activeUploadToggle = new EventEmitter<Boolean>();
	@Output() isReloadfolderSvc = new EventEmitter<Boolean>();
	event: FolderEventModel;
	constructor(
		private folderSvc: FolderService,
		private toastrSvc: ToastrService
	) {
		this.event = folderSvc.event;
	}

	ngOnInit() {}

	get isSidebarVisible(): FolderEventModel {
		this.event = this.folderSvc.event;
		return this.folderSvc.event;
	}

	createFolder(value: boolean) {
		this.isShowDialog = value;
		this.showDialogToggle.emit(this.isShowDialog);

		this.folderSvc.setEvent({
			path: '',
			isCreate: true,
			isRename: false,
			isMove: false,
		});
	}

	confirmDialog() {
		var $input = <HTMLInputElement>(
			document.getElementsByName('newFolderName')[0]
		);
		var name = $input.value;
		if (name != null && name.trim() == '') {
			(<HTMLInputElement>$input.parentNode).classList.add('ui-focus');
			return;
		}

		// Make sure name is not empty
		if (name != '') {
			if (this.event.isCreate) {
				this.folderSvc
					.create(this.event.path + '/' + name)
					.subscribe((response: any) => {
						if (response.code == 200) {
							this.isShowDialog = false;
							this.showDialogToggle.emit(this.isShowDialog);
							this.isReloadfolderSvc.emit(true);
							this.toastrSvc.success(
								`Tạo mới Folder thành công !!!`
							);
						} else {
							this.toastrSvc.error(`Đã có lỗi xảy ra !!!`);
						}
					});
			} else if (this.event.isRename) {
				let nPath = this.event.path;
				let path = this.event.path;
				if (nPath != '') nPath = parent.name + '/' + name;
				this.folderSvc
					.update(path, nPath)
					.subscribe((response: any) => {
						if (response.code == 200) {
							this.toastrSvc.success(
								`Chỉnh sửa tên thành công !!!`
							);
							this.isShowDialog = false;
							this.isReloadfolderSvc.emit(true);
							this.showDialogToggle.emit(this.isShowDialog);
						} else {
							this.toastrSvc.error(`Đã có lỗi xảy ra !!!`);
						}
					});
			}
		}
	}
}

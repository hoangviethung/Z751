import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	SimpleChanges,
	ViewChild,
} from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { FolderService } from 'src/app/service/folder.service';
import { FolderModel } from 'src/app/model/folder.model';

@Component({
	selector: 'app-folders',
	templateUrl: './folders.component.html',
	styleUrls: ['./folders.component.css'],
})
export class FoldersComponent implements OnInit {
	@Input() folders;
	@Input() currentFolder;
	@Input() isShowDialog;
	@Output() valueUpdate = new EventEmitter<FolderModel>();
	@Output() showDialogToggle = new EventEmitter<Boolean>();
	@Output() isReloadFolders = new EventEmitter<Boolean>();
	@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
	files = [];
	constructor(private folderSvc: FolderService) {}

	ngOnInit() {}

	onLeftClick($event, item) {
		$event.target.classList.add('ui-btn-active');
		this.valueUpdate.emit(item);
	}

	changeCurrentFolder($event) {
		this.valueUpdate.emit($event);
	}

	onArrowClick($event, item: FolderModel) {
		item.isExpanded = item.isExpanded ? false : true;
	}

	createSubFolder($event) {
		// Change data parent of dialog
		this.folderSvc.setEvent({
			path: $event.item.path,
			isCreate: true,
			isRename: false,
			isMove: false,
		});
		// Show dialog
		this.isShowDialog = true;
		this.showDialogToggle.emit(this.isShowDialog);
	}

	renameFolder($event) {
		// Change data parent of dialog
		this.folderSvc.setEvent({
			path: $event.item.path,
			isCreate: false,
			isRename: true,
			isMove: false,
		});
		// Show dialog
		this.isShowDialog = true;
		this.showDialogToggle.emit(this.isShowDialog);
	}

	deleteFolder($event) {
		this.folderSvc.delete($event.item.path).subscribe((response: any) => {
			if (response.code == 200) {
				// Reload folders
				this.isReloadFolders.emit(true);
			}
		});
	}
}

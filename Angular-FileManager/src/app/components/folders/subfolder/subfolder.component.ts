import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FolderModel } from 'src/app/model/folder.model';

@Component({
	selector: 'app-sub-folder',
	templateUrl: './subfolder.component.html',
})
export class SubFolderComponent implements OnInit {
	@Input() parent;
	@Input() currentFolder;
	@Input() basicMenu;
	@Output() valueUpdate = new EventEmitter<FolderModel>();

	ngOnInit() {
	}

	changeCurrentFolder($event) {
		this.valueUpdate.emit($event)
	}

	onLeftClick($event, item) {
		$event.target.classList.add("ui-btn-active")
		this.valueUpdate.emit(item)
		console.log(item);
	}

	onArrowClick($event, item: FolderModel) {
		item.isExpanded = item.isExpanded ? false : true;
	}

	activeClass(path: string) {
		return path == this.currentFolder.path ? 'ckf-folders-tree-label ui-btn ui-btn-active' : 'ckf-folders-tree-label ui-btn'
	}
}

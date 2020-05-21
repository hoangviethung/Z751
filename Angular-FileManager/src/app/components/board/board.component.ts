import {
	Component,
	OnInit,
	Input,
	SimpleChanges,
	ViewChild,
	Output,
	EventEmitter,
} from '@angular/core';
import { FileService } from '../../service/file.service';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { FolderService } from 'src/app/service/folder.service';
import { FileModel } from 'src/app/model/file.model';
import { ToastrService } from 'ngx-toastr';

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
		private folderSvc: FolderService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		this.getFiles();
	}

	getFiles() {
		this.fileSvc
			.getFiles(this.currentFolder.path)
			.subscribe((element: any) => {
				// Make random Id
				this.files = this.fileSvc.randomId(element.data, 'c');
			});
	}

	mouseEnter(item) {
		setTimeout(() => {
			this.fileHover = item;
		}, 1000);
	}

	mouseLeave(item) {
		this.fileHover = null;
	}

	download(path, nameFile) {
		const element = document.createElement('a');
		element.setAttribute('download', nameFile);
		element.setAttribute('href', path);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}

	downloadFile($event) {
		let path = $event.item.path;
		let nameFile = $event.item.name;
		this.download(path, nameFile);
	}

	renameFile($event) {}

	copyNameFile($event) {
		console.log($event.item.path);
	}

	deleteFile($event) {
		console.log($event);
		const path = $event.item.path;
		const url = new URL(path);
		this.fileSvc.deleteFile(url.pathname.substr(1)).subscribe(() => {
			this.getFiles();
			this.toastrSvc.success('Xóa file thành công !!!');
		});
	}
}

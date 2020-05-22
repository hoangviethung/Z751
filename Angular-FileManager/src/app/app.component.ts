import {
	Component,
	OnInit,
	ElementRef,
	SimpleChanges,
	ViewChild,
	AfterViewInit,
} from '@angular/core';
import { FolderService } from './service/folder.service';
import { FileService } from './service/file.service';
import { FileModel } from './model/file.model';
import { UploadService } from './service/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'FileManager';
	folders;
	currentFolder;
	isShowDialog: boolean = false;
	isLoadingBoard: boolean = false;
	isUploadActive: boolean = false;
	fileUpload: FileModel;
	@ViewChild('asdasdasdasd', { read: ElementRef }) addFileRef: ElementRef;

	constructor(
		private folderSvc: FolderService,
		private fileSvc: FileService,
		private uploadSvc: UploadService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit() {
		this.getFolders();
	}

	ngAfterViewInit() {}

	getFolders(currentFolder?) {
		this.folderSvc.gets().subscribe((element: any) => {
			// Make random Id
			this.folders = this.folderSvc.randomId(
				element.data.items,
				'f',
				1,
				this.currentFolder
			);
			console.log(this.folders.filter(o => o.path == currentFolder.path)[0])
			this.currentFolder = this.folders[0]
			// this.currentFolder = currentFolder ? this.folders.filter(o => o.path == currentFolder.path)[0] : this.folders[0];
			this.isLoadingBoard = true;
		});
	}

	changeCurrentFolder($event) {
		this.currentFolder = $event;
	}

	showDialogToggle($event) {
		this.isShowDialog = $event;
	}

	ngOnChanges(changes: SimpleChanges) {
		//console.log(changes.prop)
	}

	triggerClick() {
		console.log(this.isUploadActive);
	}

	async addFile(e) {
		const filesAmount = e.target.files.length;
		for (let i = 0; i < filesAmount; i++) {
			const params = await this.uploadSvc.upload(e.target.files[i], this.currentFolder);
			this.fileSvc.addFile(params).subscribe((response: any) => {
				if (response.code == 200) {
					this.toastrSvc.success(`Upload File thành công !!!`);
				} else {
					this.toastrSvc.error(`Đã có lỗi xảy ra !!!`);
				}
			});
		}

		this.getFolders(this.currentFolder);
	}

	openModelUpload() {
		this.isUploadActive = true;
	}
}

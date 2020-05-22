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

			this.isLoadingBoard = true;
			// Active current folder to load board
			this.currentFolder =
					this.currentFolder ? this.folderSvc.getActiveFolder(
							this.folders, this.currentFolder) : this.folders[0]
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
		if (filesAmount.count != 0) {
			var count = 0;
			for (let i = 0; i < filesAmount; i++) {
				const params = await this.uploadSvc.upload(e.target.files[i], this.currentFolder);
				this.fileSvc.addFile(params).subscribe((response: any) => {
					if (response.code == 200) {
						this.toastrSvc.success(`Upload File thành công !!!`);
					} else {
						this.toastrSvc.error(`Đã có lỗi xảy ra !!!`);
					}
					count++
				});
			}

			// wait for finish uploading!
			var interval = setInterval(async () => {
				if (count == filesAmount) {
					console.log("Upload Done")
					clearInterval(interval)
					this.getFolders(this.currentFolder);
				}
			}, 1000)
		}
	}

	openModelUpload() {
		this.isUploadActive = true;
	}
}

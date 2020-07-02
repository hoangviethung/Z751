import {
	Component,
	OnInit,
	ElementRef,
	SimpleChanges,
	ViewChild,
	AfterViewInit,
    ChangeDetectorRef,
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
	progress: number = 0;
	totalFiles: number = 0;
	@ViewChild('triggerBtnClick', { static: false }) triggerBtnClick: ElementRef;

	constructor(
		private folderSvc: FolderService,
		private fileSvc: FileService,
		private uploadSvc: UploadService,
		private toastrSvc: ToastrService,
		private changeDetectorRef: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.getFolders();
	}

	ngAfterViewInit() {
	}

	getFolders(currentFolder?) {
		this.folderSvc.gets().subscribe((element: any) => {
			console.log(element);
			// Make random Id
			this.folders = this.folderSvc.randomId(
				element.data.items,
				'f',
				1,
				this.currentFolder
			);

			this.isLoadingBoard = true;
			// Active current folder to load board
			this.currentFolder = this.currentFolder
				? this.folderSvc.getActiveFolder(
						this.folders,
						this.currentFolder
				  )
				: this.folders[0];
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

	async addFile(e) {
		const filesAmount = e.target.files.length;
		this.totalFiles = filesAmount;
		if (filesAmount.count != 0) {
			for (let i = 0; i < filesAmount; i++) {
				const params = await this.uploadSvc.upload(
					e.target.files[i],
					this.currentFolder
				);
				this.fileSvc.addFile(params).subscribe((response: any) => {
					if (response.code == 200) {
						this.toastrSvc.success(`Upload File thành công !!!`);
					} else {
						this.toastrSvc.error(`Đã có lỗi xảy ra !!!`);
					}
					// Calculate progress bar
					this.progress++;
				});
			}

			// wait for finish uploading!
			var interval = setInterval(async () => {
				if (this.progress == filesAmount) {
					this.progress = 0;
					clearInterval(interval);
					this.getFolders(this.currentFolder);
				}
			}, 1000);
		}
	}

	openModelUpload() {
		this.isUploadActive = true;
		this.changeDetectorRef.detectChanges();
		this.triggerBtnClick.nativeElement.click();
	}
}

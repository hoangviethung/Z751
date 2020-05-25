import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SectionModel } from 'src/app/_core/models/section.model';
import { ImageModel } from 'src/app/_core/models/image.model';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	@Input('section') section: SectionModel = new SectionModel();
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	images: Array<ImageModel>;
	isShowUpload: boolean = false;
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.images = this.section.images;
	}

	updateSection() {
		this.section.images = this.images;
		const params = new InputRequestOption();
		params.body = this.section;
		this.httpSvc
			.post(APIConfig.Section.Update, params)
			.subscribe((response) => {
				if (response.code === 200) {
					this.close.emit(false);
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	addSectionImage(event?) {
		const image = new ImageModel();
		image.propertyName = '';
		image.path = '';
		image.order = 0;
		image.name = '';
		image.content = '';
		image.alt = '';
		this.images.push(image);
	}

	deleteSectionImage(index) {
		this.images.splice(index, 1);
	}

	closePopup(status) {
		this.close.emit(status);
	}

	onContentChangeEmitter(content) {
		this.section.content = content.editor.getData();
	}

	updateImages(images) {
		this.images = images;
	}

	isShowPopupUploadfile(isShow: boolean) {
		if (isShow == true) {
			this.isShowUpload = true;
			document.querySelector('.block-content').classList.add('disabled');
		} else {
			this.isShowUpload = false;
			document
				.querySelector('.block-content')
				.classList.remove('disabled');
		}
	}
}

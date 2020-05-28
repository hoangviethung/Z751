import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageModel } from '../../models/image.model';

@Component({
	selector: 'app-table-images',
	templateUrl: './table-images.component.html',
	styleUrls: ['./table-images.component.scss'],
})
export class TableImagesComponent implements OnInit {
	@Input('images') images: Array<ImageModel> = [];
	@Output('imagesChange') imagesChange: EventEmitter<
		Array<ImageModel>
	> = new EventEmitter<Array<ImageModel>>();
	isShowUpload: boolean = false;
	constructor() {}

	ngOnInit(): void {}

	addSectionImage(event) {
		const image = new ImageModel();
		this.images.push(image);
		this.imagesChange.emit(this.images);
	}

	deleteSectionImage(index) {
		this.images.splice(index, 1);
		this.imagesChange.emit(this.images);
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

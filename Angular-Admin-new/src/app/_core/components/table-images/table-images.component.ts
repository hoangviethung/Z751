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
}

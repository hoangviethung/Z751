import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageModel } from '../../models/image.model';

@Component({
	selector: 'app-table-images',
	templateUrl: './table-images.component.html',
	styleUrls: ['./table-images.component.scss'],
})
export class TableImagesComponent implements OnInit {
	@Input('images') images: Array<ImageModel> = [];
	@Output('change') change: EventEmitter<
		Array<ImageModel>
	> = new EventEmitter<Array<ImageModel>>();
	constructor() {}

	ngOnInit(): void {}

	addSectionImage(event?) {
		const image = new ImageModel();
		image.propertyName = '';
		image.path = '';
		image.order = 0;
		image.name = '';
		image.content = '';
		image.alt = '';
		this.images.push(image);
		this.change.emit(this.images);
	}

	deleteSectionImage(index) {
		this.images.splice(index, 1);
		this.change.emit(this.images);
	}
}

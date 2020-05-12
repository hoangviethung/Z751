import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SectionModel } from 'src/app/_core/models/section.model';
import { ImageModel } from 'src/app/_core/models/image.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	@Input('section') section: SectionModel = new SectionModel();
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	images: Array<ImageModel>
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.images = this.section.images
	}

	updateSection() {
		this.section.images = this.images
		const params = new InputRequestOption();
		params.body = this.section
		this.httpSvc.post(APIConfig.Section.Update, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	addSectionImage() {
		const image = new ImageModel()
		image.propertyName = '';
		image.path = '';
		image.order = 0;
		image.name = '';
		image.content = '';
		image.alt = '';
		this.images.push(image)
	}

	deleteSectionImage(index) {
		this.images.splice(index, 1)
		console.log(this.images)
	}

	closePopup(status) {
		this.close.emit(status)
	}
}

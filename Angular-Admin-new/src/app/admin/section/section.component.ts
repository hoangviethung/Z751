import { Component, OnInit } from '@angular/core';
import { SectionModel } from 'src/app/_core/models/section.model';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { Section } from 'src/app/_core/section';
import { ImageModel } from 'src/app/_core/models/image.model';
import { LanguageModel } from 'src/app/_core/models/language';
@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
	sections: Array<SectionModel>;
	section: SectionModel;
	isShowPopup: boolean = false;
	isEdit: boolean;
	images: Array<ImageModel>;
	languages: Array<LanguageModel>;
	languageCurrent: any;

	constructor(private httpSvc: HttpService) {}

	ngOnInit(): void {
		this.languages = JSON.parse(localStorage.getItem('languages'));
		this.languageCurrent = 1;
		this.getSections('1');
	}

	getSections(languageId: string) {
		const params = new InputRequestOption();
		params.params = {
			languageId: languageId,
		};
		this.httpSvc
			.get(APIConfig.Section.Gets, params)
			.subscribe((response) => {
				this.sections = response.data;
				this.sections.forEach((item) => {
					item.orderTitle = Section[item.id].title;
				});
			});
	}

	changeLanguage(e) {
		this.languageCurrent = e;
		this.getSections(e);
	}

	onOpenPopup(status, itemEdit?) {
		this.isShowPopup = status;
		this.section = itemEdit;
	}

	addSectionImage(event) {
		const image = new ImageModel();
		image.propertyName = '';
		image.path = '';
		image.order = 0;
		image.name = '';
		image.content = '';
		image.alt = '';
		this.images.push(image);
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getSections(this.languageCurrent);
	}
}

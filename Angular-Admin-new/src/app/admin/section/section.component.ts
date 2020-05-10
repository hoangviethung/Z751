import { Component, OnInit } from '@angular/core';
import { SectionModel } from 'src/app/_core/models/section.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { Section } from 'src/app/_core/section';
@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
	sections: Array<SectionModel>
	section: SectionModel;
	isShowPopup: boolean = false;
	isEdit: boolean;
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getSections()
	}

	getSections() {
		const params = new InputRequestOption()
		params.params = {
			languageId: '1'
		}
		this.httpSvc.get(APIConfig.Section.Gets, params)
			.subscribe((response) => {
				this.sections = response.data
				this.sections.forEach((item) => {
					item.orderTitle = Section[item.order].title
				})
			})
	}

	onOpenPopup(status, itemEdit?) {
		this.isShowPopup = status;
		this.section = itemEdit;
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getSections()
	}
}

import { Component, OnInit, Inject } from "@angular/core";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { API } from "src/core/configs/api";
import { SectionModel } from "src/core/models/Section.model";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
	breadcrumbs = [];
	missionVisionImages = [];
	missionVision: ArticleModel;
	currentLanguage: string;
	aboutLetter: SectionModel;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.setPageInformation();
	}

	ngOnInit() {
		this.getAboutLetter();
		this.getMissionVisionItems();
	}

	setPageInformation() {
		const pathname = this.document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: pathname,
		};

		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
		});

		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
		});
	}

	getAboutLetter() {
		const opts = new InputRequestOption();
		opts.params = {
			template: "0",
		};
		this.httpSvc.get(API.Section.Get, opts).subscribe((response) => {
			this.aboutLetter = response.data;
			this.aboutLetter.title = response.data.title;
		});
	}

	getMissionVisionItems() {
		const opts = new InputRequestOption();
		opts.params = {
			template: "1",
		};
		this.httpSvc.get(API.Section.Get, opts).subscribe((result) => {
			this.missionVision = result.data;
			this.missionVisionImages = result.data.images;
		});
	}
}

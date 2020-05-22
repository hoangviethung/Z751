import { Component, OnInit, Inject } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { API } from "src/core/configs/api";
import { SectionModel } from "src/core/models/Section.model";
import { DOCUMENT } from "@angular/common";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import { map } from "rxjs/operators";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
	breadcrumbs = [];
	missionVisionImages = [];
	missionVision: ArticleModel;
	aboutLetter: SectionModel;

	constructor(
		private httpSvc: HttpService,
		private pageSvc: PageInfoService,
		@Inject(DOCUMENT) document: Document
	) {}

	ngOnInit() {
		const pathname = document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: pathname,
		};
		this.getAboutLetter();
		this.getMissionVisionItems();
		this.getPageInformation(opts);
		// this.getBreadcrumb(opts);
	}

	getPageInformation(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			const metaOptions: MetaModel = {
				title: response.data.metaTitle || "",
				description: response.data.metaDescription || "",
				image: response.data.metaImage || "",
				keywords: response.data.metaKeywords || "",
			};
			this.pageSvc.setTitle(response.data.title);
			this.pageSvc.addMeta(metaOptions);
		});
	}

	getBreadcrumb(opts) {
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

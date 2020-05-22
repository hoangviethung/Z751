import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { ArticleModel } from "src/core/models/Article.model";
import { BreadcrumbService } from "../_shared/breadcrumb/breadcrumb.service";
import { API } from "src/core/configs/api";
import { SectionModel } from "src/core/models/Section.model";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
	Breadcrumb = {
		en: ["Home", "About Z751"],
		vi: ["Trang chủ", "Về công ty Z751"],
	};
	missionVisionImages = [];
	missionVision: ArticleModel;
	currentLanguage: string;
	aboutLetter: SectionModel;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private breadcrumbSvc: BreadcrumbService
	) {}

	ngOnInit() {
		this.pageInfoSvc.setTitle("About us");
		this.breadcrumbSvc.setBreadcrumb(this.Breadcrumb);
		this.getAboutLetter();
		this.getMissionVisionItems();
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
			// console.log(this.missionVision);
		});
	}
}

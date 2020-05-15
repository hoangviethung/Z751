import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";
import { HttpService } from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { ArticleModel } from "src/core/models/Article.model";
import { BreadcrumbService } from "../_shared/breadcrumb/breadcrumb.service";

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
	missionVisionItems: Array<ArticleModel>;
	currentLanguage: string;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private languageSvc: LanguageService,
		private breadcrumbSvc: BreadcrumbService
	) {}

	ngOnInit() {
		this.pageInfoSvc.setTitle("About us");

		this.breadcrumbSvc.setBreadcrumb(this.Breadcrumb);
		this.getMissionVisionItems();
	}

	getMissionVisionItems() {
		this.httpSvc
			.get(`assets/api/${this.currentLanguage}/about/mission.json`)
			.subscribe((result) => {
				this.missionVisionItems = result.data;
			});
	}
}

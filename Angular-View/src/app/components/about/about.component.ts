import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PageInfoService } from "src/app/services/page-info.service";
import { HttpService } from "src/app/services/http.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/services/language.service";
import { Article } from "src/app/models/core/Article.model";
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
	missionVisionItems: Array<Article>;
	currentLanguage: string;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private languageSvc: LanguageService,
		private breadcrumbSvc: BreadcrumbService
	) {}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant("menu.about"));
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
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

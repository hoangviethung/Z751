import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/app/services/page-info.service";
import { HttpService } from "src/app/services/http.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/services/language.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-news",
	templateUrl: "./news.component.html",
	styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
	newsList = [];
	currentLanguage: string;
	pageTitle: string;
	Breadcrumb = {
		en: ["Home", "News"],
		vi: ["Trang chủ", "Tin tức"],
	};
	breadcrumbs;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private languageSvc: LanguageService,
		private activatedRoute: ActivatedRoute
	) {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
		this.pageInfoSvc.setTitle(this.translateSvc.instant("menu.news"));
	}

	ngOnInit() {
		this.getNewsList();
	}
	getNewsList() {
		this.activatedRoute.params.subscribe((params) => {
			let Breadcrumb = {
				en: ["Home", "News"],
				vi: ["Trang chủ", "Tin tức"],
			};
			this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/news/${params.newsCategory}.json`
				)
				.subscribe((result) => {
					this.newsList = result.Data.News;
					this.pageTitle = result.Data.Title;
					this.pageInfoSvc.setTitle(result.Data.Title);
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}

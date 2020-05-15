import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";
import { HttpService } from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
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
		private languageSvc: LanguageService,
		private activatedRoute: ActivatedRoute
	) {
		
		this.pageInfoSvc.setTitle('Tin tức');
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
					this.newsList = result.data.News;
					this.pageTitle = result.data.Title;
					this.pageInfoSvc.setTitle(result.data.Title);
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}

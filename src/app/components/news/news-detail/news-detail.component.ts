import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { LanguageService } from "src/app/services/language.service";
import { Article } from "src/app/models/core/Article.model";
import { PageInfoService } from "src/app/services/page-info.service";

@Component({
	selector: "app-news-detail",
	templateUrl: "./news-detail.component.html",
	styleUrls: ["./news-detail.component.scss"],
})
export class NewsDetailComponent implements OnInit {
	currentLanguage: string;
	article: Article;
	newsCategoryUrl: string;
	Breadcrumb = {
		en: ["Home", "News"],
		vi: ["Trang chủ", "Tin tức"],
	};
	breadcrumbs;

	constructor(
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private languageSvc: LanguageService,
		private pageInfoSvc: PageInfoService
	) {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(async (param) => {
			this.newsCategoryUrl = param.newsCategory;
			let Breadcrumb = {
				en: ["Home", "News"],
				vi: ["Trang chủ", "Tin tức"],
			};
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/news/${this.newsCategoryUrl}.json`
				)
				.subscribe((result) => {
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/news/${param.newsTitle}.json`
				)
				.subscribe((result) => {
					this.article = result.Data;
					this.pageInfoSvc.setTitle(result.Data.Title);
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}

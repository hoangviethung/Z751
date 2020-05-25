import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { PageInfoService } from "src/core/services/page-info.service";

@Component({
	selector: "app-news-detail",
	templateUrl: "./news-detail.component.html",
	styleUrls: ["./news-detail.component.scss"],
})
export class NewsDetailComponent implements OnInit {
	currentLanguage: string;
	article: ArticleModel;
	newsCategoryUrl: string;
	Breadcrumb = {
		en: ["Home", "News"],
		vi: ["Trang chủ", "Tin tức"],
	};
	breadcrumbs;

	constructor(
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService
	) {}

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
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/news/${param.newsTitle}.json`
				)
				.subscribe((result) => {
					this.article = result.data;
					this.pageInfoSvc.setTitle(result.data.Title);
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}

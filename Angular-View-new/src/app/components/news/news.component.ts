import { Component, OnInit, Inject } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { ActivatedRoute } from "@angular/router";
import { API } from "src/core/configs/api";
import { Article } from "Angular-View/src/app/models/core/Article.model";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-news",
	templateUrl: "./news.component.html",
	styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
	newsList: Array<Article> = [];
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
		private activatedRoute: ActivatedRoute,
		@Inject(DOCUMENT) document: Document
	) {
		this.pageInfoSvc.setTitle("Tin tức");
	}

	ngOnInit() {
		this.getNewsList();
	}

	getNewsList() {
		let Breadcrumb = {
			en: ["Home", "News"],
			vi: ["Trang chủ", "Tin tức"],
		};

		const opts = new InputRequestOption();
		opts.params = {
			url: document.location.pathname,
		};
		this.httpSvc.get(API.Common.GetRoute, opts).subscribe((response) => {
			this.pageTitle = response.data.name;
			this.pageInfoSvc.setTitle(this.pageTitle);
		});
		this.httpSvc.get(API.Article.Gets, opts).subscribe((response) => {
			this.newsList = response.data;
		});
	}
}

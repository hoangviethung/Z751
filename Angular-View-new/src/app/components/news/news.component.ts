import { Component, OnInit, Inject } from "@angular/core";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { ActivatedRoute } from "@angular/router";
import { API } from "src/core/configs/api";
import { DOCUMENT } from "@angular/common";
import { ArticleModel } from "src/core/models/Article.model";
import { PaginationModel } from "src/core/models/Pagination.model";

@Component({
	selector: "app-news",
	templateUrl: "./news.component.html",
	styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
	newsList: Array<ArticleModel> = [];
	pageTitle: string;
	breadcrumbs;
	pagination: PaginationModel = new PaginationModel(5, 1);
	totalItems: number;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.pageInfoSvc.setTitle("Tin tức");
	}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
			page: this.pagination.page.toString(),
			itemPerPage: this.pagination.itemPerPage.toString(),
		};
		this.getPageInfo(opts);
		this.getNewsList(opts);
		this.setPageInformation(opts);
	}

	setPageInformation(opts) {
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

	getPageInfo(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			this.pageTitle = response.data.title;
			this.pageInfoSvc.setTitle(this.pageTitle);
		});
	}

	getNewsList(opts) {
		this.httpSvc.get(API.Article.Gets, opts).subscribe((response) => {
			this.newsList = response.data.items;
		});
	}

	refreshList(pageNumber) {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
			page: pageNumber,
			itemPerPage: this.pagination.itemPerPage.toString(),
		};
		this.getNewsList(opts);
	}
}

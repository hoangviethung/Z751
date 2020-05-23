import { Component, OnInit, Inject } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import { API } from "src/core/configs/api";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-news-detail",
	templateUrl: "./news-detail.component.html",
	styleUrls: ["./news-detail.component.scss"],
})
export class NewsDetailComponent implements OnInit {
	currentLanguage: string;
	article: ArticleModel;
	newsCategoryUrl: string;
	breadcrumbs;

	constructor(
		private httpSvc: HttpService,
		@Inject(DOCUMENT) private document: Document,
		private pageInfoSvc: PageInfoService
	) {}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
		};
		this.getNewsDetail();
		this.setPageInformation(opts);
	}

	setPageInformation(opts) {
		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
		});
	}

	getNewsDetail() {
		const productUrl = this.document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: productUrl,
		};
		this.httpSvc.get(API.Article.Get, opts).subscribe((response) => {
			this.article = response.data;
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
		});
	}
}

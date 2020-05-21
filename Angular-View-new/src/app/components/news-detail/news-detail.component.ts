import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { PageInfoService } from "src/core/services/page-info.service";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-news-detail",
	templateUrl: "./news-detail.component.html",
	styleUrls: ["./news-detail.component.scss"],
})
export class NewsDetailComponent implements OnInit {
	currentLanguage: string;
	article: ArticleModel;
	newsCategoryUrl: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getNewsDetail();
	}

	getNewsDetail() {
		const productUrl = document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: productUrl,
		};
		this.httpSvc.get(API.Article.Get, opts).subscribe((response) => {
			this.article = response.data;
		});
	}
}

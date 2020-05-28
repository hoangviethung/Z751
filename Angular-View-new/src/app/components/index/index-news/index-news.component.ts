import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";

@Component({
	selector: "app-index-news",
	templateUrl: "./index-news.component.html",
	styleUrls: ["./index-news.component.scss"],
})
export class IndexNewsComponent implements OnInit {
	newsItems: Array<ArticleModel>;
	defaultImage =
		"https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-solid-color-background.jpg";
	@Input("language") currentLanguage: string;
	@Input("background") background: string;
	@Input("pageTitle") pageTitle: string;
	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getNews();
	}
	getNews() {
		this.httpSvc.get("/api/Article/used/hot-gets").subscribe((result) => {
			this.newsItems = result.data;
		});
	}
}

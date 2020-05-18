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
	@Input("language") currentLanguage: string;
	@Input("background") background: string;
	constructor(private httpSvc: HttpService) { }

	ngOnInit() {
		this.getNews();
	}
	getNews() {
		this.httpSvc.get("/api/Article/used/hot-gets")
			.subscribe((result) => {
				this.newsItems = result.data;
			});
	}
}

import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { Article } from "src/app/models/core/Article.model";

@Component({
	selector: "app-index-news",
	templateUrl: "./index-news.component.html",
	styleUrls: ["./index-news.component.scss"],
})
export class IndexNewsComponent implements OnInit {
	newsItems: Array<Article>;

	@Input("language") currentLanguage: string;
	@Input("background") background: string;
	constructor(private httpSvc: HttpService) { }

	ngOnInit() {
		this.getNews();
	}
	getNews() {
		this.httpSvc.get('/api/Category/used/get').subscribe((result) => {
			this.newsItems = result.data;
		});
	}
}

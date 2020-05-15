import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/core/services/http.service";

@Component({
	selector: "app-news-detail-others",
	templateUrl: "./news-detail-others.component.html",
	styleUrls: ["./news-detail-others.component.scss"],
})
export class NewsDetailOthersComponent implements OnInit {
	newsOthers = [];
	@Input("language") currentLanguage: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getNewsList();
	}

	getNewsList() {
		const url =
			this.currentLanguage == "en"
				? `assets/api/${this.currentLanguage}/news/internal-news.json`
				: `assets/api/${this.currentLanguage}/news/tin-noi-bo.json`;
		this.httpSvc.get(url).subscribe((result) => {
			this.newsOthers = result.data.News;
		});
	}
}

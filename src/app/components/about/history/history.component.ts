import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { HttpService } from "src/app/services/http.service";
import { Article } from "src/app/models/core/Article.model";

@Component({
	selector: "app-history",
	templateUrl: "./history.component.html",
	styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
	sliderHistoryConfig: SwiperConfigInterface = {
		slidesPerView: 4,
		loop: true,
		speed: 1200,
		spaceBetween: 80,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".timeline .swiper-button-next",
			prevEl: ".timeline .swiper-button-prev",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	};
	years: Array<Article>;

	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getListTimeLine();
	}

	getListTimeLine() {
		this.httpSvc
			.get(`assets/api/${this.currentLanguage}/about/timeline.json`)
			.subscribe((result) => {
				this.years = result.Data;
			});
	}
}

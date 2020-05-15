import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { HttpService } from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";

@Component({
	selector: "app-reward",
	templateUrl: "./reward.component.html",
	styleUrls: ["./reward.component.scss"],
})
export class RewardComponent implements OnInit {
	sliderRewardConfig: SwiperConfigInterface = {
		slidesPerView: 3,
		loop: true,
		speed: 1200,
		spaceBetween: 55,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".slider-reward .swiper-button-next",
			prevEl: ".slider-reward .swiper-button-prev",
		},
		breakpoints: {
			1025: {
				spaceBetween: 30,
			},
			768: {
				spaceBetween: 15,
				slidesPerView: 2,
			},
		},
	};
	rewards: Array<ArticleModel>;

	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getListReward();
	}

	getListReward() {
		this.httpSvc
			.get(`assets/api/${this.currentLanguage}/about/rewards.json`)
			.subscribe((result) => {
				this.rewards = result.data;
			});
	}
}

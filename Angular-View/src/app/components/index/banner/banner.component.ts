import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { Image } from "src/app/models/core/Image.model";
import { HttpService } from "src/app/services/http.service";
@Component({
	selector: "app-banner",
	templateUrl: "./banner.component.html",
	styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
	bannerConfig: SwiperConfigInterface = {
		slidesPerView: 1,
		loop: true,
		speed: 1200,
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
	};
	banners: Array<Image>;

	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) { }

	ngOnInit() {
		this.getBanners();
	}

	getBanners() {
		this.httpSvc
			.get('/api/Banner/used/gets')
			.subscribe((result) => {
				console.log(result);
				this.banners = result.data;
			});
	}
}

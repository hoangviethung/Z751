import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfig, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
	selector: 'app-product-others',
	templateUrl: './product-others.component.html',
	styleUrls: ['./product-others.component.scss']
})
export class ProductOthersComponent implements OnInit {

	constructor(
		private activatedRouteSvc: ActivatedRoute,
		private languageSvc: LanguageService,
		private utilSvc: UtilsService,
		private httpSvc: HttpService
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}

	@Input('routeParamId') routeParamId: string;

	productOthers = [];
	currentLocale: string;
	sliderProductOthers: SwiperConfigInterface = {
		slidesPerView: 3,
		loop: true,
		speed: 1200,
		spaceBetween: 38,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: '.slider-product-othders .swiper-button-next',
			prevEl: '.slider-product-othders .swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			575: {
				slidesPerView: 1,
			}
		}
	}

	ngOnInit() {
		this.getProductOthers();
	}

	getProductOthers() {
		this.activatedRouteSvc.params.subscribe(routeParams => {
			const url = `assets/db/${this.currentLocale}/${routeParams.id}.json`;
			this.productOthers = [];
			this.httpSvc.get(url).subscribe(
				result => {
					result.data.products.map(item => {
						let itemTmp = item;
						itemTmp.url = this.utilSvc.alias(item.title);
						this.productOthers.push(itemTmp);

					});
				},
				err => {
					console.log(err);
				}
			)
			this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
				const url = `assets/db/${lang}/${routeParams.id}.json`;
				this.productOthers = [];
				this.httpSvc.get(url).subscribe(
					result => {
						result.data.products.map(item => {
							let itemTmp = item;
							itemTmp.url = this.utilSvc.alias(item.title);
							this.productOthers.push(itemTmp);
						});
					},
					err => {
						console.log(err);
					}
				)
			})
		})
	}

}

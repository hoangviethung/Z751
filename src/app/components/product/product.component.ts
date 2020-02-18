import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	products = [];
	title: string;
	desc: string;
	currentLocale: string;


	constructor(
		private activatedRouteSvc: ActivatedRoute,
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private languageSvc: LanguageService,
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}


	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this.activatedRouteSvc.params.subscribe(routeParams => {
			const url = `assets/db/${this.currentLocale}/${routeParams.id}.json`;
			this.httpSvc.get(url).subscribe(result => {
				this.pageInfoSvc.setTitle(result.data.title)
				this.title = result.data.title;
				this.desc = result.data.desc;
				this.products = result.data.products;
			})

			this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
				const url = `assets/db/${lang}/${routeParams.id}.json`;
				this.httpSvc.get(url).subscribe(result => {
					this.pageInfoSvc.setTitle(result.data.title)
					this.title = result.data.title;
					this.desc = result.data.desc;
					this.products = result.data.products;
				})
			})
		})

	}
}

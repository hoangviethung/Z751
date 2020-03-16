import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, ResolveEnd } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { BreadcrumbService } from '../_shared/breadcrumb/breadcrumb.service';
import { filter, map } from 'rxjs/operators';

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
		private brcSvc: BreadcrumbService,
		private router: Router
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}


	ngOnInit() {
		this.getProducts();
		this.activatedRouteSvc.paramMap
			.pipe(map(() => window.history.state))
			.subscribe(state => {
				console.log(state);
			})
	}

	getProducts() {

		this.activatedRouteSvc.params.subscribe(routeParams => {
			let breadcrumbs = {
				en: ['Home', 'Products'],
				vi: ['Trang chủ', 'Sản phẩm'],
			};
			const url = `assets/db/${this.currentLocale}/${routeParams.id}.json`;
			this.brcSvc.setBreadcrumb(breadcrumbs);
			this.httpSvc.get(url).subscribe(result => {
				breadcrumbs[this.currentLocale].push(result.data.title);
				this.pageInfoSvc.setTitle(result.data.title);
				this.title = result.data.title;
				this.desc = result.data.desc;
				this.products = result.data.products;
			})
			this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
				let breadcrumbs = {
					en: ['Home', 'Products'],
					vi: ['Trang chủ', 'Sản phẩm'],
				};
				const url = `assets/db/${lang}/${routeParams.id}.json`;
				this.brcSvc.setBreadcrumb(breadcrumbs);
				this.httpSvc.get(url).subscribe(result => {
					this.pageInfoSvc.setTitle(result.data.title)
					this.title = result.data.title;
					this.desc = result.data.desc;
					this.products = result.data.products;
					breadcrumbs[this.currentLocale].push(result.data.title)
				})
			})
		})
	}
}

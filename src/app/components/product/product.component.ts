import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { ActivatedRoute, Router, NavigationStart, RoutesRecognized, NavigationEnd } from '@angular/router';
import { HttpService } from 'src/app/shared/services/markup.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	products = [];
	title: string;
	desc: string;

	constructor(
		private pageService: PageInfoService,
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private router: Router
	) { }

	ngOnInit() {
		this.fecthProducts();

		this.router.events.subscribe(event => {
			const id = this.activatedRoute.snapshot.queryParams['id'];
			if (event instanceof NavigationEnd) {
				this.httpSvc.get(`/assets/db/vi/${id}.json`).subscribe(result => {
					this.products = result.data.products;
					this.title = result.data.title;
					this.pageService.setTitle(this.title);
				})
			}
		})
	}

	fecthProducts() {
		const id = this.activatedRoute.snapshot.queryParams['id'];
		this.httpSvc.get(`/assets/db/vi/${id}.json`).subscribe(result => {
			this.title = result.data.title;
			this.desc = result.data.desc;
			this.products = result.data.products;
		})
	}
}

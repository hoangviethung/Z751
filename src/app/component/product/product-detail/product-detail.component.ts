import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { routeAnimation } from '../../../shared/animations';
import { ProductService } from '../product.service';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css'],
	animations: [routeAnimation]
})
export class ProductDetailComponent implements OnInit, OnDestroy {

	constructor(
		private readonly meta: MetaService,
		private productSvc: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	product: any;

	ngOnInit() {
		this.meta.setTitle('Detail Product');
		// this.meta.setTag('og:image', this.item.imageUrl);
		this.fetchData();
	}
	ngOnDestroy() {
		this.meta.removeTag('property="og:type"');
	}

	fetchData() {
		const url = this.route.snapshot.paramMap.get('url');
		this.productSvc.getProduct(url).subscribe(product => {
			this.product = product.data;
		})
	}
}

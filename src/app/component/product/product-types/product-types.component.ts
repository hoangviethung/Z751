import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { routeAnimation } from '../../../shared/animations';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-types',
	templateUrl: './product-types.component.html',
	styleUrls: ['./product-types.component.css'],
	animations: [routeAnimation],
	providers: [ProductService]
})
export class ProductTypesComponent implements OnInit, OnDestroy {

	products: Array<any>;

	constructor(
		private localize: LocalizeRouterService,
		private router: Router,
		private route: ActivatedRoute,
		private readonly meta: MetaService,
		private productSvc: ProductService
	) { }

	ngOnInit() {
		this.meta.setTitle(`Page for`);
		// this.meta.setTag('og:image', this.item.imageUrl);
		this.fetchData();
	}

	ngOnDestroy() {
		this.meta.removeTag('property="og:type"');
	}

	redirectTypes(url: any) {
		const code = this.route.snapshot.paramMap.get('type');
		let translatePath: any = this.localize.translateRoute(`/products/${code}/${url}`);
		this.router.navigate([translatePath]);
	}

	fetchData() {
		const code = this.route.snapshot.paramMap.get('type');
		this.productSvc.getProductsByCategoryId(code).subscribe(rs => {
			this.products = rs.data;
		});
	}

}

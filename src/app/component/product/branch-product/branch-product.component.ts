import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';
import { routeAnimation } from '../../../shared/animations';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppEnums } from '../../../shared/enum/AppEnums';

@Component({
	selector: 'app-branch-product',
	templateUrl: './branch-product.component.html',
	styleUrls: ['./branch-product.component.css'],
	animations: [routeAnimation],
	providers: [ProductService]
})
export class BranchProductComponent implements OnInit {

	public listBranch: any;

	constructor(
		private localize: LocalizeRouterService,
		private router: Router,
		private _productSvc: ProductService,
		private spinner: NgxSpinnerService,
	) { }

	ngOnInit() {
		this.spinner.show();
		this.fetchData();
	}

	redirectTypes(code: string) {
		let translatePath: any = this.localize.translateRoute(`/products/${code}`);
		this.router.navigate([translatePath]);
	}

	private fetchData() {
		this._productSvc.getHavingProduct().subscribe(rs => {
			if (rs.result == AppEnums.Success) {
				this.listBranch = rs.data;
				this.spinner.hide();
			} else {
				this._productSvc.showAlert(rs.errorMessage);
			}
		})
	}
}

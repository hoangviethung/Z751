import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'app-product-simple',
	templateUrl: './product-simple.component.html',
	styleUrls: ['./product-simple.component.scss']
})
export class ProductSimpleComponent implements OnInit {

	@Input() product: any;
	url: string;

	constructor(
		private utilSvc: UtilsService
	) { }

	ngOnInit() {
		this.url = this.utilSvc.alias(this.product.name);
	}

}

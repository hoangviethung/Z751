import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/_utilities/services/page-info.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Sản phẩm');
	}

	ngOnInit() {
	}

}

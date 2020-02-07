import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	state$: Observable<object>;

	constructor(
		private pageService: PageInfoService,
		private activatedRoute: ActivatedRoute
	) {
		this.pageService.setTitle('Sản phẩm');
	}

	ngOnInit() {
		this.state$ = this.activatedRoute.paramMap

	}

}

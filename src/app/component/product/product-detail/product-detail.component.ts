import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [routeAnimation]
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  constructor(
    private readonly meta: MetaService
  ) { }

  ngOnInit() {
    this.meta.setTitle('Detail Product');
    // this.meta.setTag('og:image', this.item.imageUrl);
  }
  ngOnDestroy() {
    this.meta.removeTag('property="og:type"');
  }
}

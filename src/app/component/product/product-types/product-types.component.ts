import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css'],
  animations: [routeAnimation]
})
export class ProductTypesComponent implements OnInit, OnDestroy  {

  constructor(
    private localize: LocalizeRouterService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly meta: MetaService
  ) { }

  ngOnInit() {
    this.meta.setTitle(`Page for`);
    // this.meta.setTag('og:image', this.item.imageUrl);
  }
  
  ngOnDestroy() {
    this.meta.removeTag('property="og:type"');
 }

  redirectTypes(url: string){
    const id = this.route.snapshot.paramMap.get('type');
    let translatePath: any = this.localize.translateRoute('/products/'+id+'/'+url);
    this.router.navigate([translatePath]);
  }

}

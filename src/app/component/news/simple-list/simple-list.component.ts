import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css'],
  animations: [routeAnimation]
})
export class SimpleListComponent implements OnInit,OnDestroy {

  constructor(
    private localize: LocalizeRouterService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly meta: MetaService
  ) { }

  ngOnInit() {
    this.meta.setTitle('List news');
  }

  ngOnDestroy() {
    this.meta.removeTag('property="og:type"');
  }
  
  redirectTypes(url: string){
    const id = this.route.snapshot.paramMap.get('type');
    let translatePath: any = this.localize.translateRoute('/news/'+id+'/'+url);
    this.router.navigate([translatePath]);
  }

}

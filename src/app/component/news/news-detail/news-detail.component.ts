import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  animations: [routeAnimation]
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  constructor(
    private readonly meta: MetaService
  ) { }

  ngOnInit() {
    this.meta.setTitle('News detail');
  }

  ngOnDestroy() {
    this.meta.removeTag('property="og:type"');
  }

}

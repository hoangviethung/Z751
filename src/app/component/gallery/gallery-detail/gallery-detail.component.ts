import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css'],
  animations: [routeAnimation]
})
export class GalleryDetailComponent implements OnInit {

  constructor(
    private localize: LocalizeRouterService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  transfer(namePath: string){
    let translatePath: any = this.localize.translateRoute(`/gallery/${namePath}`);
    this.router.navigate([translatePath]);
  }
}

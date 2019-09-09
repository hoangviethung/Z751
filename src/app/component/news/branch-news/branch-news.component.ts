import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-branch-news',
  templateUrl: './branch-news.component.html',
  styleUrls: ['./branch-news.component.css'],
  animations: [routeAnimation]
})
export class BranchNewsComponent implements OnInit {

  constructor(
    private localize: LocalizeRouterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectTypes(type: string){
    let translatePath: any = this.localize.translateRoute(`/news/${type}`);
    this.router.navigate([translatePath]);
  }
}

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private localizeService: LocalizeRouterService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
  }

  switchLanguage(lang: string) {
    this.localizeService.changeLanguage(lang);
    localStorage.setItem('locale', lang);
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private localizeService: LocalizeRouterService) { }

  ngOnInit() {
  }

  switchLanguage(lang: string) {
    this.localizeService.changeLanguage(lang);
    localStorage.setItem('locale', lang);
    return false;
  }

}

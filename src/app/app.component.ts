import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationEnd } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import {environment as environments} from '../environments/environment';

@Component({
  selector: 'app-web4g',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private readonly meta: MetaService,
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (this.platformId === 'browser') {
        let langFake = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
        localStorage.setItem('locale', langFake);
        this.meta.setTag('og:url', environments.locales + event.url);
        this.meta.setTag('og:locale', localStorage.getItem('locale'));
      }
    })
  }

  onActivate(event$: any, scrollContainer: any): void {
    scrollContainer.scrollTop = 0;
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  ngOnDestroy() {
    this.meta.removeTag('property="og:type"');
  }

}

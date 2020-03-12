import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { MetaService } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';
// import { filter } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'z751';

	constructor(
		// private router: Router,
		// private readonly meta: MetaService,
		public translate: TranslateService,
		@Inject(PLATFORM_ID) private platformId: Object
	) {
		
		// router.events.pipe(
		// 	filter(event => event instanceof NavigationEnd)
		// ).subscribe((event: NavigationEnd) => {
		// 	if (this.platformId === 'browser') {
		// 		let langFake = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
		// 		localStorage.setItem('locale', langFake);
		// 		this.meta.setTag('og:url', environment.locales + event.url);
		// 		this.meta.setTag('og:locale', localStorage.getItem('locale'));
		// 	}
		// })
	}

	ngOnInit() { }
}
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'app-news-detail-others',
	templateUrl: './news-detail-others.component.html',
	styleUrls: ['./news-detail-others.component.scss']
})
export class NewsDetailOthersComponent implements OnInit {

	listNewsOthers = [];
	currentLocale: string;

	constructor(
		private httpSvc: HttpService,
		private languageSvc: LanguageService,
		private utilSvc: UtilsService
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.getNewsList();

	}

	getNewsList() {
		this.httpSvc.get(`assets/db/${this.currentLocale}/news.json`)
			.subscribe(
				result => {
					// this.listNewsOthers = result.data;
					result.data.map(item => {
						let itemTmp = item;
						itemTmp.url = this.utilSvc.alias(item.title);
						this.listNewsOthers.push(itemTmp);
					});
				}
			)
		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			this.listNewsOthers = [];
			this.httpSvc.get(`assets/db/${lang}/news.json`)
				.subscribe(
					result => {
						// this.listNewsOthers = result.data;
						result.data.map(item => {
							let itemTmp = item;
							itemTmp.url = this.utilSvc.alias(item.title);
							this.listNewsOthers.push(itemTmp)
						})
					}
				)
		})
	}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
	currentLocale: string;
	content = {};

	constructor(
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private languageSvc: LanguageService
	) { 
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(param => {
			this.httpSvc.get(`assets/db/${this.currentLocale}/${param.id}.json`).subscribe(result => {
				this.content = result.data;
			})
		})
		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			this.activatedRoute.params.subscribe(param => {
				this.httpSvc.get(`assets/db/${lang}/${param.id}.json`).subscribe(result => {
					this.content = result.data;
				})
			})
		})
	}
}

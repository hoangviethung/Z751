import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './_core/services/authenticate.service';
import { LanguageModel } from './_core/models/language';
import { HttpService } from './_core/services/http.service';
import { APIConfig } from './_core/API-config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	languages: Array<LanguageModel>
	title = 'admin';

	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit() {
		this.getLanguages();
	}

	getLanguages() {
		this.httpSvc.get(APIConfig.Language.Gets)
			.subscribe((languages) => {
				this.languages = languages.data
				console.log(this.languages);
			})
	}
}

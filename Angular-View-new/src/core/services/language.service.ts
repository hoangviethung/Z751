import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API } from "../configs/api";
import { LanguageModel } from "../models/Language.model";
import { environment } from "src/environments/environment";
import { isPlatformBrowser } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
	providedIn: "root",
})
export class LanguageService {
	public currentLanguage: string = "vi";
	public languages: Array<LanguageModel>;

	constructor(
		private http: HttpClient,
		@Inject(PLATFORM_ID) private platform,
		private translateSvc: TranslateService
	) {
		if (isPlatformBrowser(this.platform)) {
			if (localStorage.getItem("languages")) {
				JSON.parse(localStorage.getItem("languages")).forEach(
					(item: LanguageModel) => {
						if (item.isDefault) {
							this.setCurrentLanguage(item.key);
						}
					}
				);
			}
		} else {
			this.getLanguages().subscribe((response) => {
				response.data.forEach((item: LanguageModel) => {
					if (item.isDefault) {
						this.setCurrentLanguage(item.key);
					}
				});
			});
		}
	}

	getLanguages(): Observable<any> {
		if (isPlatformBrowser(this.platform)) {
			if (localStorage.getItem("languages")) {
				return new Observable((observer) => {
					observer.next({
						code: 200,
						data: JSON.parse(localStorage.getItem("languages")),
						message: null,
					});
				});
			} else {
				return this.http.get(
					environment.remoteBaseUrl + API.Language.gets,
					{
						responseType: "json",
						headers: {
							Accept: "text/plain",
							"Data-Type": "application/json",
							"Content-Type": "application/json-patch+json",
						},
					}
				);
			}
		} else {
			return this.http.get(
				environment.remoteBaseUrl + API.Language.gets,
				{
					responseType: "json",
					headers: {
						Accept: "text/plain",
						"Data-Type": "application/json",
						"Content-Type": "application/json-patch+json",
					},
				}
			);
		}
	}

	setLanguages(languages: Array<LanguageModel>) {
		this.languages = languages;
	}

	setCurrentLanguage(lang: string) {
		this.currentLanguage = lang;
		this.translateSvc.setDefaultLang(this.currentLanguage);
	}
}

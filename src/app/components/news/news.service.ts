import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';

@Injectable()

export class NewsService {

	public newsList;

	constructor(
		private httpSvc: HttpService,
	) {
	}

	fetchNews(url: string) {
		return this.httpSvc.get(url);
	}

	fetchNewsDetail(url:string) {
		return this.httpSvc.get(url);
	}
}
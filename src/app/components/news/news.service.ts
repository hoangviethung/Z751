import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class NewsService {

	public newsList;

	constructor(
		private httpSvc: HttpService,
		private http: HttpClient
	) {
	}

	fetchNews(url: string): Observable<any> {
		return this.http.get(url);
	}

	fetchNewsDetail(url: string): Observable<any> {
		return this.http.get(url);
	}
}
import { Injectable } from '@angular/core'
import { HttpService } from 'src/_core/services/http.service'
import { ApiConfig } from 'src/_core/configs/api'
import { Observable } from 'rxjs'
import { BannerModel } from 'src/_core/models/banner.model'
import { Router } from '@angular/router'
import { HttpParams } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class BannerService {
	banners: Array<BannerModel>

	constructor(private httpSvc: HttpService, private router: Router) {}

	fetch(params?): Observable<any> {
		return this.httpSvc.get(ApiConfig.banner.gets, params)
	}

	add(data: BannerModel) {
		return this.httpSvc.post(ApiConfig.banner.add, data)
	}

	update(data: BannerModel) {
		return this.httpSvc.post(ApiConfig.banner.update, data)
	}

	delete(id: string) {
		const params = new HttpParams().set('id', id)

		return this.httpSvc.post(
			`${ApiConfig.banner.delete}?${params.toString()}`
		)
	}
}
